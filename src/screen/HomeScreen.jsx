import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState,useRef} from 'react';
import VideoComponent from '../component/VideoComponent';
import ScoreComponent from '../component/ScoreComponent';
import VideoControls from '../component/VideoControls';

const HomeScreen = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    // videoRef.current?.seek(0); 
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleStop = () => {
    setPlaying(false);
    videoRef.current?.seek(0); 
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VideoComponent ref={videoRef} playing={playing} />
      <ScoreComponent />
      <VideoControls onPlay={handlePlay} onPause={handlePause} onStop={handleStop} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
