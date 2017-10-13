import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import * as colors from '../../../constants/colors'
import commonStyles from '../../common/commonStyles'
import {amountConverted} from '../../../constants/numbers'

import ProductNameLine from './ProductNameLine'
import CommissionsCell from './ProductLineCommissionCell'
import ProductLineDetailCell from './ProductLineDetailCell'
import ProductLineButtonCell from './ProductLineButtonCell'

const screenWidth = Dimensions.get('window').width
const styles = {
  productLine: {
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 20,
    backgroundColor: colors.white
  },
  introductionLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ratioNumberTextPercentage: {
    fontSize: 10
  },

  buttonCell: {
    display: 'flex',
    flex: 1
  }
}

const ProductLine = ({product}) => {
  return (
    <View style={Object.assign({}, styles.productLine, commonStyles.componentSeparator)}>
      <ProductNameLine product={product} />
      <View style={styles.introductionLine}>
        <TouchableOpacity
          onPress={() => Actions.productIntroduction({productId: product.productId})}
          style={{flexDirection: 'row', width: screenWidth * 7 / 12, justifyContent: 'space-between'}}>
          <CommissionsCell commisionRate={product.commisionRate * 100} />
          <ProductLineDetailCell
            yearlyNumber={product.preYearProfit * 100}
            bookingStatus={product.bookingStatus}
            investmentLimit={product.investmentLimit}
            percentagePurchased={product.passBooking / product.issuanceScale * 100}
            amountRemaining={(product.issuanceScale - product.passBooking) / amountConverted}
        />
        </TouchableOpacity>
        <ProductLineButtonCell product={product} />

      </View>
    </View>
  )
}

export default ProductLine
