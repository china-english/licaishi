import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon, Text, View } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'
import * as colors from '../../../constants/colors'

const styles = {
  touchableOpacity: {
    height: 51,
    display: 'flex',
  },
  text: {
    color: colors.grey800,
    paddingRight: 16,
    marginTop: 12
  },
  icon: {
    color: colors.grey600,
    paddingTop: 12,
    paddingLeft: 100,
    paddingRight: 16

  }
}
export default class DatePicker extends Component {
  state = {
    isDateTimePickerVisible: false,
    dateTime: null
  }

  showDateTimePicker = () => this.setState({isDateTimePickerVisible: true})

  hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false})

  handleDatePicked = date => {
    const onChange = this.props.onChange
    const timestamp = Date.parse(new Date(date))
    onChange(timestamp)
    const newDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    this.setState({dateTime: newDate})
    this.hideDateTimePicker()
  }

  render () {
    const {mode, titleIOS} = this.props
    return (
      <View >
        <TouchableOpacity onPress={this.showDateTimePicker} style={styles.touchableOpacity}>
          {this.state.dateTime ?
           <Text name='arrow-forward' style={styles.text}>{this.state.dateTime}</Text> :
           <Icon name='arrow-forward' style={styles.icon} />
          }
        </TouchableOpacity>
        <DateTimePicker
          cancelTextIOS="取消"
          confirmTextIOS="确定"
          mode={mode}
          titleIOS={titleIOS}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </View>
    )
  }
}