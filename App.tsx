import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import Navigator from '@/navigation';
import theme from '@/utils/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
      <StatusBar translucent />
    </ThemeProvider>
  );
}
