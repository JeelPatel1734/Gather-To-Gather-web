// // import React from 'react';
// // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';

// // export default function DetailsScreen() {
// //   const teamMembers = [
// //     { name: 'Jeel Patel', role: 'Team Lead & main frontend Developer', image: require('./jeel.jpg') },
// //     { name: 'Dhrumil Kumbhani', role: 'UI/UX Designer', image: require('./dhrumil.jpg') },
// //     { name: 'Dhruvish Kanani', role: 'Helping web Developer', image: require('./dhruvish.jpg') },
// //     { name: 'Tirth Vachheta', role: 'Backend Developer', image: require('./tirth.jpg') },
// //     { name: 'Kanish Hirpara', role: 'QA Specialist', image: require('./kanish.jpg') },
// //   ];

// //   const handleOpenLink = (url) => Linking.openURL(url);

// //   return (
// //     <ScrollView style={styles.container}>
// //       <View style={styles.header}>
// //         <Text style={styles.title}>About Us</Text>
// //       </View>

// //       <Image
// //         source={{
// //           uri: 'https://www.tripsavvy.com/thmb/Dng7IxuYhorBfvBHFQCFCox06HY=/1250x700/filters:no_upscale():max_bytes(150000):strip_icc()/ParikramaDelhi2-5adaedec8023b90036478c7e.jpg',
// //         }}
// //         style={styles.bannerImage}
// //       />

// //       <View style={styles.content}>
// //         <Text style={styles.subtitle}>
// //           Welcome to <Text style={styles.highlight}>Gather-to-Gather</Text>!
// //         </Text>
// //         <Text style={styles.description}>
// //           We deliver delicious meals with love and fresh ingredients. Whether it's dine-in, takeaway, or catering for
// //           your events, we've got you covered!
// //         </Text>

// //         <View style={styles.contactSection}>
// //           <Text style={styles.sectionTitle}>📞 Contact Us</Text>
// //           <Text style={styles.contactText}>Phone: +1 (437) 232-4752</Text>
// //           <Text style={styles.contactText}>Email: jeelppatel1734@gmail.com</Text>
// //           <TouchableOpacity
// //             onPress={() =>
// //               handleOpenLink('https://www.instagram.com/gatherrtogatherr?igsh=MWNncmY2bzB3NjBz')
// //             }
// //             style={styles.button}
// //           >
// //             <Text style={styles.buttonText}>Follow Us on Instagram</Text>
// //           </TouchableOpacity>
// //         </View>

// //         <Text style={styles.sectionTitle}>🤝 Meet the Team</Text>
// //         <View style={styles.teamSection}>
// //           {teamMembers.map((member, index) => (
// //             <View key={index} style={styles.teamMember}>
// //               <Image source={member.image} style={styles.teamImage} />
// //               <Text style={styles.teamName}>{member.name}</Text>
// //               <Text style={styles.teamRole}>{member.role}</Text>
// //             </View>
// //           ))}
// //         </View>
// //       </View>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#f9f9f9' },
// //   header: {
// //     backgroundColor: '#6200ee',
// //     padding: 20,
// //     borderBottomLeftRadius: 20,
// //     borderBottomRightRadius: 20,
// //     alignItems: 'center',
// //   },
// //   title: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
// //   bannerImage: { width: '100%', height: 200, marginVertical: 20, borderRadius: 10 },
// //   content: { padding: 20 },
// //   subtitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
// //   highlight: { color: '#6200ee' },
// //   description: { fontSize: 16, color: '#555', textAlign: 'center', lineHeight: 22 },
// //   contactSection: {
// //     backgroundColor: '#fff',
// //     padding: 15,
// //     borderRadius: 10,
// //     marginTop: 20,
// //     elevation: 3,
// //   },
// //   sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#6200ee' },
// //   contactText: { fontSize: 16, marginBottom: 5, color: '#333' },
// //   button: {
// //     marginTop: 10,
// //     padding: 10,
// //     backgroundColor: '#6200ee',
// //     alignItems: 'center',
// //     borderRadius: 5,
// //   },
// //   buttonText: { color: '#fff', fontWeight: '600' },
// //   teamSection: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 20 },
// //   teamMember: {
// //     alignItems: 'center',
// //     marginBottom: 20,
// //     width: '40%',
// //     padding: 10,
// //     backgroundColor: '#fff',
// //     borderRadius: 10,
// //     elevation: 2,
// //   },
// //   teamImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
// //   teamName: { fontSize: 16, fontWeight: 'bold', color: '#333', textAlign: 'center' },
// //   teamRole: { fontSize: 14, color: '#555', textAlign: 'center' },
// // });




// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';

// export default function DetailsScreen() {
//   const teamMembers = [
//     { name: 'Jeel Patel', role: 'Team Lead & Main Frontend Developer', image: require('./jeel.jpg') },
//     { name: 'Dhrumil Kumbhani', role: 'UI/UX Designer', image: require('./dhrumil.jpg') },
//     { name: 'Dhruvish Kanani', role: 'Helping Web Developer', image: require('./dhruvish.jpg') },
//     { name: 'Tirth Vachheta', role: 'Backend Developer', image: require('./tirth.jpg') },
//     { name: 'Kanish Hirpara', role: 'QA Specialist', image: require('./kanish.jpg') },
//   ];

//   const handleOpenLink = (url) => Linking.openURL(url);

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.title}>About Us</Text>
//       </View>

//       {/* Banner Image */}
//       <Image
//         source={{
//           uri: 'https://www.tripsavvy.com/thmb/Dng7IxuYhorBfvBHFQCFCox06HY=/1250x700/filters:no_upscale():max_bytes(150000):strip_icc()/ParikramaDelhi2-5adaedec8023b90036478c7e.jpg',
//         }}
//         style={styles.bannerImage}
//       />

//       <View style={styles.content}>
//         {/* Intro Section */}
//         <Text style={styles.subtitle}>
//           Welcome to <Text style={styles.highlight}>Gather-to-Gather</Text>!
//         </Text>
//         <Text style={styles.description}>
//           We deliver delicious meals with love and fresh ingredients. Whether it's dine-in, takeaway, or catering for
//           your events, we've got you covered!
//         </Text>

//         {/* Contact Section */}
//         <View style={styles.contactSection}>
//           <Text style={styles.sectionTitle}>📞 Contact Us</Text>
//           <Text style={styles.contactText}>Phone: +1 (437) 232-4752</Text>
//           <Text style={styles.contactText}>Email: jeelppatel1734@gmail.com</Text>
//           <TouchableOpacity
//             onPress={() =>
//               handleOpenLink('https://www.instagram.com/gatherrtogatherr?igsh=MWNncmY2bzB3NjBz')
//             }
//             style={styles.button}
//           >
//             <Text style={styles.buttonText}>Follow Us on Instagram</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Team Section */}
//         <Text style={styles.sectionTitle}>🤝 Meet the Team</Text>
//         <View style={styles.teamSection}>
//           {teamMembers.map((member, index) => (
//             <View key={index} style={styles.teamMember}>
//               <Image source={member.image} style={styles.teamImage} />
//               <Text style={styles.teamName}>{member.name}</Text>
//               <Text style={styles.teamRole}>{member.role}</Text>
//             </View>
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F8F8F8' },

//   // Header Styles
//   header: {
//     backgroundColor: '#6200ee',
//     padding: 25,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 6,
//   },
//   title: { fontSize: 30, fontWeight: 'bold', color: '#fff', letterSpacing: 1 },

//   // Banner Image
//   bannerImage: {
//     width: '90%',
//     height: 220,
//     alignSelf: 'center',
//     marginVertical: 20,
//     borderRadius: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 5,
//   },

//   // Content Styling
//   content: { padding: 20 },
//   subtitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 10,
//     color: '#333',
//   },
//   highlight: { color: '#6200ee' },
//   description: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 24,
//     paddingHorizontal: 10,
//   },

//   // Contact Section
//   contactSection: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 15,
//     marginTop: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#6200ee',
//     textAlign: 'center',
//   },
//   contactText: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#444',
//     textAlign: 'center',
//   },
//   button: {
//     marginTop: 10,
//     paddingVertical: 12,
//     backgroundColor: '#6200ee',
//     alignItems: 'center',
//     borderRadius: 8,
//     shadowColor: '#6200ee',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.4,
//     shadowRadius: 5,
//     elevation: 4,
//   },
//   buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

//   // Team Section
//   teamSection: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   teamMember: {
//     alignItems: 'center',
//     marginBottom: 20,
//     width: '40%',
//     padding: 12,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   teamImage: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     marginBottom: 10,
//     borderWidth: 2,
//     borderColor: '#6200ee',
//   },
//   teamName: { fontSize: 16, fontWeight: 'bold', color: '#333', textAlign: 'center' },
//   teamRole: { fontSize: 14, color: '#777', textAlign: 'center' },
// });
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';

export default function DetailsScreen() {
  const teamMembers = [
    { name: 'Jeel Patel', role: 'Team Lead & Frontend Developer', image: require('./jeel.jpg') },
    { name: 'Dhrumil Kumbhani', role: 'UI/UX Designer', image: require('./dhrumil.jpg') },
    { name: 'Dhruvish Kanani', role: 'Web Developer', image: require('./dhruvish.jpg') },
    { name: 'Tirth Vachheta', role: 'Backend Developer', image: require('./tirth.jpg') },
    { name: 'Kanish Hirpara', role: 'QA Specialist', image: require('./kanish.jpg') },
  ];

  const handleOpenLink = (url) => Linking.openURL(url);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>About Us</Text>
      </View>

      <Image
        source={{ uri: 'https://www.tripsavvy.com/thmb/Dng7IxuYhorBfvBHFQCFCox06HY=/1250x700/filters:no_upscale():max_bytes(150000):strip_icc()/ParikramaDelhi2-5adaedec8023b90036478c7e.jpg' }}
        style={styles.bannerImage}
      />

      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Welcome to <Text style={styles.highlight}>Gather-to-Gather</Text>!
        </Text>
        <Text style={styles.description}>
          We deliver delicious meals with love and fresh ingredients. Whether it's dine-in, takeaway, or catering for your events, we've got you covered!
        </Text>

        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>📞 Contact Us</Text>
          <Text style={styles.contactText}>Phone: +1 (437) 232-4752</Text>
          <Text style={styles.contactText}>Email: jeelppatel1734@gmail.com</Text>
          <TouchableOpacity
            onPress={() => handleOpenLink('https://www.instagram.com/gatherrtogatherr?igsh=MWNncmY2bzB3NjBz')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Follow Us on Instagram</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>🤝 Meet the Team</Text>
        <View style={styles.teamSection}>
          {teamMembers.map((member, index) => (
            <View key={index} style={styles.teamMember}>
              <Image source={member.image} style={styles.teamImage} />
              <Text style={styles.teamName}>{member.name}</Text>
              <Text style={styles.teamRole}>{member.role}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF3E0' },
  header: {
    backgroundColor: '#FF6363',
    padding: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    elevation: 5,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  bannerImage: { width: '100%', height: 220, marginVertical: 20, borderRadius: 20 },
  content: { padding: 20 },
  subtitle: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: '#FF6363' },
  highlight: { color: '#FF8C32' },
  description: { fontSize: 16, color: '#444', textAlign: 'center', lineHeight: 22, marginBottom: 20 },
  contactSection: {
    backgroundColor: '#FFF5E4',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    elevation: 4,
  },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#FF6363' },
  contactText: { fontSize: 16, marginBottom: 5, color: '#333' },
  button: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#FF8C32',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  teamSection: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 20 },
  teamMember: {
    alignItems: 'center',
    marginBottom: 20,
    width: '45%',
    padding: 15,
    backgroundColor: '#FFF5E4',
    borderRadius: 10,
    elevation: 3,
  },
  teamImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  teamName: { fontSize: 16, fontWeight: 'bold', color: '#333', textAlign: 'center' },
  teamRole: { fontSize: 14, color: '#666', textAlign: 'center' },
});
