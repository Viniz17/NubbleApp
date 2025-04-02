import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme.ts';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
