import React, { useState } from 'react' 
import { StatusBar, StyleSheet, Text, TextInput, Touchable, View } from 'react-native' 
import { TitleComponent } from '../components/TitleComponent' 
import { InputComponent } from '../components/InputComponent' 
import { ButtonComponent } from '../components/ButtonComponent' 
import { ERROR_COLOR, PRIMARY_COLOR } from '../commans/constantsColor'
import { BodyComponents } from '../components/BodyComponents'
import Snackbar from 'react-native-snackbar'
import { TouchableOpacity } from 'react-native-gesture-handler'
 
 
interface LoginForm{ 
  username: string; 
  password: string; 
  hasError: boolean; 
} 
interface User{ 
  id: number; 
  username: string; 
  password:string; 
 
}
const users:User[]=[ 
  {id:1,username:'aarxn',password:'1234'}, 
  {id:2,username:'wendy',password:'4321'}, 
 
]
 
export const LoginScreen = () => { 
 
  //Hook - control de los datos en el form 
  const[form, setForm]=useState<LoginForm>({ 
    username:'', 
    password:'', 
    hasError: false, 
  }); 
 
  //const [numero, setNumero] = useState(0); 
 
  //Hook - desemcriptar el password 
  const [hiddenPassword, setHiddenPassword] = useState(true); 
 
  //Función que cambie el valor del useState (form) 
  const handlerChangeText=(name: string, value:string)=>{ 
    //console.log(name); 
    //console.log(value);  
    setForm(prevState=>({ 
      ...prevState, 
      [name]:value, 
    })) 
  } 
 
  //Funcion que envie los datos del formulario 
  const handlerSendInfo=()=>{ 
       //Validar formulario 
  if(form.username == '' || form.password == ''){  
    setForm(prevState=>({ 
      ...prevState, 
      hasError:true 
  })) 
  return;   
  } 
  setForm(prevState=>({ 
    ...prevState, 
    hasError:false 
  })) 
  //console.log(form) 
  if (verifyUser()) {
  Snackbar.show({
    text: 'Usuario y/o',
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor:ERROR_COLOR,
    textColor:'white'
  });
  } 
}
  //Funcion que verifica 
  const verifyUser=()=>{ 
    const existUser=users.filter(users=>users.username == form.username && users.password == form.password)[0]; 
    return existUser; 
  }
 
  return ( 
    <View> 
        <StatusBar backgroundColor={PRIMARY_COLOR}/> 
        <TitleComponent title='Iniciar Sesión'/> 
        <BodyComponents>
          <Text style={styles.textWelcome}>Bienvenido de nuevo!</Text> 
          <Text style={styles.textDescription}>Realiza tus compras de manera rápida y segura</Text> 
          <View style={styles.containerForm}> 
            <InputComponent placeholder='Usuario' name={'username'} onChangeText={handlerChangeText} hasError={form.hasError}/> 
            <InputComponent  
              placeholder='Contraseña'  
              name={'password'}  
              onChangeText={handlerChangeText}  
              isPasssword={hiddenPassword} 
              hasIcon={true} 
              accionIcon={()=>setHiddenPassword(!hiddenPassword)} 
              hasError={form.hasError}/> 
              {/* <TextInput 
                placeholder='numero' 
                keyboardType='numeric' 
                onChangeText={(numero:string)=>setNumero(parseInt(numero))}/> */} 
          </View> 
          <ButtonComponent title='Iniciar Sesión' onPress={handlerSendInfo}/> 

          <TouchableOpacity>
            <Text style={styles.textRegister}>No tienes una cuenta? Registrate Ahora!</Text>
          </TouchableOpacity>
        </BodyComponents>
    </View> 
  ) 
} 
 
const styles=StyleSheet.create({ 
  textWelcome:{ 
    fontSize:17, 
    fontWeight:'bold', 
    color:'black' 
  }, 
  textDescription:{ 
    fontSize:15 
  }, 
  containerForm:{ 
    marginVertical:10 
  } ,
  textRegister:{
    marginTop:20,
    fontSize:15,
    color:PRIMARY_COLOR,
    fontWeight:'bold',
    textAlign:'center',
  }
})