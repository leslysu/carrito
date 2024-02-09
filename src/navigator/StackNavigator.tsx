import { createStackNavigator } from '@react-navigation/stack';
import { PRIMARY_COLOR } from '../commans/constantsColor';
import { RegistroScreens } from '../screens/RegistroScreens';
import { LoginScreen } from '../screens/LoginScreens';

const Stack = createStackNavigator();

 export const StackNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
            backgroundColor:PRIMARY_COLOR
         }
    }}
    >
      <Stack.Screen name="LoginScreens" options={{headerShown:false}} component={LoginScreen} />
      <Stack.Screen name="RegistroScreen" options={{headerShown:false}} component={RegistroScreens}/>
    </Stack.Navigator>
  )
}