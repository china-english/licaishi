import React, { PropTypes } from 'react'
import { View } from 'react-native'

import { Text } from 'native-base'

import { productType } from '../../../constants/optionsValues'
import * as colors from '../../../constants/colors'
import { optionsArrayToObject } from '../../../businessLogic/utils'

const styles = {
  productNameLine: {
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  productLabelForStock: {
    width: 42,
    borderRadius: 8,
    backgroundColor: colors.orange300,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  productLabelForMarket: {
    width: 55,
    borderRadius: 8,
    backgroundColor: colors.orange900,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  productLabelForFixed: {
    width: 42,
    borderRadius: 8,
    backgroundColor: colors.blue600,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  productLabelText: {
    color: colors.white,
    fontSize: 10
  },
  productName: {
    paddingLeft: 8,
    fontSize: 14
  }
}

const ProductNameLine = ({product}) => {
  return (
    <View style={styles.productNameLine}>
      <View style={product.productType === 'equity' || product.productType === 'fixed_income'
        ? (product.productType === 'equity' ? styles.productLabelForStock : styles.productLabelForFixed)
        : styles.productLabelForMarket}>
        <Text
          style={styles.productLabelText}>{optionsArrayToObject(productType)[product.productType]}</Text>
      </View>
      <Text style={styles.productName}>
        {product.productName}
      </Text>
    </View>
  )
}
export default ProductNameLine
