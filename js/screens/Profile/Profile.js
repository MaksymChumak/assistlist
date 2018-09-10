import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../config/styles';
import styles from './styles';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Icon name="user" size={80} color={colors.darkBlue} />
        <Text style={styles.linkText}>Me</Text>
        <TouchableOpacity onPress={() => console.log('add picture')}>
          <Text style={styles.editText}>edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linkGrid}>
        <TouchableOpacity onPress={() => console.log('listings')}>
          <View style={styles.gridItem}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/Footer/Listing-Filled.png')}
            />
            <Text style={styles.gridText}>My listings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Notifications')}>
          <View style={styles.gridItem}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/Icons/Notification.png')}
            />
            <Text style={styles.gridText}>Notifications</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Edit Info')}>
          <View style={styles.gridItem}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/Icons/Edit.png')}
            />
            <Text style={styles.gridText}>Edit Account Info</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Logout')}>
          <View style={styles.gridItem}>
            <Icon name="power" size={60} color={colors.darkBlue} />
            <Text style={styles.gridText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Profile;
