import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Text } from './src/components/Text/Text.tsx';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme.ts';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge">Nubble</Text>
        <Text preset="headingMedium">Nubble</Text>
        <Text preset="headingSmall">Nubble</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
