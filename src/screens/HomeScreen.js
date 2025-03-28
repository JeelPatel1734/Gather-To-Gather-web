import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [featuredItems, setFeaturedItems] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    fetch('http://192.168.1.5:8093/getproducts')
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Products fetched successfully') {
          const products = data.products.map((product) => ({
            id: product._id,
            name: product.product_name,
            price: product.product_price,
            image: product.product_image,
          }));
          setFeaturedItems(products);
        }
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const renderFeaturedItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Menu', { selectedItem: item})}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleOpenInstagram = () => {
    Linking.openURL('https://www.instagram.com/gatherrtogatherr?igsh=MWNncmY2bzB3NjBz');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>WELCOME TO GATHER-TO-GATHER</Text>
        <Text style={styles.subtitle}>
          Your one-stop destination for mouthwatering meals and exceptional catering services. Now in North York just for you...
        </Text>
      </View>

      <Text style={styles.sectionTitle}>🌟 Featured Items</Text>
      <FlatList
        data={featuredItems}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderFeaturedItem}
        contentContainerStyle={styles.featuredList}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>🍽️ Our Services</Text>
        <Text style={styles.serviceText}>✔️ Dine-In and Takeaway</Text>
        <Text style={styles.serviceText}>✔️ Customized Catering for Events</Text>
        <Text style={styles.serviceText}>✔️ Exclusive Indian Cuisine</Text>
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>📞 Contact Us</Text>
        <Text style={styles.contactText}>Phone: +1 (437) 232-4752</Text>
        <Text style={styles.contactText}>Email: info@gathertogather.com</Text>

        <TouchableOpacity style={styles.instaButton} onPress={handleOpenInstagram}>
          <Text style={styles.instaButtonText}>Follow Us on Instagram</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffe4e1',
    textAlign: 'center',
    marginHorizontal: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
    color: '#333',
  },
  featuredList: {
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    overflow: 'hidden',
    width: 150,
  },
  image: {
    width: '100%',
    height: 120,
  },
  cardContent: {
    padding: 12,
    alignItems: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 15,
    color: '#ff4500',
    fontWeight: 'bold',
  },
  servicesSection: {
    padding: 15,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    marginTop: 20,
  },
  serviceText: {
    fontSize: 17,
    color: '#555',
    marginBottom: 10,
  },
  contactSection: {
    padding: 15,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    marginTop: 20,
    marginBottom: 20,
  },
  contactText: {
    fontSize: 17,
    color: '#555',
    marginBottom: 10,
  },
  instaButton: {
    backgroundColor: '#E1306C',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  instaButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

