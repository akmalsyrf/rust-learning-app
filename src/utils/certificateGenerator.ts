export interface CertificateData {
  userName: string;
  type: 'lesson' | 'codePractice';
  completionDate: string;
  xp: number;
  totalQuestions?: number;
  totalPractices?: number;
  // Progress information
  completedCount: number;
  totalCount: number;
  completedTopics: string[];
  // Additional stats
  accuracy?: number;
  streakDays?: number;
  // Detailed topic progress
  topicProgress?: TopicProgress[];
}

// Extended interface for detailed topic progress
export interface TopicProgress {
  name: string;
  completedQuestions: number;
  totalQuestions: number;
  progress: number;
}

import { topics } from '../data/topics';

export const generateCertificateHTML = (data: CertificateData): string => {
  const {
    userName,
    type,
    completionDate,
    xp,
    totalQuestions,
    totalPractices,
    completedCount,
    totalCount,
    completedTopics,
    accuracy,
    streakDays,
    topicProgress,
  } = data;

  const certificateType = type === 'lesson' ? 'Lesson Completion' : 'Code Practice Completion';
  const achievementText =
    type === 'lesson'
      ? `Successfully completed ${completedCount} out of ${totalCount} questions across various lessons`
      : `Successfully completed ${completedCount} out of ${totalCount} code practice exercises`;

  // Generate detailed topics information dynamically
  const generateTopicsDetail = () => {
    if (completedTopics.length === 0) {
      return `
        <div class="page-break"></div>
        <div class="certificate">
          <div class="watermark">RUST</div>
          
          <div class="header">
            <div class="logo">🦀</div>
            <div class="title">Completed Topics Details</div>
            <div class="subtitle">Rust Learning App - ${userName}</div>
          </div>
          
          <div class="topics-detail">
            <div class="topic-item">
              <h3>No Topics Completed Yet</h3>
              <div class="topic-metrics">
                <div class="metric">
                  <span class="metric-label">Status:</span>
                  <span class="metric-value">Keep learning to unlock topics!</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="footer">
            <div class="signature">
              Start your Rust learning journey to see your completed topics here.
            </div>
          </div>
        </div>
      `;
    }

    // Generate topic items dynamically based on topicProgress
    const generateTopicItems = () => {
      // Helper function to get topic skills from topics data
      const getTopicSkills = (topicName: string): string => {
        // Get skills from imported topics data
        const topic = topics.find(t => t.title.en === topicName);
        return topic?.requiredSkills.en || 'Core Rust programming concepts and syntax';
      };

      if (!topicProgress || topicProgress.length === 0) {
        return completedTopics
          .map(topicName => {
            const topicSkills = getTopicSkills(topicName);
            return `
            <div class="topic-item">
              <h3>${topicName}</h3>
              <div class="topic-metrics">
                <div class="metric">
                  <span class="metric-label">Required Skills:</span>
                  <span class="metric-value">${topicSkills}</span>
                </div>
                <div class="metric">
                  <span class="metric-label">${type === 'lesson' ? 'Questions' : 'Practices'} Completed:</span>
                  <span class="metric-value">${completedCount}/${totalCount}</span>
                </div>
                <div class="metric">
                  <span class="metric-label">Mastery Level:</span>
                  <span class="metric-value">${getMasteryLevel(completedCount, totalCount)}</span>
                </div>
              </div>
            </div>
          `;
          })
          .join('');
      }

      return topicProgress
        .map(topic => {
          const masteryLevel = getMasteryLevel(topic.completedQuestions, topic.totalQuestions);
          const topicSkills = getTopicSkills(topic.name);

          return `
          <div class="topic-item">
            <h3>${topic.name}</h3>
            <div class="topic-metrics">
              <div class="metric">
                <span class="metric-label">Required Skills:</span>
                <span class="metric-value">${topicSkills}</span>
              </div>
              <div class="metric">
                <span class="metric-label">${type === 'lesson' ? 'Questions' : 'Practices'} Completed:</span>
                <span class="metric-value">${topic.completedQuestions}/${topic.totalQuestions} (${topic.progress}%)</span>
              </div>
              <div class="metric">
                <span class="metric-label">Mastery Level:</span>
                <span class="metric-value">${masteryLevel}</span>
              </div>
              <div class="metric">
                <span class="metric-label">Progress:</span>
                <span class="metric-value">${topic.progress}%</span>
              </div>
            </div>
          </div>
        `;
        })
        .join('');
    };

    return `
      <div class="page-break"></div>
      <div class="certificate">
        <div class="watermark">RUST</div>
        
        <div class="header">
          <div class="logo">🦀</div>
          <div class="title">Completed Topics Details</div>
          <div class="subtitle">Rust Learning App - ${userName}</div>
        </div>
        
        <div class="topics-detail">
          ${generateTopicItems()}
        </div>
        
        <div class="footer">
          <div class="signature">
            This detailed breakdown shows your mastery of each Rust programming concept.
          </div>
        </div>
      </div>
    `;
  };

  const getMasteryLevel = (completed: number, total: number): string => {
    const percentage = (completed / total) * 100;
    if (percentage >= 90) return 'Expert';
    if (percentage >= 75) return 'Advanced';
    if (percentage >= 50) return 'Intermediate';
    if (percentage >= 25) return 'Beginner';
    return 'Novice';
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${certificateType} Certificate</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #333;
          min-height: 100vh;
          box-sizing: border-box;
        }
        .certificate {
          background: white;
          border-radius: 20px;
          padding: 60px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          max-width: 800px;
          width: 100%;
          position: relative;
          overflow: hidden;
          margin-bottom: 40px;
          box-sizing: border-box;
        }
        .certificate::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
        }
        .page-break {
          page-break-before: always;
        }
        .header {
          margin-bottom: 40px;
        }
        .logo {
          font-size: 48px;
          margin-bottom: 20px;
        }
        .title {
          font-size: 36px;
          font-weight: bold;
          color: #667eea;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .subtitle {
          font-size: 18px;
          color: #666;
          margin-bottom: 40px;
        }
        .content {
          margin: 40px 0;
        }
        .userName {
          font-size: 32px;
          font-weight: bold;
          color: #333;
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .achievement {
          font-size: 20px;
          color: #555;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        .stats {
          display: flex;
          justify-content: space-around;
          margin: 40px 0;
          flex-wrap: wrap;
        }
        .stat {
          text-align: center;
          margin: 20px;
        }
        .statValue {
          font-size: 28px;
          font-weight: bold;
          color: #667eea;
          margin-bottom: 5px;
        }
        .statLabel {
          font-size: 14px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .progress-section {
          margin: 30px 0;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 15px;
        }
        .progress-section h3 {
          font-size: 18px;
          font-weight: bold;
          color: #667eea;
          margin-bottom: 20px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .progress-stats {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .progress-stat {
          text-align: center;
          margin: 10px;
        }
        .progress-value {
          font-size: 24px;
          font-weight: bold;
          color: #667eea;
          margin-bottom: 5px;
        }
        .progress-label {
          font-size: 12px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .topics-detail {
          text-align: left;
          margin: 30px 0;
        }
        .topic-item {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 20px;
          border-left: 4px solid #667eea;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .topic-item h3 {
          font-size: 20px;
          font-weight: bold;
          color: #667eea;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .topic-metrics {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .metric {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
          gap: 15px;
        }
        .metric:last-child {
          border-bottom: none;
        }
        .metric-label {
          font-weight: 600;
          color: #555;
          font-size: 14px;
          flex-shrink: 0;
          min-width: 120px;
        }
        .metric-value {
          color: #667eea;
          font-weight: 500;
          font-size: 14px;
          text-align: right;
          flex: 1;
          word-wrap: break-word;
        }
        .footer {
          margin-top: 40px;
          padding-top: 30px;
          border-top: 2px solid #eee;
        }
        .date {
          font-size: 16px;
          color: #666;
          margin-bottom: 20px;
        }
        .signature {
          font-size: 14px;
          color: #999;
        }
        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
          font-size: 120px;
          color: rgba(102, 126, 234, 0.1);
          z-index: -1;
          font-weight: bold;
        }
        @media print {
          body {
            background: white;
            padding: 10px;
          }
          .certificate {
            box-shadow: none;
            border: 2px solid #ddd;
            page-break-inside: avoid;
            max-width: 100%;
            padding: 40px;
          }
          .page-break {
            page-break-before: always;
          }
        }
        
        @media screen and (max-width: 900px) {
          body {
            padding: 10px;
          }
          .certificate {
            padding: 40px 20px;
            margin: 10px;
          }
          .metric {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
          }
          .metric-label {
            min-width: auto;
          }
          .metric-value {
            text-align: left;
          }
        }
      </style>
    </head>
    <body>
      <div class="certificate">
        <div class="watermark">RUST</div>
        
        <div class="header">
          <div class="logo">🦀</div>
          <div class="title">Certificate of Achievement</div>
          <div class="subtitle">Rust Learning App</div>
        </div>
        
        <div class="content">
          <div class="userName">${userName}</div>
          <div class="achievement">${achievementText}</div>
        </div>
        
        <div class="stats">
          <div class="stat">
            <div class="statValue">${xp}</div>
            <div class="statLabel">XP Earned</div>
          </div>
          <div class="stat">
            <div class="statValue">${completedCount}/${totalCount}</div>
            <div class="statLabel">${type === 'lesson' ? 'Questions' : 'Practices'} Completed</div>
          </div>
          <div class="stat">
            <div class="statValue">${Math.round((completedCount / totalCount) * 100)}%</div>
            <div class="statLabel">Completion Rate</div>
          </div>
        </div>
        
        ${
          accuracy !== undefined
            ? `
        <div class="progress-section">
          <h3>Performance Metrics</h3>
          <div class="progress-stats">
            <div class="progress-stat">
              <div class="progress-value">${accuracy}%</div>
              <div class="progress-label">Accuracy</div>
            </div>
            ${
              streakDays !== undefined
                ? `
            <div class="progress-stat">
              <div class="progress-value">${streakDays}</div>
              <div class="progress-label">Day Streak</div>
            </div>
            `
                : ''
            }
          </div>
        </div>
        `
            : ''
        }
        
        <div class="footer">
          <div class="date">Issued on: ${completionDate}</div>
          <div class="signature">
            This certificate is proudly presented to recognize your dedication and achievement in learning Rust programming.
          </div>
        </div>
      </div>
      
      ${generateTopicsDetail()}
    </body>
    </html>
  `;
};

export const getCertificateFileName = (data: CertificateData): string => {
  const { userName, type, completionDate } = data;
  const date = new Date(completionDate).toISOString().split('T')[0];
  const typeText = type === 'lesson' ? 'Lesson' : 'CodePractice';
  return `Rust_${typeText}_Certificate_${userName}_${date}.pdf`;
};

export const getCertificateTitle = (data: CertificateData): string => {
  const { type } = data;
  return type === 'lesson' ? 'Lesson Completion Certificate' : 'Code Practice Certificate';
};
