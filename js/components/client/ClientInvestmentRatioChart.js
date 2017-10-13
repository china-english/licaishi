import React, { PropTypes } from 'react'
import { View } from 'react-native'
import Chart from 'react-native-chart'

import * as colors from '../../constants/colors'

const styles = {
  flexCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  chart: {
    margin: 32,
    width: 200,
    height: 200
  }
}

const ClientInvestmentRatioChart = () => {
  const data = [
    [0, 1],
    [0, 9],
    [0, 9],
    [0, 9]
  ]
  const sliceColors = [
    colors.deepOrange300,
    colors.blue300,
    colors.green300,
    colors.cyan300,
    colors.purple300,
    colors.pink300,
    colors.red300

  ]
  return (
    <View style={styles.flexCenter}>
      <Chart
        style={styles.chart}
        data={data}
        verticalGridStep={10}
        type='pie'
        showDataPoint
        showAxis={false}
        sliceColors={sliceColors}
      />
    </View>
  )
}
ClientInvestmentRatioChart.propTypes = {
  investments: PropTypes.array.isRequired
}
export default ClientInvestmentRatioChart
