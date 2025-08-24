export interface CodeExecutionRequest {
  language: string;
  version: string;
  files: Array<{
    name: string;
    content: string;
  }>;
  stdin?: string;
  args?: string[];
}

export interface CodeExecutionResponse {
  language: string;
  version: string;
  run: {
    stdout: string;
    stderr: string;
    code: number;
    signal: string | null;
    output: string;
  };
  compile?: {
    stdout: string;
    stderr: string;
    code: number;
    signal: string | null;
    output: string;
  };
}

export interface RustExecutionResult {
  success: boolean;
  output: string;
  error: string;
  executionTime?: number;
}

class CodeExecutionService {
  private readonly PISTON_API_URL = 'https://emkc.org/api/v2/piston/execute';

  // Rust language configuration for Piston - using available version
  private readonly RUST_CONFIG = {
    language: 'rust',
    version: '1.68.2', // Only available version in Piston API
    defaultFile: 'main.rs',
  };

  async executeRustCode(code: string, stdin?: string): Promise<RustExecutionResult> {
    try {
      const startTime = Date.now();

      // Ensure code has proper structure
      let processedCode = code.trim();
      if (!processedCode.includes('fn main()')) {
        processedCode = `fn main() {\n  ${processedCode}\n}`;
      }

      const request: CodeExecutionRequest = {
        language: this.RUST_CONFIG.language,
        version: this.RUST_CONFIG.version,
        files: [
          {
            name: this.RUST_CONFIG.defaultFile,
            content: processedCode,
          },
        ],
        stdin: stdin || '',
        args: [],
      };

      console.log('Sending request to Piston API:', JSON.stringify(request, null, 2));

      const response = await fetch(this.PISTON_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'RustLearningApp/1.0',
        },
        body: JSON.stringify(request),
      });

      console.log('Piston API response status:', response.status);
      console.log('Piston API response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Piston API error response:', errorText);

        // Try to parse error response
        let errorMessage = `HTTP error! status: ${response.status}`;
        try {
          const errorData = JSON.parse(errorText);
          if (errorData.message) {
            errorMessage = errorData.message;
          }
        } catch (e) {
          // If we can't parse JSON, use the raw text
          if (errorText) {
            errorMessage = errorText;
          }
        }

        throw new Error(errorMessage);
      }

      const result: CodeExecutionResponse = await response.json();
      console.log('Piston API success response:', JSON.stringify(result, null, 2));

      const executionTime = Date.now() - startTime;

      // Check if compilation was successful
      if (result.compile && result.compile.code !== 0) {
        return {
          success: false,
          output: '',
          error: result.compile.stderr || 'Compilation failed',
          executionTime,
        };
      }

      // Check if execution was successful
      if (result.run.code !== 0) {
        return {
          success: false,
          output: result.run.stdout || '',
          error: result.run.stderr || 'Execution failed',
          executionTime,
        };
      }

      return {
        success: true,
        output: result.run.stdout || '',
        error: result.run.stderr || '',
        executionTime,
      };
    } catch (error) {
      console.error('Code execution error:', error);

      // Provide more specific error messages
      let errorMessage = 'Unknown error occurred';
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Network error: Unable to connect to code execution service';
        } else if (error.message.includes('HTTP error! status: 400')) {
          errorMessage = 'Invalid request: Please check your code syntax';
        } else if (error.message.includes('HTTP error! status: 429')) {
          errorMessage = 'Rate limit exceeded: Please wait a moment before trying again';
        } else if (error.message.includes('HTTP error! status: 500')) {
          errorMessage = 'Server error: Code execution service is temporarily unavailable';
        } else {
          errorMessage = error.message;
        }
      }

      return {
        success: false,
        output: '',
        error: errorMessage,
        executionTime: undefined,
      };
    }
  }

  // Helper method to format execution result for display
  formatExecutionResult(result: RustExecutionResult): string {
    let formatted = '';

    if (result.success) {
      formatted += `✅ Execution successful`;
      if (result.executionTime) {
        formatted += ` (${result.executionTime}ms)\n\n`;
      } else {
        formatted += '\n\n';
      }

      if (result.output) {
        formatted += `Output:\n${result.output}`;
      }

      if (result.error) {
        formatted += `\n\nWarnings:\n${result.error}`;
      }
    } else {
      formatted += `❌ Execution failed\n\n`;

      if (result.error) {
        formatted += `Error:\n${result.error}`;
      }

      if (result.output) {
        formatted += `\n\nPartial output:\n${result.output}`;
      }
    }

    return formatted;
  }

  // Validate Rust code before execution
  validateRustCode(code: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Basic validation checks
    if (!code.trim()) {
      errors.push('Code cannot be empty');
    }

    // More lenient validation - allow code without main function
    // as we'll add it automatically if needed

    if (!code.includes('{') || !code.includes('}')) {
      errors.push('Code must have proper braces');
    }

    // Check for common Rust syntax issues
    if (code.includes('println!') && !code.includes('"')) {
      errors.push('println! macro must have string literals');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  // Get available Rust versions from Piston
  async getAvailableRustVersions(): Promise<string[]> {
    try {
      const response = await fetch('https://emkc.org/api/v2/piston/runtimes');
      if (response.ok) {
        const runtimes = await response.json();
        const rustRuntimes = runtimes.filter((rt: any) => rt.language === 'rust');
        return rustRuntimes.map((rt: any) => rt.version);
      }
    } catch (error) {
      console.error('Failed to fetch available Rust versions:', error);
    }
    return ['1.68.2']; // Only available version in Piston API
  }
}

export const codeExecutionService = new CodeExecutionService();
