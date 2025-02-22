// import React, { useState } from 'react';
// import { View, Text, FlatList, Image, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { useCart } from '../context/CartProvider';

// export default function CartScreen() {
//   const { cartItems, removeFromCart, clearCart } = useCart();
//   const [promoCode, setPromoCode] = useState('');
//   const [discount, setDiscount] = useState(0);

//   const applyPromoCode = () => {
//     if (promoCode === 'DISCOUNT10') {
//       setDiscount(0.1); // 10% off
//       Alert.alert('Promo Code Applied!', 'You received a 10% discount!');
//     } else if (promoCode === 'DISCOUNT20') {
//       setDiscount(0.2); // 20% off
//       Alert.alert('Promo Code Applied!', 'You received a 20% discount!');
//     } else {
//       Alert.alert('Invalid Promo Code', 'Please enter a valid promo code.');
//     }
//   };

//   const calculateTotal = () => {
//     const total = cartItems.reduce(
//       (sum, item) => sum + item.price * (item.quantity || 1),
//       0
//     );
//     const discountedTotal = total - total * discount;
//     return discountedTotal.toFixed(2);
//   };

//   const updateQuantity = (id, quantity) => {
//     const updatedItems = cartItems.map((item) => {
//       if (item.id === id) {
//         return { ...item, quantity: parseInt(quantity) || 1 };
//       }
//       return item;
//     });
//     removeFromCart(); // Remove all items to reinitialize with updated items
//     updatedItems.forEach((item) => removeFromCart(item)); // Add updated items back
//   };

//   const renderCartItem = ({ item }) => (
//     <View style={styles.cartItem}>
//       <Image source={{ uri: item.image }} style={styles.cartItemImage} />
//       <View style={styles.cartItemDetails}>
//         <Text style={styles.itemName}>{item.name}</Text>
//         <Text style={styles.itemPrice}>
//           ${item.price.toFixed(2)} x {item.quantity || 1} = $
//           {(item.price * (item.quantity || 1)).toFixed(2)}
//         </Text>
//         <TextInput
//           style={styles.quantityInput}
//           keyboardType="numeric"
//           placeholder="Quantity"
//           defaultValue={item.quantity?.toString() || '1'}
//           onChangeText={(value) => updateQuantity(item.id, value)}
//         />
//         <Button title="Remove" onPress={() => removeFromCart(item.id)} />
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Your Cart</Text>
//       {cartItems.length > 0 ? (
//         <>
//           <FlatList
//             data={cartItems}
//             keyExtractor={(item) => item.id}
//             renderItem={renderCartItem}
//           />
//           <View style={styles.promoCodeContainer}>
//             <TextInput
//               style={styles.promoCodeInput}
//               placeholder="Enter promo code"
//               value={promoCode}
//               onChangeText={setPromoCode}
//             />
//             <Button title="Apply" onPress={applyPromoCode} />
//           </View>
//           <Text style={styles.total}>
//             Total: ${calculateTotal()} {discount > 0 && <Text>(Discount Applied)</Text>}
//           </Text>
//           <Button
//             title="Proceed to Payment"
//             onPress={() => Alert.alert('Payment', 'Proceeding to payment...')}
//           />
//           <Button title="Clear Cart" onPress={clearCart} color="red" />
//         </>
//       ) : (
//         <Text style={styles.emptyCartText}>Your cart is empty!</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   cartItem: {
//     flexDirection: 'row',
//     marginBottom: 15,
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 5,
//     elevation: 3,
//   },
//   cartItemImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 5,
//   },
//   cartItemDetails: {
//     flex: 1,
//     marginLeft: 10,
//     justifyContent: 'center',
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   itemPrice: {
//     fontSize: 14,
//     color: '#6200ee',
//     marginVertical: 5,
//   },
//   quantityInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 5,
//     marginBottom: 10,
//     width: 80,
//     textAlign: 'center',
//   },
//   promoCodeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   promoCodeInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//   },
//   total: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 20,
//     textAlign: 'center',
//   },
//   emptyCartText: {
//     fontSize: 16,
//     color: '#888',
//     textAlign: 'center',
//   },
// });

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, Image, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/core'; // Import the hook
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function CartScreen() {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const navigation = useNavigation();
  // Fetch cart items from the API
  const fetchCartItems = () => {
    fetch('http://localhost:8093/getCart')
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "cart fetched successfully") {
          setCartItems(data.products);
        } else {
          Alert.alert('Error', 'Failed to fetch cart items.');
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch cart items.');
      });
  };

  // Fetch cart items whenever the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchCartItems(); // Fetch cart items when screen is focused
    }, [])
  );

  // Remove an item from the cart by filtering it out of the state
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item._id !== id));
  };

  // Clear the cart by making an API call and updating the state
  const clearCart = () => {
    fetch('http://localhost:8093/clearCart', {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Cart cleared successfully") {
          setCartItems([]);
          Alert.alert('Cart Cleared', 'Your cart has been cleared successfully!');
        } else {
          Alert.alert('Error', 'Failed to clear the cart.');
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'Failed to clear the cart.');
      });
  };

  const applyPromoCode = () => {
    if (promoCode === 'DISCOUNT10') {
      setDiscount(0.1); // 10% off
      Alert.alert('Promo Code Applied!', 'You received a 10% discount!');
    } else if (promoCode === 'DISCOUNT20') {
      setDiscount(0.2); // 20% off
      Alert.alert('Promo Code Applied!', 'You received a 20% discount!');
    } else {
      Alert.alert('Invalid Promo Code', 'Please enter a valid promo code.');
    }
  };
  const handleProceedToPayment = () => {
    navigation.navigate('Payment'); // Navigate to the Payment screen
  };

  // Calculate total price with discount (if any)
  const calculateTotal = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    const discountedTotal = total - total * discount;
    return discountedTotal.toFixed(2);
  };

  // Update the quantity for a specific cart item
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item._id === id ? { ...item, quantity: parseInt(quantity) || 1 } : item
      )
    );
  };

  // Render each cart item
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>
          ${item.price.toFixed(2)} x {item.quantity || 1} = $
          {(item.price * (item.quantity || 1)).toFixed(2)}
        </Text>
        <TextInput
          style={styles.quantityInput}
          keyboardType="numeric"
          placeholder="Quantity"
          defaultValue={(item.quantity || 1).toString()}
          onChangeText={(value) => updateQuantity(item._id, value)}
        />
        <Button title="Remove" onPress={() => removeFromCart(item._id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item._id}
            renderItem={renderCartItem}
          />
          <View style={styles.promoCodeContainer}>
            <TextInput
              style={styles.promoCodeInput}
              placeholder="Enter promo code"
              value={promoCode}
              onChangeText={setPromoCode}
            />
            <Button title="Apply" onPress={applyPromoCode} />
          </View>
          <Text style={styles.total}>
            Total: ${calculateTotal()} {discount > 0 && <Text>(Discount Applied)</Text>}
          </Text>
          <Button
            title="Proceed to Payment"
         onPress={handleProceedToPayment}
           />
          <Button title="Clear Cart" onPress={clearCart} color="red" />
        </>
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  cartItemImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#6200ee',
    marginVertical: 5,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    width: 80,
    textAlign: 'center',
  },
  promoCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  promoCodeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  emptyCartText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});
