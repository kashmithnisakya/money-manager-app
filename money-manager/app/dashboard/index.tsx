import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const DashboardPage = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Add logout logic here
    router.push('/auth/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Dashboard!</Text>
      <Button title="Go to Profile" onPress={() => router.push('/dashboard/profile')} />
      <Button title="Settings" onPress={() => router.push('/dashboard/settings')} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default DashboardPage;
