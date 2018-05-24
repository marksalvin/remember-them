import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Colors from '../../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={Colors.brandPrimary} />
  </View>
);

export default Loading;
