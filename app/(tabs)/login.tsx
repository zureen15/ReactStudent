import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>UNI STU</Text>
        <View style={styles.nav}>
          <Text style={styles.navItem}>Home</Text>
          <Text style={styles.navItem}>Class</Text>
          <Text style={styles.navItem}>Loyalty</Text>
          <Text style={styles.navItem}>Student Exchange</Text>
          <Text style={styles.navItem}>Quiz</Text>
          <Text style={styles.navItem}>Note Taker</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Create New Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </View>
      <View style={styles.illustrationContainer}>
        {/* Add your illustration here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24, fontWeight: 'bold',
    color: '#fff',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  navItem: {
    fontSize: 16,
    color: '#fff',
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  registerText: {
    fontSize: 16,
    color: '#FF0000',
    marginTop: 10,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;