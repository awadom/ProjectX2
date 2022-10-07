import React from 'react'; //import react
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'; //import view, text, image, stylesheet, usewindowdimensions from from the react-native library
import Logo from '../../../assets/images/ProjectX-Logo.png';
import CustomInput from '../../components/CustomInput';

const SignInScreen = () => {
  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
      <Image 
        source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode="contain" 
      />

      <CustomInput />
      <CustomInput />
    </View>
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
});

export default SignInScreen