import React, {useState} from 'react';
import {StatusBar, View, Text, ImageBackground, TextInput} from 'react-native';
import {Style} from '../styles';
import {CustomButton} from '../components';

const Main = ({navigation}) => {
  const [search, setSearch] = useState('');
  const searchRecipe = () => navigation.navigate('Search', {search: search});

  return (
    <>
      <ImageBackground
        style={Style.mainBg}
        source={require('../assets/bg.png')}>
        <View style={Style.outerBg}>
          <View style={Style.topView}>
            <Text style={Style.AppLogo}>Comilandia</Text>
          </View>
          <View style={Style.bottomView}>
            <View style={Style.searchRecipes}>
              <TextInput
                placeholder="Pesquisar Receitas"
                style={Style.textInput}
                onChangeText={(newSearch) => setSearch(newSearch)}
                defaultValue={search}
                onEndEditing={() => searchRecipe()}
              />
              <CustomButton
                style={Style.btnInput}
                onPress={() => searchRecipe()}>
                Pesquisar
              </CustomButton>
            </View>
            <View>
              <CustomButton style={Style.savedRecipes}>
                Receitas Salvas
              </CustomButton>
            </View>
            <View>
              <CustomButton style={Style.newRecipes}>Novas Receitas</CustomButton>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Main;
