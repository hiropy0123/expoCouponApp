import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CouponsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is CouponsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CouponsScreen;
