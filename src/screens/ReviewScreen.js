import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ReviewScreen() {
  const [reviews, setReviews] = useState([
    {
      id: '1',
      name: 'Rahul Sharma',
      comment: 'Amazing food and great service!',
      rating: 5,
      image: 'https://media.istockphoto.com/photos/portrait-of-a-beautifull-smiling-man-picture-id499907722?k=6&m=499907722&s=612x612&w=0&h=MYOvvCDGwVuKDQKPhkdQ_-hCqNST3AsMJv2CnO0AhNg=',
    },
    {
      id: '2',
      name: 'Priya Patel',
      comment: 'Loved the biryani!',
      rating: 4,
      image: 'https://assets.gqindia.com/photos/5f9039547f0af5175e0fafbe/master/w_1024%2Cc_limit/Indian%252520women%252520businesswomen%252520Vinati%252520Saraf%252520Mutreja.jpg',
    },
    {
      id: '3',
      name: 'Arjun Singh',
      comment: 'Tasty dosa but a bit slow service.',
      rating: 3,
      image: 'https://i.pinimg.com/originals/22/55/b7/2255b74a7a8d1f83fb3c3fd15ea14368.jpg',
    },
    {
      id: '4',
      name: 'Krupa Chavada',
      comment: 'Delicious paneer tikka!',
      rating: 5,
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFMhisGzr-WwQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700707248069?e=2147483647&v=beta&t=IUGyuu1b1Q6dkHx1Suc1Klcr7Fv70jCivZBMDsrCf5M',
    },
    {
      id: '5',
      name: 'Kunal Roy',
      comment: 'Great ambiance and food.',
      rating: 4,
      image: 'https://tse3.mm.bing.net/th?id=OIP.pXCtDIc7mt90hyLA81ANlQHaEK&pid=Api&P=0&h=180',
    },
    {
      id: '6',
      name: 'Nidhi Kapoor',
      comment: 'Loved the desserts!',
      rating: 5,
      image: 'https://www.vowsforeternity.com/Content/images/nidhi-executive-assistant.png',
    },
    {
      id: '7',
      name: 'Akash Verma',
      comment: 'Good food, but a bit pricey.',
      rating: 3,
      image: 'https://tse2.mm.bing.net/th?id=OIP.35QIb-LMlYtkNBBTusPQFQHaEE&pid=Api&P=0&h=180',
    },
    {
      id: '8',
      name: 'Riya Gupta',
      comment: 'The service was excellent!',
      rating: 5,
      image: 'https://static.toiimg.com/thumb/msid-94458302,imgsize-22838,width-800,height-600,resizemode-75/94458302.jpg',
    },
    {
      id: '9',
      name: 'Manish Agarwal',
      comment: 'Tried the thali, it was amazing.',
      rating: 4,
      image: 'https://tse2.mm.bing.net/th?id=OIP.ds3OSjpvF3SjaAMjFze1gQAAAA&pid=Api&P=0&h=180',
    },
    {
      id: '10',
      name: 'Sneha Rao',
      comment: 'The drinks were refreshing!',
      rating: 4,
      image: 'https://tse2.mm.bing.net/th?id=OIP.MWZtAETlanPTwmKi__ptiAAAAA&pid=Api&P=0&h=180',
    },
  ]);

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const addReview = () => {
    if (!name || !comment || rating === 0) {
      alert('Please fill in all fields and select a rating!');
      return;
    }

    const newReview = {
      id: Date.now().toString(),
      name,
      comment,
      rating,
      image: 'https://wallpapercave.com/wp/wp2004894.jpg', // Dummy image for new reviews
    };

    setReviews((prevReviews) => [newReview, ...prevReviews]);
    setName('');
    setComment('');
    setRating(0);
  };

  const renderReview = ({ item }) => (
    <View style={styles.review}>
      <Image source={{ uri: item.image }} style={styles.reviewImage} />
      <View style={styles.reviewDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.comment}>{item.comment}</Text>
        <View style={styles.rating}>
          {Array.from({ length: 5 }).map((_, index) => (
            <FontAwesome
              key={index}
              name="star"
              size={16}
              color={index < item.rating ? '#ffd700' : '#ccc'}
            />
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Reviews</Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={renderReview}
        style={styles.reviewList}
      />
      <Text style={styles.sectionTitle}>Add Your Review</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Comment"
        value={comment}
        onChangeText={setComment}
      />
      <View style={styles.ratingInput}>
        <Text style={styles.label}>Your Rating:</Text>
        <View style={styles.ratingStars}>
          {Array.from({ length: 5 }).map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setRating(index + 1)}
            >
              <FontAwesome
                name="star"
                size={24}
                color={index < rating ? '#ffd700' : '#ccc'}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Button title="Submit Review" onPress={addReview} />
    </View>
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
    textAlign: 'center',
    marginBottom: 20,
  },
  reviewList: {
    marginBottom: 20,
  },
  review: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 1,
  },
  reviewImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  comment: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  rating: {
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  ratingInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  ratingStars: {
    flexDirection: 'row',
  },
});
