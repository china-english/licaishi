import React, { PropTypes } from 'react'
import { View } from 'react-native'
import { Text } from 'native-base'

const styles = {
  weekIndicators: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    paddingVertical: 8
  },
  text: {
    fontSize: 13
  }
}

const WeekIndicators = () => {
  return (
    <View style={styles.weekIndicators}>
      <Text style={styles.text}>日</Text>
      <Text style={styles.text}>一</Text>
      <Text style={styles.text}>二</Text>
      <Text style={styles.text}>三</Text>
      <Text style={styles.text}>四</Text>
      <Text style={styles.text}>五</Text>
      <Text style={styles.text}>六</Text>
    </View>
  )
}

WeekIndicators.propTypes = {}

export default WeekIndicators
