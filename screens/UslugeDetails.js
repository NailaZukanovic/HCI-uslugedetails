import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const UslugeDetails = ({navigation, route}) => {

  const service= route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={25} onPress={() => navigation.navigate('Usluge')}/>
        <Text style={{color:'#FFD700', fontWeight: 'bold'}}>Price: ${service.price}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
});


export default UslugeDetails;