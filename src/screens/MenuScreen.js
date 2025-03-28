import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCart } from '../context/CartProvider';

export default function MenuScreen() {
  const [userEmail, setUserEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Appetisers');
  const [menuData, setMenuData] = useState({});
  const { addToCart } = useCart();
  const [customizations, setCustomizations] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch email from AsyncStorage
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('userEmail');
        if (storedEmail) {
          setUserEmail(storedEmail);
        }
      } catch (error) {
        console.error('Error retrieving email:', error);
      }
    };
    fetchEmail();
  }, []);

  // Fetch menu items from API
  useEffect(() => {
    fetch('http://192.168.1.5:8093/getmenuItem')
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'menuItem fetched successfully') {
          const categorizedMenu = data.menuItemm.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {});
          setMenuData(categorizedMenu);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  // Handle adding items to cart
  const handleAddToCart = (item) => {
    if (!userEmail) {
      Alert.alert('Error', 'User email not found. Please log in again.');
      return;
    }

    const customization = customizations[item._id] || {};
    const finalItem = {
      ...item,
      ...customization,
      totalPrice: (item.price * (customization.quantity || 1)).toFixed(2),
    };

    addToCart(finalItem);

    const postData = {
      email: userEmail, // Use retrieved email here
      name: finalItem.name,
      price: finalItem.price,
      image: finalItem.image,
      quantity: customization.quantity || 1,
    };

    fetch('http://192.168.1.5:8093/addCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Cart added successfully') {
          alert(`${finalItem.name} added to cart!`);
        } else {
          alert('Failed to add item to cart.');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Error adding item to cart.');
      });
  };

  // Render menu items
  const renderMenuItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <TextInput
          placeholder="Quantity"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(value) =>
            setCustomizations((prev) => ({
              ...prev,
              [item._id]: { ...prev[item._id], quantity: parseInt(value) || 1 },
            }))
          }
        />
        <TextInput
          placeholder="Special Requests"
          style={styles.input}
          onChangeText={(value) =>
            setCustomizations((prev) => ({
              ...prev,
              [item._id]: { ...prev[item._id], specialRequest: value },
            }))
          }
        />
        <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(item)}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const categories = Object.keys(menuData);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Menu</Text>
      </View>

      <View style={styles.categories}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.activeCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={menuData[selectedCategory]}
        keyExtractor={(item) => item._id}
        renderItem={renderMenuItem}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  header: {
    backgroundColor: '#ff6347',
    padding: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    padding: 10,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#ddd',
  },
  activeCategory: {
    backgroundColor: '#ff4500',
  },
  categoryText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    margin: 10,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#ff4500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#009CDE',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

