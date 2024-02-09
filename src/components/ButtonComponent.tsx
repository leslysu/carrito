import React from 'react'
import {StyleSheet, Text, TouchableOpacity } from 'react-native'
import { PRIMARY_COLOR } from '../commans/constantsColor'

interface ButtonProps{
    title:string;
    onPress:()=>void;
}

export const ButtonComponent = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}
        onPress={onPress}>
        <Text style={styles.buttonText}>Enviar</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  buttonContainer:{
    backgroundColor:PRIMARY_COLOR,
    paddingVertical:15,
    borderRadius:10,
  },

  buttonText:{
    textAlign:'center',
    color:'white',
    fontSize:14,
    fontWeight:'bold',

  }
})
