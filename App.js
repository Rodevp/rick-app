import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import Stack from './navigation/Stack';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </>
  );
}
