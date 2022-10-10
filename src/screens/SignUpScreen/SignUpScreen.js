import React, {useState} from 'react'; 
import {View, Text, StyleSheet, ScrollView} from 'react-native'; 
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { Scope } from '@babel/traverse';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
    console.warn("Register");
  }

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password?");
  }

  const onSignInGoogle = () => {
    console.warn("Google");
  }

  const onSignInFacebook = () => {
    console.warn("Facebook");
  }

  const onSignInApple = () => {
    console.warn("Apple");
  }

  const onSignUpPressed = () => {
    console.warn("SignUp");
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        
        <CustomInput 
          placeholder = "Username" 
          value={username} 
          setValue={setUsername} 
        />
          <CustomInput 
          placeholder = "Email" 
          value={email} 
          setValue={setEmail} 
        />
        <CustomInput 
          placeholder="Password" 
          value={password} 
          setValue={setPassword} 
          secureTextEntry
        />
          <CustomInput 
          placeholder="Repeat Password" 
          value={passwordRepeat} 
          setValue={setPasswordRepeat} 
          secureTextEntry
        />
        <CustomButton text = "Register" onPress={onRegisterPressed}/>
        <Text style={styles.text}>
          By registering, you confirm that you accept our Terms of Use and Privacy Policy.
        </Text>

        <CustomButton 
          text = "Sign In with Google" 
          onPress={onSignInGoogle}
          bgColor ="#FAE9EA"
          fgColor ="#DD4D44"
        />
        <CustomButton 
          text = "Sign In with Facebook" 
          onPress={onSignInFacebook}
          bgColor ="#E7EAF4"
          fgColor ="#4765A9"
        />
        <CustomButton 
          text = "Sign In with Apple" 
          onPress={onSignInApple}
          bgColor ="#e3e3e3"
          fgColor ="#363636"
        />

        <CustomButton 
          text = "Don't have an account? Create one" 
          onPress={onSignUpPressed} 
          type="TERTIARY" 
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 500,
    maxHeight: 300,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  }
});

export default SignUpScreen