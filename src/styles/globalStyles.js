import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
});
