// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from 'react-native';
// import { useCart } from '../context/CartProvider';

// const menuData = {
//   Appetisers: [
//     { id: '1', name: 'Dosa', price: 5.99, image: 'https://i0.wp.com/www.happyandharried.com/wp-content/uploads/2018/04/IMG_2115.jpg' },
//     { id: '2', name: 'Samosa Chaat', price: 4.99, image: 'https://media.istockphoto.com/id/1398144537/photo/curd-samosa-chaat.jpg?s=612x612&w=0&k=20&c=TXAOhd3V-Ad2TnYmKzz2ZBdOvSERy4XVvb0DXucpItw=' },
//     { id: '3', name: 'Dahi Puri', price: 3.99, image: 'https://ministryofcurry.com/wp-content/uploads/2022/07/Dahi-Puri_-4-1.jpg' },
//     { id: '4', name: 'Pani Puri', price: 3.49, image: 'https://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg' },

//     { id: '5', name: 'Aloo Tikki Chaat', price: 4.49, image: 'https://www.nehascookbook.com/wp-content/uploads/2022/09/Aloo-tikki-chaat-WS-1.jpg' },
//     { id: '6', name: 'Vada Pav', price: 2.99, image: 'https://i.ytimg.com/vi/atsGQroxcuc/hqdefault.jpg' },
//     { id: '7', name: 'Masala Papad', price: 1.99, image: 'https://www.spiceupthecurry.com/wp-content/uploads/2015/07/masala-papad-1.jpg' },
//     { id: '8', name: 'Hara Bhara Kebab', price: 5.99, image: 'https://connect.healthkart.com/wp-content/uploads/2023/01/900x500_banner_HK-hara-bhara-kabab.png' },
//     { id: '9', name: 'Dry Manchurian', price: 6.49, image: 'https://t4.ftcdn.net/jpg/03/24/56/73/360_F_324567329_VIPsg4s4kWkvqJviANcIgeYPG602kN56.jpg' },
//     { id: '10', name: 'Chilli Paneer Dry', price: 7.99, image: 'https://img.freepik.com/premium-photo/chilli-paneer-dry-is-made-using-cottage-cheese-indo-chinese-food_466689-76940.jpg' },
//   ],

//   Curries: [
//     { id: '11', name: 'Palak Paneer', price: 8.99, image: 'https://img.freepik.com/premium-photo/palak-paneer-indian-traditional-food-with-cheese-spinach-black-background-view-from_233226-595.jpg' },
//     { id: '12', name: 'Matar Paneer', price: 9.49, image: 'https://i.pinimg.com/564x/f3/2e/39/f32e395464f6884ee9a158ba37276347.jpg' },
//     { id: '13', name: 'Chana Masala', price: 7.99, image: 'https://domesticgothess.com/wp-content/uploads/2020/05/chana-masala.jpg' },
//     { id: '14', name: 'Malai Kofta', price: 9.99, image: 'https://carveyourcraving.com/wp-content/uploads/2021/09/Sofyt-creamy-Malai-Kofta-recipe.jpg' },
//     { id: '15', name: 'Kadhai Paneer', price: 8.49, image: 'https://www.cookoverheels.com/wp-content/uploads/2020/03/30-min-Dhaba-Style-Kadhai-Paneer.jpg' },
//     { id: '16', name: 'Rajma', price: 7.49, image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Authentic-Punjabi-Rajma-Recipe.jpg' },
//     { id: '17', name: 'Paneer Tikka Masala', price: 10.99, image: 'https://cookingfromheart.com/wp-content/uploads/2017/03/Paneer-Tikka-Masala-4.jpg' },
//     { id: '18', name: 'Shahi Paneer', price: 9.49, image: 'https://www.sanjanafeasts.co.uk/wp-content/uploads/2020/01/Restaurant-Style-Shahi-Paneer.jpg.webp' },
//     { id: '19', name: 'Kaju Masala', price: 11.99, image: 'https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2020/10/Kaju-Masala-3.jpg?w=768&ssl=1' },
//     { id: '20', name: 'Aloo Gobi', price: 7.99, image: 'https://niksharmacooks.com/wp-content/uploads/2022/11/AlooGobiDSC_5234.jpg' },
//   ],






//   Breads: [
//   { id: '21', name: 'Aloo Paratha', price: 3.99, image: 'https://s3.envato.com/files/289557381/DSC_8479.jpg' },
//   { id: '22', name: 'Paneer Paratha', price: 4.99, image: 'https://www.shutterstock.com/shutterstock/photos/2091837448/display_1500/stock-photo-paneer-paratha-is-a-popular-north-indian-flatbread-made-with-whole-wheat-flour-dough-and-stuffed-2091837448.jpg' },
//   { id: '23', name: 'Naan', price: 2.49, image: 'https://www.shutterstock.com/shutterstock/photos/2492776021/display_1500/stock-photo-a-delicious-looking-flat-naan-on-a-wooden-table-the-naan-has-been-garnished-with-herbs-and-cheese-2492776021.jpg' },
//   { id: '24', name: 'Butter Naan', price: 2.99, image: 'https://i.pinimg.com/originals/8a/fc/84/8afc84ed111ccd7c211985b366c29765.jpg' },
//   { id: '25', name: 'Garlic Naan', price: 3.49, image: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/cb/e3/d3/garlic-naan.jpg' },
//   { id: '26', name: 'Tawa Roti', price: 1.99, image: 'https://st4.depositphotos.com/19960896/24179/i/1600/depositphotos_241795776-stock-photo-chapati-tava-roti-also-known.jpg' },
//   { id: '27', name: 'Tandoori Roti', price: 2.49, image: 'https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=' },
//   { id: '28', name: 'Cheese Chilli Naan', price: 4.99, image: 'https://henderson.noveltysweets.co.nz/wp-content/uploads/2023/02/Garlic-Cheese-Naan.jpg' },
//   { id: '29', name: 'Amritsari Kulcha', price: 5.99, image: 'https://www.cookingcarnival.com/wp-content/uploads/2016/02/Amritsari-Kulcha-Chole.jpg' },
//   { id: '30', name: 'Laccha Paratha', price: 3.99, image: 'https://www.whiskaffair.com/wp-content/uploads/2020/06/Lachha-Paratha-2-3.jpg' },
// ],






//   Rice: [
//   { id: '31', name: 'Veg Biryani', price: 10.99, image: 'https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs=' },
//   { id: '32', name: 'Paneer Biryani', price: 11.99, image: 'https://static.toiimg.com/thumb/60042143.cms?imgsize=352935&width=800&height=800' },
//   { id: '33', name: 'Veg Pulav', price: 9.99, image: 'https://cdn1.foodviva.com/static-content/food-images/rice-recipes/vegetable-pulav-recipe/vegetable-pulav-recipe.jpg' },
//   { id: '34', name: 'Jeera Rice', price: 7.99, image: 'https://www.kuchpakrahahai.in/wp-content/uploads/2022/04/Cumin-rice-Jeera-rice.jpg' },
// ],






// Dessert: [
//   { id: '35', name: 'Kheer', price: 4.99, image: 'https://thumbs.dreamstime.com/b/traditional-indian-dessert-kheer-rice-pudding-light-background-332161481.jpg' },
//   { id: '36', name: 'Gulab Jamun', price: 3.99, image: 'https://masalaandchai.com/wp-content/uploads/2021/11/Gulab-Jamuns-500x500.jpg' },
//   { id: '37', name: 'Rasmalai', price: 5.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYEqvxG_q4zZzT13nPIlGfIdH_RkPhLA6Yw&s' },
//   { id: '38', name: 'Paan', price: 1.49, image: 'https://img.freepik.com/premium-photo/kaju-gulkand-paan-mithai-barfi-indian-sweet-dessert-served-plate_466689-89535.jpg?w=360' },
//   { id: '39', name: 'Gajar Ka Halwa', price: 5.99, image: 'https://kitchenmai.com/wp-content/uploads/2022/01/gajar_halwa_blog.jpg' },
//   { id: '40', name: 'Rabdi Jalebi', price: 6.49, image: 'https://tse2.mm.bing.net/th?id=OIP.aanWBrFsvxj5y3A2vlttZAHaE8&pid=Api&P=0&h=180' },
//   { id: '41', name: 'Jalebi', price: 3.99, image: 'https://tse2.mm.bing.net/th?id=OIP.3VEjY-H3uqH-DRuSmstKjAHaE7&pid=Api&P=0&h=180' },
//   { id: '42', name: 'Aam Ras', price: 4.49, image: 'https://tse2.mm.bing.net/th?id=OIP.EmrdhRRAHPBrRSyfDR5ktgHaFL&pid=Api&P=0&h=180' },
//   { id: '43', name: 'Kulfi', price: 3.99, image: 'https://tse3.mm.bing.net/th?id=OIP.WrM6NS21B4Q2_3RZRrDf2AHaE8&pid=Api&P=0&h=180' },
//   { id: '44', name: 'Falooda', price: 5.99, image: 'https://tse2.mm.bing.net/th?id=OIP.N-afjDlVcxe1kqfFDzCgSgHaHa&pid=Api&P=0&h=180' },
//   ],






//   Drinks: [
//   { id: '40', name: 'Coke', price: 1.99, image: 'https://i.pinimg.com/originals/30/05/43/3005433c9b11529efb3915747a00f4c5.jpg' },
//   { id: '41', name: 'Diet Coke', price: 1.99, image: 'https://oneeyeland.com/photo4/still%20life/one_eyeland_diet_coke_on_the_rocks_by_stan_musilek_52601.jpg' },
//   { id: '42', name: 'Sprite', price: 1.99, image: 'https://i0.wp.com/gfcarolinas.com/wp-content/uploads/2024/08/Sprite.jpg?resize=240%2C300&ssl=1' },
//   { id: '43', name: 'Maaza', price: 2.49, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRphQlVjtQDRmuoaWH2tDgGv75Qzfb6uL3ckg&s' },
//   { id: '44', name: 'Fanta', price: 1.99, image: 'https://media.istockphoto.com/id/493952763/photo/can-of-fanta-orange.jpg?s=612x612&w=0&k=20&c=NcwCzRXwfB5jghmlAMDW-I26pNVa6UKtwuCfeJk5YEo=' },
//   { id: '45', name: 'Chaas', price: 1.49, image: 'https://www.secondrecipe.com/wp-content/uploads/2021/10/buttermilk-chaas.jpg' },
//   { id: '46', name: 'Masala Chai', price: 1.99, image: 'https://i.pinimg.com/originals/2f/2b/a4/2f2ba45fa50bbf9636d01a19a9929a39.jpg' },
//   { id: '47', name: 'Coffee', price: 2.99, image: 'https://www.acouplecooks.com/wp-content/uploads/2021/02/Cappuccino.jpg' },
//   { id: '48', name: 'Water Bottle', price: 0.99, image: 'https://cdn.shopify.com/s/files/1/0081/5272/0126/products/21EDQ_2000x.jpg?v=1604917205' },
//   { id: '49', name: 'Canadian Dry', price: 1.99, image: 'https://i5.walmartimages.com/asr/a4e3b5d3-9e86-4480-8213-d563d7b4a68c.2cfc207ff423c6f8c840e53e95305b06.jpeg' },
//   ],
// };

// export default function MenuScreen() {
//   const [selectedCategory, setSelectedCategory] = useState('Appetisers');
//   const { addToCart } = useCart();
//   const [customizations, setCustomizations] = useState({});
//   const categories = Object.keys(menuData);

//   const handleAddToCart = (item) => {
//     const customization = customizations[item.id] || {};
//     const finalItem = {
//       ...item,
//       ...customization,
//       totalPrice: (item.price * (customization.quantity || 1)).toFixed(2),
//     };
//     addToCart(finalItem);
//     alert(`${item.name} added to cart with your customizations!`);
//   };

//   const renderMenuItem = ({ item }) => (
//     <View style={styles.item}>
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.itemDetails}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.price}>${item.price.toFixed(2)}</Text>
//         <TextInput
//           placeholder="Quantity"
//           keyboardType="numeric"
//           style={styles.input}
//           onChangeText={(value) =>
//             setCustomizations((prev) => ({
//               ...prev,
//               [item.id]: { ...prev[item.id], quantity: parseInt(value) || 1 },
//             }))
//           }
//         />
//         <TextInput
//           placeholder="Special Requests"
//           style={styles.input}
//           onChangeText={(value) =>
//             setCustomizations((prev) => ({
//               ...prev,
//               [item.id]: { ...prev[item.id], specialRequest: value },
//             }))
//           }
//         />
//         <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
//       </View>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Menu</Text>

//       {/* Category Filter */}
//       <View style={styles.categories}>
//         {categories.map((category) => (
//           <TouchableOpacity
//             key={category}
//             style={[
//               styles.categoryButton,
//               selectedCategory === category && styles.activeCategory,
//             ]}
//             onPress={() => setSelectedCategory(category)}
//           >
//             <Text style={styles.categoryText}>{category}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Render Menu Items */}
//       <FlatList
//         data={menuData[selectedCategory]}
//         keyExtractor={(item) => item.id}
//         renderItem={renderMenuItem}
//       />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   categories: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   categoryButton: {
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#ccc',
//   },
//   activeCategory: {
//     backgroundColor: '#6200ee',
//   },
//   categoryText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#ffffff',
//     borderRadius: 5,
//     elevation: 2,
//   },
//   itemDetails: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 5,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   price: {
//     fontSize: 16,
//     color: '#6200ee',
//     marginVertical: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 5,
//     marginBottom: 5,
//     fontSize: 14,
//   },
// });

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from 'react-native';
// import { useCart } from '../context/CartProvider';

// export default function MenuScreen() {
//   const [selectedCategory, setSelectedCategory] = useState('Appetisers');
//   const [menuData, setMenuData] = useState({});
//   const { addToCart } = useCart();
//   const [customizations, setCustomizations] = useState({});
//   const [loading, setLoading] = useState(true);

//   // Fetch menu data from the API
//   useEffect(() => {
//     fetch('http://192.168.1.9:8093/getmenuItem')
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.message === 'menuItem fetched successfully') {
//           const categorizedMenu = data.menuItemm.reduce((acc, item) => {
//             if (!acc[item.category]) {
//               acc[item.category] = [];
//             }
//             acc[item.category].push(item);
//             return acc;
//           }, {});
//           setMenuData(categorizedMenu);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   const handleAddToCart = (item) => {
//     const customization = customizations[item._id] || {};
//     const finalItem = {
//       ...item,
//       ...customization,
//       totalPrice: (item.price * (customization.quantity || 1)).toFixed(2),
//     };
//     addToCart(finalItem);
//     alert(`${item.name} added to cart with your customizations!`);
//   };

//   const renderMenuItem = ({ item }) => (
//     <View style={styles.item}>
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.itemDetails}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.price}>${item.price.toFixed(2)}</Text>
//         <TextInput
//           placeholder="Quantity"
//           keyboardType="numeric"
//           style={styles.input}
//           onChangeText={(value) =>
//             setCustomizations((prev) => ({
//               ...prev,
//               [item._id]: { ...prev[item._id], quantity: parseInt(value) || 1 },
//             }))
//           }
//         />
//         <TextInput
//           placeholder="Special Requests"
//           style={styles.input}
//           onChangeText={(value) =>
//             setCustomizations((prev) => ({
//               ...prev,
//               [item._id]: { ...prev[item._id], specialRequest: value },
//             }))
//           }
//         />
//         <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
//       </View>
//     </View>
//   );

//   if (loading) {
//     return <Text>Loading...</Text>;
//   }

//   // Get categories dynamically
//   const categories = Object.keys(menuData);

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Menu</Text>

//       {/* Category Filter */}
//       <View style={styles.categories}>
//         {categories.map((category) => (
//           <TouchableOpacity
//             key={category}
//             style={[
//               styles.categoryButton,
//               selectedCategory === category && styles.activeCategory,
//             ]}
//             onPress={() => setSelectedCategory(category)}
//           >
//             <Text style={styles.categoryText}>{category}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Render Menu Items */}
//       <FlatList
//         data={menuData[selectedCategory]}
//         keyExtractor={(item) => item._id}
//         renderItem={renderMenuItem}
//       />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   categories: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   categoryButton: {
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#ccc',
//   },
//   activeCategory: {
//     backgroundColor: '#6200ee',
//   },
//   categoryText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#ffffff',
//     borderRadius: 5,
//     elevation: 2,
//   },
//   itemDetails: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 5,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   price: {
//     fontSize: 16,
//     color: '#6200ee',
//     marginVertical: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 5,
//     marginBottom: 5,
//     fontSize: 14,
//   },
// });
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { useCart } from '../context/CartProvider';

export default function MenuScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Appetisers');
  const [menuData, setMenuData] = useState({});
  const { addToCart } = useCart();
  const [customizations, setCustomizations] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch menu data from the API
  useEffect(() => {
    fetch('http://localhost:8093/getmenuItem')
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

  const handleAddToCart = (item) => {
    const customization = customizations[item._id] || {};
    const finalItem = {
      ...item,
      ...customization,
      totalPrice: (item.price * (customization.quantity || 1)).toFixed(2),
    };

    // Add to local cart state
    addToCart(finalItem);

    // Prepare data to send in POST request
    const postData = {
      name: finalItem.name,
      price: finalItem.price,
      image: finalItem.image,
      quantity: customization.quantity || 1,
    };

    // Send POST request to add the item to the cart
    fetch('http://localhost:8093/addCart', {
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
        <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
      </View>
    </View>
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  // Get categories dynamically
  const categories = Object.keys(menuData);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {/* Category Filter */}
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

      {/* Render Menu Items */}
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
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  activeCategory: {
    backgroundColor: '#6200ee',
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 2,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#6200ee',
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    fontSize: 14,
  },
});
