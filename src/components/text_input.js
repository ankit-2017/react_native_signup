import React from 'react';
import {TextInput, Text, View} from 'react-native';
import {Item, Input, Label, Icon, Right} from 'native-base';


export const renderInput = ({input, label, icon, type, meta: { touched, error, warning }}) => (
  <View>
    
    <Item floatingLabel>
    <Label>{label}</Label>
      <Input {...input} type={type} />
      <Icon name={icon} />
    </Item>
    {touched &&
        (error && <Text>{error}</Text>) }

  </View>
)
