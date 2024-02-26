import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './styles';
import { DefaultTheme, useAlertContext } from 'rn-alertify';

export function NormalExample() {
  const { showAlert } = useAlertContext();
  return (
    <View style={styles.exampleContainer}>
      <Text style={styles.subtitle}>Normal Alert</Text>
      <View style={styles.buttonsContainer}>
        <View
          style={{
            ...styles.coloredButton,
            backgroundColor: DefaultTheme.colors.light.success,
          }}
        >
          <Button
            color={'white'}
            title={'Success'}
            onPress={() => {
              showAlert({
                title: 'Success Alert',
                message:
                  'This is a success alert, This is a success alert, This is a success alert',
                type: 'success',
              });
            }}
          />
        </View>
        <View
          style={{
            ...styles.coloredButton,
            backgroundColor: DefaultTheme.colors.light.error,
          }}
        >
          <Button
            color={'white'}
            title={'Error'}
            onPress={() => {
              showAlert({
                title: 'Error Alert',
                message:
                  'This is an error alert, This is an error alert, This is an error alert,This is an error alert',
                type: 'error',
                messageStyle: {
                  disableMultiLine: true,
                },
              });
            }}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View
          style={{
            ...styles.coloredButton,
            backgroundColor: DefaultTheme.colors.light.info,
          }}
        >
          <Button
            color={'white'}
            title={'Info'}
            onPress={() => {
              showAlert({
                title: 'Info Alert',
                message: 'This is an info alert',
                type: 'info',
              });
            }}
          />
        </View>
        <View
          style={{
            ...styles.coloredButton,
            backgroundColor: DefaultTheme.colors.light.warning,
          }}
        >
          <Button
            color={'white'}
            title={'Warning'}
            onPress={() => {
              showAlert({
                title: 'Warning Alert',
                message: 'This is a warning alert',
                type: 'warning',
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}
