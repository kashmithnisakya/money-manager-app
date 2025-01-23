import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/register.png')}
                style={styles.image}
            />
            <Text style={styles.heading}>Create Account</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#A9A9A9"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="#A9A9A9"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#A9A9A9"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#A9A9A9"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.registerButton} onPress={() => router.push('/auth/login')}>
                <Text style={styles.registerButtonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/auth/login')}>
                <Text style={styles.loginLink}>
                    Already have an account? <Text style={styles.loginText}>Login</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#EAF8F5',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#028A81',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    registerButton: {
        backgroundColor: '#028A81',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginLink: {
        textAlign: 'center',
        fontSize: 14,
        color: '#666',
    },
    loginText: {
        color: '#028A81',
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
});

export default RegisterPage;
