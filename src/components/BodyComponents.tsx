import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { SECONDARY_COLOR } from '../commans/constantsColor'

export const BodyComponents = (props:any) => {
    const {height}=useWindowDimensions();
  return (
    <View style={{
        height:height*0.88,
        ...style.container}}>
          {props.children}
        
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        backgroundColor:SECONDARY_COLOR,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingHorizontal:20,
        paddingVertical:20
    }
})
