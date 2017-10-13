import React, { PropTypes } from 'react'
import { View } from 'react-native'

import calendarHelper from '../../../businessLogic/calendarHelper'

import Week from './Week'
import WeekIndicators from './WeekIndicators'

const styles = {
  month: {
    flex: 1
  },
  week: {
    height: 40
  }
}

const Month = ({year, month, agendas, birthdates}) => {
  const weeksInMonth = []
  const currentDate = calendarHelper.getCurrentDate()
  const daysInMonth = calendarHelper.getDaysInMonth(year, month)
  let date = 1
  while (date <= daysInMonth) {
    const {weekday, length} = calendarHelper.getWeekDataInMonth(year, month, date)
    weeksInMonth.push(
      <View style={styles.week}>
        <Week startDate={date} startPosition={weekday} length={length}
          current={currentDate} year={year} month={month} />
      </View>
    )
    date += length
  }

  return (
    <View style={styles.month}>
      <WeekIndicators />
      {weeksInMonth}
    </View>
  )
}

Month.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  agendas: PropTypes.array.isRequired,
  birthdates: PropTypes.array.isRequired
}

export default Month
