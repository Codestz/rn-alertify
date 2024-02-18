import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: 'gray',
    borderRadius: 10,
    flex: 1,
    marginBottom: 20,
  },
  exampleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  blackButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    flex: 0.45,
  },
  coloredButton: {
    borderRadius: 10,
    flex: 0.45,
  },
});
