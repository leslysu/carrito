import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { INPUT_COLOR, PRIMARY_COLOR } from '../commans/constantsColor';
import Icon from 'react-native-vector-icons/MaterialIcons';


interface InputProps{
    placeholder:string;
    name:string;
    isPasssword?:boolean;
    hasIcon?:boolean;
    hasError:boolean;
    //metodo que camptura el valor del input
    onChangeText:(name:string ,value:string)=>void;
    accionIcon?:()=>void;
}

export const InputComponent = ({placeholder,name, onChangeText, isPasssword=false,hasIcon=false, accionIcon=()=>{},hasError}:InputProps) => {
  return (
    <View>
        {
        (hasIcon)
        ?<Icon style={styles.icon} name='visibility' size={20} color={PRIMARY_COLOR} onPress={accionIcon}/>
        :null
        }
    
    <TextInput
     placeholder={placeholder}
     keyboardType={'default'}
     style={(hasError)
      ?{...styles.inputText}
      :{...styles.inputText}}
     onChangeText={(value:string)=>onChangeText(name,value)}
     secureTextEntry={isPasssword}/>
     {
      (hasError)
      ?<Text style={styles.errorText}>El campo es obligatorio</Text>
      :null
     }
  </View>)
} 

const styles=StyleSheet.create({
    inputText:{
        backgroundColor:INPUT_COLOR,
        paddingHorizontal:20,
        borderRadius:10,
        marginVertical:10,
    },
    icon:{
        // alignSelf:'flex-end',
        position:'absolute',
        right:20,
        zIndex:1,
        marginTop:25,                                 
    
      },
    
    error:{
      borderColor:'red',
      borderStyle:'solid',
      borderWidth:1,
    },

    errorText:{
      color:'red',
      fontSize:12,
      fontWeight:'bold',
    }
})

