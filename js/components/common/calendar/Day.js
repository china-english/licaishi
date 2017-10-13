import React, { PropTypes } from 'react'
import { View, TouchableOpacity, Dimensions } from 'react-native'
import { Text } from 'native-base'
import { Actions } from 'react-native-router-flux'
import * as colors from '../../../constants/colors'

const diameter = 36
const radius = 18
const activeColor = colors.orange300

const styles = {
  day: {
    height: diameter,
    width: diameter,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 2
  },
  activitiesExistStyle: {
    color: colors.orange300
  },
  selectedDay: {
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: radius,
    borderWidth: 1,
    borderColor: activeColor,
    backgroundColor: activeColor
  },
  activitiesText: {
    fontSize: 9
  },
  dateText: {
    fontSize: 13
  },
  selectedText: {
    fontWeight: 'bold',
    color: 'white'
  }
}

const Day = ({date, activitiesText, selected}) => {
  // const {width} = Dimensions.get('window')
  // console.log(width)
  return (
    <TouchableOpacity onPress={() => Actions.agendas()}
      style={selected ? Object.assign({}, styles.day, styles.selectedDay) : styles.day}>
      {date && <Text
        style={selected ? Object.assign({}, styles.dateText, styles.selectedText)
          : activitiesText && activitiesText.length > 0
                 ? Object.assign({}, styles.dateText, styles.activitiesExistStyle)
                 : styles.dateText}>{date}</Text>}
      {activitiesText && activitiesText.length > 0 && <Text
        style={selected ? Object.assign({}, styles.activitiesText, styles.selectedText)
          : Object.assign({}, styles.activitiesText, styles.activitiesExistStyle)}>{activitiesText}
      </Text>}
    </TouchableOpacity>
  )
}

Day.propTypes = {
  date: PropTypes.number,
  activitiesText: PropTypes.string,
  selected: PropTypes.bool
}

export default Day
