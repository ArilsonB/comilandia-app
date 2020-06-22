import React, {memo} from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const RecipeList = ({recipe}) => {
  const ingredients = recipe.ingredients;
  return (
    <TouchableOpacity style={styles.cardTouch}>
      <ImageBackground source={{uri: recipe.image}} style={styles.cardBg}>
        <View style={styles.cardFooter}>
          <Text style={styles.cardText}>{recipe.name}</Text>
          <Text style={styles.cardTwoText} numberOfLines={1}>
            {ingredients}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardTouch: {
    backgroundColor: '#FFF',
    margin: 10,
    height: 250,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardBg: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  cardFooter: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: 70,
    padding: 10,
    paddingLeft: 25,
    flexWrap: 'wrap',
  },
  cardText: {
    color: 'white',
    fontSize: 22,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  cardTwoText: {
    color: 'white',
    fontSize: 13,
  },
});

export default memo(RecipeList);
