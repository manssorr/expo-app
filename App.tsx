import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import Navigator from '@/navigation';
import theme from '@/utils/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
