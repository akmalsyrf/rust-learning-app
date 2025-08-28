import { Platform, Alert } from 'react-native';
import {
  generateCertificateHTML,
  getCertificateFileName,
  getCertificateTitle,
  CertificateData,
} from '../utils/certificateGenerator';

import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

export interface CertificateService {
  generatePDF: (data: CertificateData) => Promise<string | null>;
  shareCertificate: (filePath: string, data: CertificateData) => Promise<void>;
}

class RealCertificateService implements CertificateService {
  async generatePDF(data: CertificateData): Promise<string | null> {
    try {
      console.log('Generating PDF for:', data);

      // Generate HTML content
      const html = generateCertificateHTML(data);

      // Use Expo Print to generate PDF
      const { uri } = await Print.printToFileAsync({
        html,
        base64: false,
      });

      console.log('PDF generated successfully:', uri);
      return uri;
    } catch (error) {
      console.error('Error generating PDF:', error);
      return null;
    }
  }

  async shareCertificate(filePath: string, data: CertificateData): Promise<void> {
    try {
      console.log('Sharing certificate from:', filePath);

      const isSharingAvailable = await Sharing.isAvailableAsync();
      console.log('Sharing available:', isSharingAvailable);

      // Check if sharing is available
      if (isSharingAvailable) {
        console.log('Starting share process...');
        await Sharing.shareAsync(filePath, {
          mimeType: 'application/pdf',
          dialogTitle: getCertificateTitle(data),
          UTI: 'com.adobe.pdf', // iOS specific
        });
        console.log('Certificate shared successfully');
      } else {
        // Fallback if sharing is not available
        Alert.alert(
          'Share Certificate',
          `Certificate ready to share!\n\nFile: ${getCertificateFileName(data)}\nPath: ${filePath}\n\nSharing is not available on this device.`,
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('Error sharing certificate:', error);
      throw error;
    }
  }
}

// Export the real service instance
export const certificateService = new RealCertificateService();
