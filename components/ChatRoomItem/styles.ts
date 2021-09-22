import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 30,
    marginRight: 10,
  },
  badgeContainer: {
    backgroundColor: '#3777f0',
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 44,
    top: 10,
  },
  badgeText: {
    color: '#fff',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: 'gray',
  },
});

export default styles;
