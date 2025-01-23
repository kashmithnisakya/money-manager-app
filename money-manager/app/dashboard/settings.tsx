import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const SettingsPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Back to Dashboard" onPress={() => router.push('/dashboard')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default SettingsPage;
