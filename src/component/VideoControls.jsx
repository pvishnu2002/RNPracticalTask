import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const VideoControls = ({onPlay, onPause, onStop}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPlay} style={styles.button}>
        <AntDesign name="playcircleo" size={30} color="teal" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPause}
        style={[styles.button, {backgroundColor: 'teal'}]}>
        <Entypo name="controller-paus" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onStop} style={styles.button}>
        <FontAwesome name="stop-circle-o" size={32} color="teal" />
      </TouchableOpacity>
    </View>
  );
};

export default VideoControls;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'center', padding: 20},
  button: {margin: 10, padding: 10, borderRadius: 55},
});
