import React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'
import * as colors from '../../../constants/colors'
import { convertMoneyToString } from '../../../businessLogic/utils'

const styles = {
  buttonCell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: colors.white
  },
  button: {
    borderRadius: 12,
    alignSelf: 'flex-end'
  },
  minSubBalance: {
    paddingTop: 8,
    fontSize: 15
  }
}

const ProductLineButtonCell = ({product}) => {
  return (
    <View style={styles.buttonCell}>
      <Button small outline warning bordered style={styles.button} onPress={() => Actions.productAppointment({productId: product.productId})}>
        <Text>预约</Text>
      </Button>
      <Text style={styles.minSubBalance}>{product.minSubBalance ? convertMoneyToString(product.minSubBalance) : null}起投</Text>

    </View>
  )
}

export default ProductLineButtonCell
