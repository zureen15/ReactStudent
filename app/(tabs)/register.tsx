import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from "@/node_modules/@react-native-picker/picker";

const StudentRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [course, setCourse] = useState('');
  const [university, setUniversity] = useState('');

  const handleRegistration = () => {
    // Handle registration logic here
    console.log('Registration data:', {
      name,
      email,
      password,
      educationLevel,
      course,
      university,
    });
  };

 

  return (

    <ScrollView>
      {/* Menu for each button */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>UNI STU</Text>
          <View style={styles.headerNav}>
            <Text style={styles.navItem}>Home</Text>
            <Text style={styles.navItem}>Class</Text>
            <Text style={styles.navItem}>Loyalty</Text>
            <Text style={styles.navItem}>Student Exchange</Text>
            <Text style={styles.navItem}>Quiz</Text>
            <Text style={styles.navItem}>Note Taker</Text>
          </View>
        </View>

        {/* Title Form */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Student Information Registration</Text>

          {/* Student Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>

          {/* Student Email */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Student Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Student Education Level */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Education Level</Text>
            <Picker
              selectedValue={educationLevel}
              style={{ height: 50, width: 250 }}
              mode={"dialog"}
              onValueChange={(itemValue) => setEducationLevel(itemValue)}
            >
              {/* Items */}
              <Picker.Item label="Foundation" value="fd" />
              <Picker.Item label="Diploma" value="dip" />
              <Picker.Item label="Advanced Diploma" value="ad" />
              <Picker.Item label="Degree" value="deg" />
              <Picker.Item label="Master's Degree" value="mdeg" />
              <Picker.Item label="Doctoral Degree" value="doc" />
            </Picker>
          </View>

          {/* Student Course */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Course</Text>
            <Picker
              selectedValue={course}
              style={{ height: 50, width: 250 }}
              mode={"dialog"}
              onValueChange={(itemValue) => setCourse(itemValue)}
            >
              {/* Items */}
              <Picker.Item label="Business" value="business" />
              <Picker.Item label="Information Technology" value="IT" />
              <Picker.Item label="Engineer" value="engineer" />
              <Picker.Item label="Education" value="edu" />
              <Picker.Item label="Computer Science" value="CS" />
              <Picker.Item label="Mechanical Engineering" value="mec" />
            </Picker>
          </View>
          
          {/* Student University */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>University</Text>
            <Picker
              style={{ height: 50, width: 250 }}
              selectedValue={university}
              onValueChange={(itemValue) => setUniversity(itemValue)}
            >
              <Picker.Item label="City University Malaysia" value="" />
              <Picker.Item label="German-Malaysian Institute" value="uni_b" />
              <Picker.Item label="Management and Science University" value="uni_c" />
              <Picker.Item label="University of Malaya" value="uni_d" />
              <Picker.Item label="Universiti Putra Malaysia" value="uni_e" />
              {/* Add more universities here... */}
            </Picker>
          </View>

        {/* Submit Registration Form Button */}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleRegistration}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};


// Styling Part
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    height: 60,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
  },
  headerNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  navItem: {
    fontSize: 18,
    color: '#fff',
    marginRight: 20,
  },
  formContainer: {
    padding: 20,
  },
  formTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default StudentRegistration;