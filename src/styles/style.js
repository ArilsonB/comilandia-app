import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'red',
  },
  mainBg: {
    flex:1,
    resizeMode: 'cover',
  },
  outerBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topView: {
    flex: 1,
    alignItems: 'center',
  },
  AppLogo: {
    top: 125,
    fontSize: 55,
    color: 'white',
  },
  bottomView: {
    flexDirection: 'column',
    height: 250,
    marginLeft: 35,
    marginRight: 35,
  },
  searchRecipes: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  textInput: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    fontSize: 15,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  btnInput: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: 'red',
    padding: 13,
    fontSize: 16,
  },
  savedRecipes: {
    backgroundColor: '#570076',
    padding: 13,
    marginBottom: 30,
  },
  newRecipes: {
    backgroundColor: '#E00036',
    padding: 13,
  },
  searchView: {
    margin: 10,
    height: 50,
  },
  searchInput: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    fontSize: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default Style;
