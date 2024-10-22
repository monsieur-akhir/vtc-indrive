import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Où allez-vous ?</Text>
      <View style={styles.inputContainer}>
        <Icon name="location-outline" size={20} color="#4A90E2" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Votre position"
          placeholderTextColor="#999"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="search-outline" size={20} color="#4A90E2" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Votre destination"
          placeholderTextColor="#999"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Rechercher un chauffeur</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Pas encore de compte ?</Text>
        <View style={styles.footerButtons}>
          <TouchableOpacity
            style={[styles.footerButton, styles.loginButton]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginButtonText}>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.footerButton, styles.registerButton]}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.registerButtonText}>Inscription</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  footerText: {
    marginBottom: 10,
    color: '#666',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  footerButton: {
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '48%',
  },
  loginButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  registerButton: {
    backgroundColor: '#4CAF50',
  },
  loginButtonText: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Home;