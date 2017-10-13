import React, { Component } from 'react'
import { Icon, Item, Picker } from 'native-base'

class PickerForm extends Component {
  state = {
    selectedItem: false,
    selected1: this.props.options[0].value,
    results: {
      items: []
    }
  }

  onValueChange = (value) => {
    this.setState({
      selectedItem: true,
      selected1: value
    })

    const onChange = this.props.onChange
    onChange(value)
  }

  render () {
    const {options, textStyle, iosHeader} = this.props
    return (
      <Picker
        supportedOrientations={['portrait', 'landscape-right']}
        iosHeader={iosHeader}
        mode="dropdown"
        textStyle={textStyle}
        selectedValue={this.state.selected1}
        onValueChange={this.onValueChange}>
        {options.map(
          (option, index) =>
            <Item label={option.name} value={option.value} key={index} />
        )}

      </Picker>
    )
  }
}

export default PickerForm
