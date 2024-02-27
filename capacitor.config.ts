import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'test.sample',
  appName: 'test-sample',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
