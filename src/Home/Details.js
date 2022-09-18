
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, } from 'react-native'
import React, { Component,  useState, useEffect  } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import ServiceList from './ServiceList';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';





const Details = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const hcps = ServiceList

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
      console.log(location);
    })();
  }, []);

  let text = 'Loading..';
  if (errorMsg) {
    text = errorMsg;
  } else if (currentLocation) {
    text = JSON.stringify(currentLocation);
  }
  
  const renderMarker = () =>{
    return(
    
      hcps.map((marker, index) =>{
        <Marker
        key={index}
        coordinate={{latitude: marker.coord.latitude, longitude: marker.coord.longitude}}
        title= {marker.name}
        
        
        />
        
      })
    
      
    )
  }


  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
          initialRegion={{
            latitude: -26.110390,
            longitude: 28.053440,
            latitudeDelta: 0.8,
            longitudeDelta: 0.1333,


          }}

          showsUserLocation={true}
      
      
      />
    </View>
  )
}



const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default Details;