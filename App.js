import React from 'react';
import { CartProvider } from './src/context/CartProvider'; // Ensure correct path
import AppNavigator from './src/navigation/AppNavigator'; // Ensure correct path

export default function App() {
  return (
    <CartProvider>
      <AppNavigator />
    </CartProvider>
  );
}
