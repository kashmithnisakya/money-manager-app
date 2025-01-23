import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* Main landing page */}
      <Stack.Screen name="index" options={{ title: 'Money Manager', headerShown: false }} />
      
      {/* Auth routes */}
      <Stack.Screen name="auth/login" options={{ title: 'Login', headerShown: false }} />
      <Stack.Screen name="auth/register" options={{ title: 'Register', headerShown: false }} />
      
      {/* Dashboard and its nested routes */}
      <Stack.Screen name="dashboard/index" options={{ title: 'Dashboard', headerShown: false }} />
      <Stack.Screen name="dashboard/profile" options={{ title: 'Profile', headerShown: true }} />
      <Stack.Screen name="dashboard/settings" options={{ title: 'Settings', headerShown: true }} />
    </Stack>
  );
}