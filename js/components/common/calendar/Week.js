import React, { PropTypes } from 'react'
import { View } from 'react-native'
import { Text } from 'native-base'
import Day from './Day'
import calenderHelper from '../../../businessLogic/calendarHelper'

import * as numbers from '../../../constants/numbers'

const styles = {
  week: {
    height: numbers.calendarWeekHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20
  },
  text: {
    fontSize: 13
  }
}

const Week = ({startDate, startPosition, length, current, year, month}) => {
  const currentYear = calenderHelper.getCurrentYear()
  const currentMonth = calenderHelper.getCurrentMonth()
  const days = []
  let dayIndex = 0
  while (dayIndex < startPosition) {
    days.push(<Day />)
    dayIndex += 1
  }
  let index = 0
  while (index < length) {
    const text = index % 2 === 0 ? '活动' : ' '
    const day = <Day date={startDate + index} activitiesText={text}
      selected={startDate + index === current && year === currentYear && month === currentMonth} />
    // const day = <Day date={startDate + index} activitiesText='活动' selected={index === 1} />
    days.push(day)
    index += 1
  }
  let left = 7 - startPosition - length
  while (left > 0) {
    days.push(<Day />)
    left -= 1
  }
  return (
    <View style={styles.week}>
      {days[0]}
      {days[1]}
      {days[2]}
      {days[3]}
      {days[4]}
      {days[5]}
      {days[6]}
    </View>
  )
}

Week.propTypes = {
  startDate: PropTypes.number.isRequired,
  startPosition: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired
}

export default Week
