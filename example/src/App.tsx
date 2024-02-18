import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { AlertProvider, useAlertContext } from 'rn-alertify';
import { SimpleExample } from './examples/Simple';
import { NormalExample } from './examples/Normal';
import { SwipeableExample } from './examples/Swipeable';
import { DismissibleExample } from './examples/Dismissible';
import { WithProgress } from './examples/WithProgress';
import { OtherExamples } from './examples/Other';
import { LoadingExample } from './examples/Loading';
function Home({
  preferredAppearance,
  handlePreferredAppearance,
}: {
  preferredAppearance: 'light' | 'dark';
  handlePreferredAppearance: () => void;
}) {
  const { isLoading, isShowing } = useAlertContext();
  const { height, width } = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View
        style={{
          ...styles.buttonsContainer,
          height: height * 0.75,
        }}
      >
        <Text style={styles.title}>React Native Alertify</Text>
        <View style={styles.alertState}>
          <Text style={styles.subtitle}>IsShowing: {isShowing.toString()}</Text>
          <Text style={styles.subtitle}>IsLoading: {isLoading.toString()}</Text>
        </View>
        <Text style={styles.subtitle}>
          Preferred Appeareance: {preferredAppearance.toUpperCase()}
        </Text>
        <View style={styles.alertState}>
          <Text style={styles.subtitle}>Dark Appeareance ?</Text>
          <Switch
            value={preferredAppearance === 'dark'}
            onChange={handlePreferredAppearance}
          />
        </View>
        <Text style={styles.description}>
          Start clicking on the buttons below to see the magic
        </Text>

        <View
          style={{
            height: height * 0.6,
            width: width * 0.8,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <SimpleExample />
            <NormalExample />
            <WithProgress />
            <LoadingExample />
            <SwipeableExample />
            <DismissibleExample />
            <OtherExamples />
            <Text style={styles.footerText}>
              If you want to see more examples, please refer to the
              documentation to do amazing things with this library.
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export const App = () => {
  const [preferredAppearance, setPreferredAppearance] = React.useState<
    'light' | 'dark'
  >('light');

  const handlePreferredAppearance = () => {
    setPreferredAppearance((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <SafeAreaProvider style={styles.safeAreaContainer}>
      <AlertProvider preferredAppearance={preferredAppearance}>
        <Home
          preferredAppearance={preferredAppearance}
          handlePreferredAppearance={handlePreferredAppearance}
        />
      </AlertProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeAreaViewContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertState: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
