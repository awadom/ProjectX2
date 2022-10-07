import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { white } from 'color-name'

const CustomButton = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>Button</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FF7F00',

    width: '100%',
    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },
  text:{
    fontWeight: 'bold',
    color: 'white',
  }
})

export default CustomButton