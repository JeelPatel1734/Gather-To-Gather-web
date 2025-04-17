import React from 'react';
import { CartProvider } from './src/context/CartProvider';
import AppNavigator from './src/navigation/AppNavigator'; // your navigator

export default function App() {
  return (
    <CartProvider>
      <AppNavigator />
    </CartProvider>
  );
}
