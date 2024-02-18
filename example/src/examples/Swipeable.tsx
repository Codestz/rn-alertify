import React from 'react';
import { useAlertContext } from 'rn-alertify';
import { styles } from './styles';
import { Button, Text, View } from 'react-native';

export function SwipeableExample() {
  const { showAlert } = useAlertContext();

  return (
    <View style={styles.exampleContainer}>
      <Text style={styles.subtitle}>Swipeable</Text>
      <View style={styles.buttonsContainer}>
        <View
          style={{
            ...styles.blackButton,
            flex: 1,
          }}
        >
          <Button
            color={'white'}
            title={'Swipeable'}
            onPress={() => {
              showAlert({
                title: 'Swipeable Alert',
                message: 'Swipe left or right to dismiss',
                type: 'info',
                swipeable: true,
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}
