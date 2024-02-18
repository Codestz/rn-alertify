import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAlertContext } from 'rn-alertify';
import { styles } from './styles';

export function SimpleExample() {
  const { showAlert } = useAlertContext();
  return (
    <View style={styles.exampleContainer}>
      <Text style={styles.subtitle}>Simple Alert</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.blackButton}>
          <Button
            color={'white'}
            title={'No Message'}
            onPress={() => {
              showAlert({
                title: 'Simple Alert',
                showIndicator: false,
              });
            }}
          />
        </View>
        <View style={styles.blackButton}>
          <Button
            color={'white'}
            title={'With Message'}
            onPress={() => {
              showAlert({
                title: 'Simple Alert with Message',
                message: 'This is a simple alert with message',
                showIndicator: false,
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}
