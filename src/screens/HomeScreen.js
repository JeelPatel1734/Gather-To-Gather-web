// import React from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Linking,
// } from 'react-native';


// const featuredItems = [
//   {
//     id: '1',
//     name: 'Special Dosa',
//     price: 5.99,
//     image: 'https://i0.wp.com/www.happyandharried.com/wp-content/uploads/2018/04/IMG_2115.jpg',
//   },
//   {
//     id: '2',
//     name: 'Paneer Butter Masala',
//     price: 9.99,
//     image: 'https://i.pinimg.com/originals/88/08/26/8808269e6adf0f090788e00c07681e1d.jpg',
//   },
//   {
//     id: '3',
//     name: 'Veg Biryani',
//     price: 7.99,
//     image: 'https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs=',
//   },
// ];

// export default function HomeScreen({ navigation }) {
//   const renderFeaturedItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={() => navigation.navigate('Menu', { selectedItem: item })}
//     >
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.cardContent}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.price}>${item.price.toFixed(2)}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const handleOpenInstagram = () => {
//     Linking.openURL('https://www.instagram.com/gatherrtogatherr?igsh=MWNncmY2bzB3NjBz');
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>WELCOME TO GATHER-TO-GATHER</Text>
//         <Text style={styles.subtitle}>
//           Your one-stop destination for mouthwatering meals and exceptional catering services. Now in North-York just for you...
//         </Text>
//       </View>

//       <Text style={styles.sectionTitle}>🌟 Featured Items</Text>
//       <FlatList
//         data={featuredItems}
//         horizontal
//         keyExtractor={(item) => item.id}
//         renderItem={renderFeaturedItem}
//         contentContainerStyle={styles.featuredList}
//         showsHorizontalScrollIndicator={false}
//       />

//       <View style={styles.servicesSection}>
//         <Text style={styles.sectionTitle}>🍽️ Our Services</Text>
//         <Text style={styles.serviceText}>✔️ Dine-In and Takeaway</Text>
//         <Text style={styles.serviceText}>✔️ Customized Catering for Events</Text>
//         <Text style={styles.serviceText}>✔️ Exclusive Indian Cuisine</Text>
//       </View>

//       <View style={styles.contactSection}>
//         <Text style={styles.sectionTitle}>📞 Contact Us</Text>
//         <Text style={styles.contactText}>Phone: +1 (437) 232-4752</Text>
//         <Text style={styles.contactText}>Email: info@gathertogather.com</Text>

//         <TouchableOpacity style={styles.instaButton} onPress={handleOpenInstagram}>
//           <Text style={styles.instaButtonText}>Follow Us on Instagram</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f9f9',
//   },
//   header: {
//     backgroundColor: '#6200ee',
//     padding: 20,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#f0f0f0',
//     textAlign: 'center',
//     marginHorizontal: 10,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//     marginLeft: 10,
//     color: '#333',
//   },
//   featuredList: {
//     paddingHorizontal: 10,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginRight: 15,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     overflow: 'hidden',
//     width: 140,
//   },
//   image: {
//     width: '100%',
//     height: 100,
//   },
//   cardContent: {
//     padding: 10,
//     alignItems: 'center',
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   price: {
//     fontSize: 14,
//     color: '#6200ee',
//     fontWeight: 'bold',
//   },
//   servicesSection: {
//     padding: 15,
//     backgroundColor: '#fff',
//     marginHorizontal: 10,
//     borderRadius: 10,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 4,
//     marginTop: 20,
//   },
//   serviceText: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 10,
//   },
//   contactSection: {
//     padding: 15,
//     backgroundColor: '#fff',
//     marginHorizontal: 10,
//     borderRadius: 10,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 4,
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   contactText: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 10,
//   },
//   instaButton: {
//     backgroundColor: '#E1306C',
//     padding: 10,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   instaButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });
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
  const featuredItems = [
    {
      id: 1,
      name: "Pav-bhaji",
      price: 12.99,
      image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg", 
    },
    {
      id: 2,
      name: "noodles",
      price: 10.99,
      image: "https://thewhiskaddict.com/wp-content/uploads/2020/02/IMG_2848-2-scaled.jpg", 
    },
    {
      id: 3,
      name: "Dosa",
      price: 8.99,
      image: "https://apollosugar.com/wp-content/uploads/2018/12/Masala-Dosa.jpg", 
    }
  ];

  const renderFeaturedItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Menu', { selectedItem: item })}
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
          Your one-stop destination for mouthwatering meals and exceptional catering services. Now in North-York just for you...
        </Text>
      </View>


      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>🍽️ Our Services</Text>
        <Text style={styles.serviceText}>✔️ Catering and Takeaway</Text>
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


      <View style={styles.footer}>
  <FlatList
    data={[
      { id: '1', image: 'https://wallpapers.com/images/hd/traditional-thali-platter-indian-food-7ppdmw8bs4n1f36j.jpg' },
      { id: '2', image: 'https://www.archanaskitchen.com/images/archanaskitchen/0-Affiliate-Articles/Indian_summer_drinks.jpg' }, // Replace with actual URL
      { id: '3', image: 'https://tse2.mm.bing.net/th?id=OIP.2uIVsBDIqHwFRVcGITgAlQHaEK&pid=Api&P=0&h=220' }  // Replace with actual URL
    ]}
    renderItem={({ item }) => (
      <Image source={{ uri: item.image }} style={styles.footerImage} />
    )}
    keyExtractor={(item) => item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
  />
</View>




    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    color: '#333',
  },
  featuredList: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    overflow: 'hidden',
    width: 140,
  },
  image: {
    width: '100%',
    height: 100,
  },
  cardContent: {
    padding: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#6200ee',
    fontWeight: 'bold',
  },
  servicesSection: {
    padding: 15,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    marginTop: 20,
  },
  serviceText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  contactSection: {
    padding: 15,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    marginTop: 20,
    marginBottom: 20,
  },
  contactText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  instaButton: {
    backgroundColor: '#E1306C',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  instaButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 30, // Adds space at the bottom
},
footerImage: {
  width: '90%',  // Adjust width
  height: 150,   // Adjust height
  resizeMode: 'contain',
  borderRadius: 10, // Optional rounded corners
},

footer: {
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 30, 
},
footerImage: {
  width: 200,  // Adjust width
  height: 150, // Adjust height
  marginRight: 10, // Adds spacing between images
  resizeMode: 'contain',
  borderRadius: 10, 
},



});

