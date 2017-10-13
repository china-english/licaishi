import React, { PropTypes } from 'react'
import { View } from 'react-native'
import { Text, Button, Icon } from 'native-base'

import calendarHelper from '../../../businessLogic/calendarHelper'

import Month from './Month'
import * as colors from '../../../constants/colors'
import commonStyles from '../../common/commonStyles'

const styles = {
  calendar: {
    backgroundColor: colors.white
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    height: 50
  }
}

const CalendarHeader = ({year, month, handlePrev, handleNext}) => {
  return (
    <View style={styles.header}>
      <Button transparent iconRight warning onPress={() => {
        handlePrev()
      }}>
        <Icon name='arrow-back' />
      </Button>

      <Text>{year}年{month + 1}月</Text>

      <Button transparent iconRight warning onPress={handleNext}>
        <Icon name='arrow-forward' />
      </Button>
    </View>
  )
}

class Calendar extends React.Component {
  state = {
    year: calendarHelper.getCurrentYear(),
    month: calendarHelper.getCurrentMonth()
  }

  componentWillMount () {
  }

  handlePrev = () => {
    if (this.state.month === 0) {
      this.setState({year: this.state.year - 1, month: 11})
    } else {
      this.setState({month: this.state.month - 1})
    }
  }

  handleNext = () => {
    if (this.state.month >= 11) {
      this.setState({year: this.state.year + 1, month: 0})
    } else {
      this.setState({month: this.state.month + 1})
    }
  }

  render () {
    const {agendas, birthdates} = this.props
    const {year, month} = this.state
    return (
      <View style={Object.assign({}, styles.calendar, commonStyles.componentSeparator)}>
        <CalendarHeader year={year} month={month}
          handlePrev={this.handlePrev} handleNext={this.handleNext} />
        <Month year={year} month={month} agendas={[]} birthdates={[]} />
      </View>
    )
  }
}

Calendar.propTypes = {
  agendas: PropTypes.array.isRequired,
  birthdates: PropTypes.array.isRequired
}

export default Calendar
