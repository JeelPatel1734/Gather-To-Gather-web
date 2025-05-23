// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// // Import Screens
// import HomeScreen from '../screens/HomeScreen';
// import MenuScreen from '../screens/MenuScreen';
// import CartScreen from '../screens/CartScreen';
// import PaymentScreen from '../screens/PaymentScreen';
// import DetailsScreen from '../screens/DetailsScreen';
// import ReviewScreen from '../screens/ReviewScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import CateringScreen from '../screens/CateringScreen';
// import LoginScreen from '../screens/LoginScreen';
// import RegistrationScreen from '../screens/RegistrationScreen';
// import OrderDetailScreen from '../screens/OrderDetailScreen';
// import OTPVerificationScreen from '../screens/OTPVerificationScreen';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// // 🟢 Tab Navigator (For Main App after Login)
// function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
//           else if (route.name === 'Menu') iconName = focused ? 'restaurant' : 'restaurant-outline';
//           else if (route.name === 'Cart') iconName = focused ? 'cart' : 'cart-outline';
//           else if (route.name === 'Payment') iconName = focused ? 'card' : 'card-outline';
//           else if (route.name === 'Details') iconName = focused ? 'information-circle' : 'information-circle-outline';
//           else if (route.name === 'Reviews') iconName = focused ? 'star' : 'star-outline';
//           else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
//           else if (route.name === 'Catering') iconName = focused ? 'calendar' : 'calendar-outline';

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#6200ee',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: { height: 60, paddingBottom: 10 },
//         tabBarLabelStyle: { fontSize: 12 },
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Menu" component={MenuScreen} />
//       <Tab.Screen name="Cart" component={CartScreen} />
//       <Tab.Screen name="Payment" component={PaymentScreen} />
//       <Tab.Screen name="Details" component={DetailsScreen} />
//       <Tab.Screen name="Reviews" component={ReviewScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//       <Tab.Screen name="Catering" component={CateringScreen} />
//     </Tab.Navigator>
//   );
// }

// // 🔵 Stack Navigator (Handles Login → Main App)
// export default function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Login" component={RegistrationScreen} />
//         <Stack.Screen name="Registration" component={RegistrationScreen} />
//         <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />
        
//         <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
//         <Stack.Screen name="Main" component={MainTabs} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native'; // To check platform-specific logic
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import PaymentScreen from '../screens/PaymentScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ReviewScreen from '../screens/ReviewScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CateringScreen from '../screens/CateringScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import OTPVerificationScreen from '../screens/OTPVerificationScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 🟢 Tab Navigator (For Main App after Login)
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Menu') iconName = focused ? 'restaurant' : 'restaurant-outline';
          else if (route.name === 'Cart') iconName = focused ? 'cart' : 'cart-outline';
          else if (route.name === 'Payment') iconName = focused ? 'card' : 'card-outline';
          else if (route.name === 'Details') iconName = focused ? 'information-circle' : 'information-circle-outline';
          else if (route.name === 'Reviews') iconName = focused ? 'star' : 'star-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
          else if (route.name === 'Catering') iconName = focused ? 'calendar' : 'calendar-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60, paddingBottom: 10 },
        tabBarLabelStyle: { fontSize: 12 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Payment" component={PaymentScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="Reviews" component={ReviewScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Catering" component={CateringScreen} />
    </Tab.Navigator>
  );
}

// 🔵 Stack Navigator (Handles Login → Main App)
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />
        
        <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
