import React from 'react';
import { useAlertContext } from 'rn-alertify';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

export function OtherExamples() {
  const { showAlert } = useAlertContext();
  return (
    <View>
      <View style={styles.exampleContainer}>
        <Text style={styles.subtitle}>Shadow By Type</Text>
        <View style={styles.buttonsContainer}>
          <View
            style={{
              ...styles.blackButton,
              flex: 1,
            }}
          >
            <Button
              color={'white'}
              title={'Shadow By Type'}
              onPress={() => {
                showAlert({
                  title: 'Alert with shadow by type',
                  message: 'Now shadow is like type color',
                  type: 'error',
                  shadowColorByType: true,
                });
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.exampleContainer}>
        <Text style={styles.subtitle}>Background By Type</Text>
        <View style={styles.buttonsContainer}>
          <View
            style={{
              ...styles.blackButton,
              flex: 1,
            }}
          >
            <Button
              color={'white'}
              title={'Background By Type'}
              onPress={() => {
                showAlert({
                  title: 'Alert background by type',
                  message: 'Useful to show high priority alerts',
                  type: 'error',
                  backgroundByType: true,
                });
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
