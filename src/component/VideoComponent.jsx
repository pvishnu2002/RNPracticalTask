import React, { forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoComponent = forwardRef(({ playing }, ref) => {
  return (
    <View style={styles.container}>
      <Video
        ref={ref}
        source={require('../assets/video.mp4')}
        style={styles.video}
        controls={false} // Custom controls will be used
        paused={!playing} // Play/pause state controlled from HomeScreen
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 200,
    borderWidth: 3,
    borderColor: 'teal',
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default VideoComponent;
