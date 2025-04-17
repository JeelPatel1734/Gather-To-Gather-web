
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
//   StyleSheet,
//   Platform
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export default function CateringScreen() {
//   const [formData, setFormData] = useState({
//     location: '',
//     eventType: '',
//     guests: '',
//     requirements: '',
//     date: '',
//     time: '',
//   });
  
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [showTimePicker, setShowTimePicker] = useState(false);

//   const handleConfirmBooking = async () => {
//    if (!formData.date || !formData.time) {
//      Alert.alert('Error', 'Please enter both date and time.');
//      return;
//    }

//     const currentDate = new Date();
//     const enteredDate = new Date(formData.date);
//     const minDate = new Date(currentDate.setDate(currentDate.getDate() + 2));

//     if (enteredDate < minDate) {
//       Alert.alert(
//         'Invalid Date',
//         'Catering is not possible this early. Please choose a date at least 2 days from today.'
//       );
//       return;
//     }

//     try {
//       const response = await fetch('http://192.168.1.5:8093/addCatering', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         Alert.alert('Booking Confirmed!', data.message);
//       } else {
//         Alert.alert('Booking Failed', data.message || 'Something went wrong');
//       }
//     } catch (error) {
//       Alert.alert('Booking Failed', error.message || 'Something went wrong');
//     }
//   };

//   const handleDateChange = (event, selectedDate) => {
//     setShowDatePicker(false);
//     const currentDate = selectedDate || formData.date;
//     setFormData((prev) => ({ ...prev, date: currentDate.toISOString().split('T')[0] }));
//   };

//   const handleTimeChange = (event, selectedTime) => {
//     setShowTimePicker(false);
//     const currentTime = selectedTime || formData.time;
//     const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     setFormData((prev) => ({ ...prev, time: timeString }));
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Catering Booking</Text>
//       {[ 
//         { label: 'Event Location', key: 'location' },
//         { label: 'Event Type', key: 'eventType' },
//         { label: 'Number of Guests', key: 'guests', keyboardType: 'numeric' },
//         { label: 'Special Requirements', key: 'requirements', multiline: true, height: 100 },
//       ].map((item, index) => (
//         <View key={index} style={styles.inputContainer}>
//           <Text style={styles.label}>{item.label}:</Text>
//           <TextInput
//             style={[styles.input, item.height && { height: item.height }]}
//             placeholder={item.label}
//             keyboardType={item.keyboardType || 'default'}
//             multiline={item.multiline || false}
//             value={formData[item.key]}
//             onChangeText={(text) =>
//               setFormData((prev) => ({ ...prev, [item.key]: text }))
//             }
//           />
//         </View>
//       ))}

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Select Date:</Text>
//         <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
//           <Text>{formData.date ? formData.date : 'Pick a date'}</Text>
//         </TouchableOpacity>
//         {showDatePicker && (
//           <DateTimePicker
//             testID="dateTimePicker"
//             value={new Date(formData.date || Date.now())}
//             mode="date"
//             is24Hour={true}
//             display="default"
//             onChange={handleDateChange}
//           />
//         )}
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Select Time:</Text>
//         <TouchableOpacity style={styles.input} onPress={() => setShowTimePicker(true)}>
//           <Text>{formData.time ? formData.time : 'Pick a time'}</Text>
//         </TouchableOpacity>
//         {showTimePicker && (
//           <DateTimePicker
//             testID="timePicker"
//             value={new Date(formData.time || Date.now())}
//             mode="time"
//             is24Hour={false}
//             display="default"
//             onChange={handleTimeChange}
//           />
//         )}
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleConfirmBooking}>
//         <Text style={styles.buttonText}>Confirm Booking</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#ffe4e1',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#ff4500',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 5,
//     color: '#ff1493',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ff69b4',
//     borderRadius: 10,
//     padding: 12,
//     backgroundColor: '#fffaf0',
//     fontSize: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   button: {
//     backgroundColor: '#ff6347',
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-datepicker';  // Importing the web-based date picker
import 'react-datepicker/dist/react-datepicker.css';  // Import CSS for date picker

export default function CateringScreen() {
  const [formData, setFormData] = useState({
    location: '',
    eventType: '',
    guests: '',
    requirements: '',
    date: '',
    time: '',
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleConfirmBooking = async () => {
    if (!formData.date || !formData.time) {
      Alert.alert('Error', 'Please enter both date and time.');
      return;
    }

    const currentDate = new Date();
    const enteredDate = new Date(formData.date);
    const minDate = new Date(currentDate.setDate(currentDate.getDate() + 2));

    if (enteredDate < minDate) {
      Alert.alert(
        'Invalid Date',
        'Catering is not possible this early. Please choose a date at least 2 days from today.'
      );
      return;
    }

    try {
      const response = await fetch('http://192.168.1.5:8093/addCatering', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Booking Confirmed!', data.message);
      } else {
        Alert.alert('Booking Failed', data.message || 'Something went wrong');
      }
    } catch (error) {
      Alert.alert('Booking Failed', error.message || 'Something went wrong');
    }
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date: date }));
  };

  const handleTimeChange = (time) => {
    const timeString = time ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : formData.time;
    setFormData((prev) => ({ ...prev, time: timeString }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Catering Booking</Text>
      {[ 
        { label: 'Event Location', key: 'location' },
        { label: 'Event Type', key: 'eventType' },
        { label: 'Number of Guests', key: 'guests', keyboardType: 'numeric' },
        { label: 'Special Requirements', key: 'requirements', multiline: true, height: 100 },
      ].map((item, index) => (
        <View key={index} style={styles.inputContainer}>
          <Text style={styles.label}>{item.label}:</Text>
          <TextInput
            style={[styles.input, item.height && { height: item.height }]}
            placeholder={item.label}
            keyboardType={item.keyboardType || 'default'}
            multiline={item.multiline || false}
            value={formData[item.key]}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, [item.key]: text }))
            }
          />
        </View>
      ))}

      {/* Date Picker for Mobile and Web */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Date:</Text>
        {Platform.OS === 'web' ? (
          <DatePicker
            selected={formData.date ? new Date(formData.date) : null}
            onChange={handleDateChange}
            minDate={new Date(new Date().setDate(new Date().getDate() + 2))}
            dateFormat="yyyy/MM/dd"
            className="input"
            placeholderText="Pick a date"
          />
        ) : (
          <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
            <Text>{formData.date ? formData.date : 'Pick a date'}</Text>
          </TouchableOpacity>
        )}
        {showDatePicker && Platform.OS !== 'web' && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(formData.date || Date.now())}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      {/* Time Picker for Mobile and Web */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Time:</Text>
        {Platform.OS === 'web' ? (
          <DatePicker
            selected={formData.time ? new Date(`1970-01-01T${formData.time}:00`) : null}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="input"
            placeholderText="Pick a time"
          />
        ) : (
          <TouchableOpacity style={styles.input} onPress={() => setShowTimePicker(true)}>
            <Text>{formData.time ? formData.time : 'Pick a time'}</Text>
          </TouchableOpacity>
        )}
        {showTimePicker && Platform.OS !== 'web' && (
          <DateTimePicker
            testID="timePicker"
            value={new Date(formData.time || Date.now())}
            mode="time"
            is24Hour={false}
            display="default"
            onChange={handleTimeChange}
          />
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleConfirmBooking}>
        <Text style={styles.buttonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffe4e1',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff4500',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#ff1493',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ff69b4',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fffaf0',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
