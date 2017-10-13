
import React, { PropTypes } from 'react'
import { View } from 'react-native'

import * as colors from '../../../constants/colors'

import { Text } from 'native-base'

const styles = {
  ratioCell: {
    width: 66,
    height: 66,
    borderRadius: 10,
    backgroundColor: colors.grey300,
    display: 'flex',
    flex: 0,
    flexBasis: 66,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ratioNumber: {
    display: 'flex',
    flex: 7,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  ratioNumberText: {
    color: colors.red500,
    fontSize: 20
  },
  percentageSymbol: {
    color: colors.red500,
    fontSize: 10
  },
  commissionLabel: {
    display: 'flex',
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 66,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.grey400
  },
  commissionLabelText: {
    fontSize: 13,
    color: colors.grey700
  }
}

const CommissionsCell = ({commisionRate}) => {
  return (
    <View style={styles.ratioCell}>
      <View style={styles.ratioNumber}>
        <Text style={styles.ratioNumberText}>{commisionRate}
          <Text style={styles.percentageSymbol}>%</Text>
        </Text>
      </View>
      <View style={styles.commissionLabel}>
        <Text style={styles.commissionLabelText}>返佣率</Text>
      </View>
    </View>
  )
}


export default CommissionsCell
