import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import {getRecipes} from '../services';
import {RecipeList} from '../components';
import {Style} from '../styles';

const Search = ({route,navigation}) => {
  const [SearchText, setSearchText] = useState();
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipe = () => {
    setSearch(SearchText);
  };

  useEffect(() => {
    setSearch(route.params?.search);
  }, [route.params?.search]);
  useEffect(() => {
    getRecipes(search).then((data) => setRecipes(data));
  }, [search]);

  return (
    <>
      <View style={Style.searchView}>
        <TextInput
          placeholder="Pesquisar Receitas"
          style={Style.searchInput}
          onChangeText={(newSearch) => setSearchText(newSearch)}
          defaultValue={search}
          onEndEditing={() => searchRecipe()}
        />
      </View>
      <ScrollView>
        {recipes.length == null ? (
          <Text>Nenhum resultado encontrado.</Text>
        ) : (
          <Text>{recipes.length} Resultados Encontrados</Text>
        )}
        {recipes.length == null ? (
          <Text>Error</Text>
        ) : (
          recipes.map((recipe) => (
            <RecipeList key={recipe.id} recipe={recipe} />
          )))
        }
      </ScrollView>
    </>
  );
};

export default Search;
