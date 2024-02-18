import React from 'react';
import { useAlertContext } from 'rn-alertify';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

export function DismissibleExample() {
  const { showAlert } = useAlertContext();
  return (
    <View style={styles.exampleContainer}>
      <Text style={styles.subtitle}>Dismissible</Text>
      <View style={styles.buttonsContainer}>
        <View
          style={{
            ...styles.blackButton,
            flex: 1,
          }}
        >
          <Button
            color={'white'}
            title={'Dismissible '}
            onPress={() => {
              showAlert({
                title: 'Dismissible Alert',
                message: 'Clickme to dismiss',
                type: 'info',
                dismissible: true,
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}
