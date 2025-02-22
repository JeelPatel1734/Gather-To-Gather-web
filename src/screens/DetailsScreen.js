import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';

export default function DetailsScreen() {
  const teamMembers = [
    { name: 'Jeel Patel', role: 'Team Lead & main frontend Developer', image: require('./jeel.jpg') },
    { name: 'Dhrumil Kumbhani', role: 'UI/UX Designer', image: require('./dhrumil.jpg') },
    { name: 'Dhruvish Kanani', role: 'Helping web Developer', image: require('./dhruvish.jpg') },
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
        source={{
          uri: 'https://i.pinimg.com/originals/05/01/ba/0501ba793745e2756c8daba48c57340e.jpg',
        }}
        style={styles.bannerImage}
      />

      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Welcome to <Text style={styles.highlight}>Gather-to-Gather</Text>!
        </Text>
        <Text style={styles.description}>
          We deliver delicious meals with love and fresh ingredients. Whether it's  takeaway, or catering for
          your events, we've got you covered!
        </Text>

        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>📞 Contact Us</Text>
          <Text style={styles.contactText}>Phone: +1 (437) 232-4752</Text>
          <Text style={styles.contactText}>Email: jeelppatel1734@gmail.com</Text>
          <TouchableOpacity
            onPress={() =>
              handleOpenLink('https://www.instagram.com/gatherrtogatherr?igsh=MWNncmY2bzB3NjBz')
            }
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
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: {
    backgroundColor: '#6200ee',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  bannerImage: { width: '100%', height: 200, marginVertical: 20, borderRadius: 10 },
  content: { padding: 20 },
  subtitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  highlight: { color: '#6200ee' },
  description: { fontSize: 16, color: '#555', textAlign: 'center', lineHeight: 22 },
  contactSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    elevation: 3,
  },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#6200ee' },
  contactText: { fontSize: 16, marginBottom: 5, color: '#333' },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#6200ee',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: { color: '#fff', fontWeight: '600' },
  teamSection: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 20 },
  teamMember: {
    alignItems: 'center',
    marginBottom: 20,
    width: '40%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  teamImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  teamName: { fontSize: 16, fontWeight: 'bold', color: '#333', textAlign: 'center' },
  teamRole: { fontSize: 14, color: '#555', textAlign: 'center' },
});




