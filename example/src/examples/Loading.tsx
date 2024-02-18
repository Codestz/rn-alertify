import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAlertContext } from 'rn-alertify';
import { styles } from './styles';

export function LoadingExample() {
  const { showAlert, changeContent, setLoader } = useAlertContext();

  const showLoadingAlert = () => {
    setLoader(true);
    showAlert({
      title: 'Loading Request',
      message: 'Please wait...',
      showIndicator: false,
    });
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  const showLoadingAlertWithContentChange = () => {
    setLoader(true);
    showAlert({
      title: 'Loading Request',
      message: 'Please wait...',
      showIndicator: false,
    });
    setTimeout(() => {
      changeContent({
        title: 'Content Changed',
        message: 'This is a new content',
        type: 'success',
      });
      setLoader(false);
    }, 3000);
  };

  return (
    <View style={styles.exampleContainer}>
      <Text style={styles.subtitle}>Loading Alert</Text>
      <View style={styles.buttonsContainer}>
        <View
          style={{
            ...styles.blackButton,
            flex: 1,
          }}
        >
          <Button
            color={'white'}
            title={'Show Loading Alert'}
            onPress={showLoadingAlert}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View
          style={{
            ...styles.blackButton,
            flex: 1,
          }}
        >
          <Button
            color={'white'}
            title={'Show Loading And Change Content'}
            onPress={showLoadingAlertWithContentChange}
          />
        </View>
      </View>
    </View>
  );
}
