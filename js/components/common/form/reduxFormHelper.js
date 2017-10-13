import React from 'react'
import { Icon, Input, Item, Label, Right, Text } from 'native-base'
import PickerForm from './Picker'
import DateTimePicker from './DateTimePicker'

export const renderInput = ({label, input: {onChange, ...restInput}, meta: {touched, error}, style, optional}) => {
  return (
    <Item inlineLabel last stye={style.item} error={touched && error}>
      <Label style={style.label}>{label}</Label>
      {optional &&
       <Text style={style.subtitle}>(选填)</Text>
      }
      <Input onChangeText={onChange} {...restInput} />
      {(error && touched) &&
       <Icon name='close-circle' />
      }
    </Item>)
}
export const renderMultiInput = ({label, input: {onChange, ...restInput}, meta: {touched, error}, style, optional}) => {
  return (
    <Item inlineLabel last stye={style.item} error={touched && error}>
      <Label style={style.label}>{label}</Label>
      {optional &&
       <Text style={style.subtitle}>(选填)</Text>
      }
      <Input onChangeText={onChange} {...restInput} multiline style={style.multiInput} />
      {(error && touched) &&
       <Icon name='close-circle' />
      }
    </Item>)
}
export const renderNumber = ({label, input: {onChange, ...restInput}, meta: {touched, error}, style, optional}) => {
  return (
    <Item inlineLabel last stye={style.item} error={touched && error}>
      <Label style={style.label}>{label}</Label>
      {optional &&
       <Text style={style.subtitle}>(选填)</Text>
      }
      <Input onChangeText={onChange} {...restInput} keyboardType="numeric" />
      {(error && touched) &&
       <Icon name='close-circle' />
      }
    </Item>)
}
export const renderPassword = ({label, input: {onChange, ...restInput}, meta: {touched, error}, style}) => {
  return (
    <Item inlineLabel last style={style.item} error={touched || error}>
      <Label style={style.label}>{label}</Label>
      <Input onChangeText={onChange} secureTextEntry {...restInput} style={style.input} />
    </Item>)
}

export const renderSelect = ({options, label, input: {onChange, ...restInput}, meta: {touched, error}, style}) => {
  return (
    <Item inlineLabel last error={touched && error}>
      <Label style={style.label}>{label}</Label>
      <Right>
        <PickerForm
          iosHeader={label}
          onChange={onChange}
          textStyle={style.text}
          options={options}
        />
      </Right>
    </Item>)
}
export const renderDatePicker = ({options, label, input: {onChange, ...restInput}, meta: {touched, error}, style}) => {
  return (
    <Item inlineLabel last error={touched && error}>
      <Label style={style.label}>{label}</Label>
      <Right>
        <DateTimePicker
          mode='date'
          titleIOS={label}
          onChange={onChange}
          textStyle={style.text}
          options={options}
        />
      </Right>
    </Item>)
}

export const renderTimePicker = ({options, label, input: {onChange, ...restInput}, meta: {touched, error}, style}) => {
  return (
    <Item inlineLabel last error={touched && error}>
      <Label style={style.label}>{label}</Label>
      <Right>
        <DateTimePicker
          mode='time'
          titleIOS={label}
          onChange={onChange}
          textStyle={style.text}
          options={options}
        />
      </Right>
    </Item>)
}
