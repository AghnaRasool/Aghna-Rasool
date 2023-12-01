import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import CVCretion from './CVCretion';
import Registration from './Registration';
import ViewCV from './ViewCV';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration ">
      <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CVCretion" component={CVCretion} />
        <Stack.Screen name="ViewCV" component={ViewCV} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// const Stack =  createNativeStackNavigator ();
//  const app= ()=>{
//     return( <NavigationContainer>
//         <Stack.Navigator>
//         <Stack.Screen name='Login'component ={Login}/>
//             <Stack.Screen name='Home'component ={Home}/>
            
//         </Stack.Navigator>
//     </NavigationContainer>);

//  };
// const Home =()=>{
//     return(<View style={{flex:1,justifyContent:'center' , alignItems:'center' }} >
//     <Text style={{fontSize:15}}>Home Screen</Text>
//     </View>);
// }
// const Login  =(props)=>{
//     return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
//     <Text style={{fontSize:15}}>Login Screen</Text>
//     <Button title='go to home page' onPress={()=>props.Navigation.navigate("Home")}></Button>
//     </View>)
// }
   
// export default aliapp;























