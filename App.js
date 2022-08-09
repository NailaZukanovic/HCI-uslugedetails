import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import 'react-native-gesture-handler';
import Register from './screens/Register';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Usluge from './screens/Usluge';
import UslugeDetails from './screens/UslugeDetails';
// import { Provider } from 'react';
// import { store } from './redux';

const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (    
    <Stack.Navigator screenOptions={{header: ()=> null}}>
      {/* <Stack.Screen name="Login" component={Login}/> */}
      {/* <Stack.Screen name="Register" component={Register}/> */}
      {/* <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="ProductDetails" component={ProductDetails} /> */}
      <Stack.Screen name="Usluge" component={Usluge} />
      <Stack.Screen name="UslugeDetails" component={UslugeDetails} />
    </Stack.Navigator>
  )
}

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
export default function App() {
  return (
    // <Provider store={store}>
    <RootNavigation />
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
