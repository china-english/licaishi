import React, { PropTypes } from 'react'
import { View } from 'react-native'

import * as colors from '../../../constants/colors'

import { Text } from 'native-base'

const styles = {
  detailCell: {
    height: 66,
    display: 'flex',
    flex: 0,
    flexBasis: 140,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  firstLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  secondLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  yearlyNumber: {
    fontSize: 18
  },
  firstLineLabel: {
    fontSize: 12,
    color: colors.grey500
  },
  investmentLimit: {
    fontSize: 14,
    color: colors.black
  },
  investmentLabel: {
    fontSize: 12,
    color: colors.grey300
  },
  percentageLine: {
    height: 2,
    backgroundColor: colors.grey500,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  percentageActiveLine: {
    height: 2,
    backgroundColor: colors.orange500
  },
  percentagePurchased: {
    color: colors.orange500
  },
  amountRemaining: {
    fontSize: 12,
    color: colors.black
  },
  amountZero: {
    color: colors.black
  }
}

const ProductLineDetailCell = ({
    yearlyNumber, bookingStatus,
    investmentLimit,
    percentagePurchased, amountRemaining
  }) => {
  return (
    <View style={styles.detailCell}>
      <View style={styles.firstLine}>
        <View>
          <Text style={styles.yearlyNumber}>{yearlyNumber}%</Text>
          <Text style={styles.firstLineLabel}>预期年化</Text>
        </View>
        <View>
          <Text style={styles.investmentLimit}>{investmentLimit}个月</Text>
          <Text style={styles.firstLineLabel}>投资期限</Text>
        </View>
      </View>
      <View style={styles.percentageLine}>
        <View style={Object.assign(
          {}, styles.percentageActiveLine, {width: percentagePurchased * 1.4}
        )} />
      </View>
      <View style={styles.firstLine}>
        <Text style={styles.percentagePurchased}>{percentagePurchased}%</Text>
        {bookingStatus === 1
          ? <Text style={styles.amountRemaining}>剩余{amountRemaining}万</Text>
          : <Text style={styles.amountZero}>已结束</Text>}
      </View>
    </View>
  )
}

ProductLineDetailCell.propTypes = {
  bookingStatus: PropTypes.number.isRequired,
  yearlyNumber: PropTypes.number.isRequired,
  investmentLimit: PropTypes.number.isRequired,
  percentagePurchased: PropTypes.number.isRequired,
  amountRemaining: PropTypes.number.isRequired
}

export default ProductLineDetailCell
