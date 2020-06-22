import * as React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const CustomButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={{...styles.btn, ...props.style}}>
      <Text style={{...styles.btnText, ...props.textStyling}}>
        {props.children}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    padding: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orangered',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
});

export default CustomButton;
