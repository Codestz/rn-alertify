import React from 'react';
import { useAlertContext } from 'rn-alertify';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

export function WithProgress() {
  const { showAlert } = useAlertContext();

  return (
    <View style={styles.exampleContainer}>
      <Text style={styles.subtitle}>Show Progress</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.blackButton}>
          <Button
            color={'white'}
            title={'Color By Type'}
            onPress={() => {
              showAlert({
                title: 'Alert with Progress',
                message: 'This is a progress alert',
                type: 'info',
                showProgress: true,
              });
            }}
          />
        </View>
        <View style={styles.blackButton}>
          <Button
            color={'white'}
            title={'Custom Color'}
            onPress={() => {
              showAlert({
                title: 'Alert with Progress',
                message: 'This is a progress alert',
                type: 'info',
                showProgress: true,
                progressColor: 'pink',
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}
