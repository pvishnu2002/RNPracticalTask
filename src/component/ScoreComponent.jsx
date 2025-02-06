import React, { useRef, useState } from 'react';
import { View, Text, PanResponder, Animated, StyleSheet, Image } from 'react-native';
import dislike from '../assets/dislike.png';
import happy from '../assets/happy.png';
import like from '../assets/like.png';
import unhappy from '../assets/unhappy.png';
import { Colors } from '../utils/Colors';

const ScoreComponent = () => {
  const boxWidth = 300;
  const boxHeight = 200;
  const circleSize = 40;
  const maxX = boxWidth - circleSize;
  const maxY = boxHeight - circleSize;

  const initialPos = useRef({
    x: (boxWidth - circleSize) / 2,
    y: (boxHeight - circleSize) / 2,
  });

  const pan = useRef(new Animated.ValueXY({ x: initialPos.current.x, y: initialPos.current.y })).current;

  const [position, setPosition] = useState({ x: 50, y: 50 });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        let newX = Math.max(0, Math.min(initialPos.current.x + gesture.dx, maxX));
        let newY = Math.max(0, Math.min(initialPos.current.y + gesture.dy, maxY));

        pan.setValue({ x: newX, y: newY });

        // Mapping position to 0-100 scale
        setPosition({
          x: Math.round((newX / maxX) * 100),
          y: Math.round((newY / maxY) * 100),
        });
      },
      onPanResponderRelease: () => {
        initialPos.current.x = pan.x._value;
        initialPos.current.y = pan.y._value;
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        X: {position.x}, Y: {position.y}
      </Text>
      <View style={styles.box}>
        <Image source={happy} style={[styles.cornerImage, styles.topLeft]} />
        <Image source={unhappy} style={[styles.cornerImage, styles.topRight]} />
        <Image source={like} style={[styles.cornerImage, styles.rightEmoji]} />
        <Image source={dislike} style={[styles.cornerImage, styles.leftEmoji]} />

        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.circle, { transform: [{ translateX: pan.x }, { translateY: pan.y }] }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: Colors.black,
  },
  box: {
    width: 300,
    height: 200,
    backgroundColor: '#A0C4C7',
    borderRadius: 10,
    borderColor: Colors.teal,
    borderWidth: 3,
    position: 'relative',
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: Colors.teal,
    borderRadius: 20,
    position: 'absolute',
  },
  cornerImage: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
  topLeft: {
    top: '-12%',
    left: '48%',
    marginLeft: -15,
  },
  topRight: {
    bottom: '-12%',
    left: '48%',
    marginLeft: -15,
  },
  leftEmoji: {
    left: '-8%',
    top: '44%',
    marginTop: -15,
  },
  rightEmoji: {
    right: '-8%',
    top: '44%',
    marginTop: -15,
  },
});

export default ScoreComponent;

