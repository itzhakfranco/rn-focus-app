import React, {useState, useEffect, useRef} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const minsToMillis = mins => mins * 1000 * 60;

const CountDown = ({mins = 20, isPaused}) => {
  const [millis, setMillies] = useState(minsToMillis(mins));

  const formatTime = time => (time < 10 ? `0${time}` : time);
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  const interval = useRef(null);
  const countDown = () => {
    setMillies(time => {
      if (time === 0) {
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, []);

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    padding: 24,
    backgroundColor: 'rgba(94,132,226,0.3)',
  },
});

export default CountDown;
