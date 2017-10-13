import React, { PropTypes } from 'react'
import { View } from 'react-native'
import { ListItem, Text } from 'native-base'

import * as colors from '../../constants/colors'

const styles = {
  component: {
    marginBottom: 10,
    backgroundColor: colors.white
  },
  CardItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3
  },
  listItemText: {
    fontSize: 12,
    alignSelf: 'stretch',
    color: colors.grey900
  },
  cardItemHeaderText: {
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'stretch',
    color: colors.grey600
  },
  cardItemBodyButton: {
    borderWidth: 1,
    borderColor: colors.grey900,
    padding: 1,
    paddingHorizontal: 6,
    borderRadius: 6,
    fontSize: 12,
    color: colors.grey900
  },
  cardItemBodyRedText: {
    fontSize: 12,
    alignSelf: 'stretch',
    color: colors.red500
  }
}

const ClientInvestmentRatioTable = ({investments}) => {
  return (
    <View style={Object.assign({}, styles.component)}>
      <ListItem style={styles.CardItem}>
        <View>
          <Text style={styles.cardItemHeaderText}>产品类型</Text>
        </View>
        <View>
          <Text style={styles.cardItemHeaderText}>在投</Text>
        </View>
        <View>
          <Text style={styles.cardItemHeaderText}>盈亏</Text>
        </View>
        <View>
          <Text style={styles.cardItemHeaderText}>收益率</Text>
        </View>
      </ListItem>
      {investments.length > 0 && investments.map((investment) =>
        <ListItem style={styles.CardItem} key={investment.id}>
          <View>
            <Text style={styles.listItemText}>{investment.title}</Text>
          </View>
          <View>
            <Text style={styles.listItemText}>{investment.amount}</Text>
          </View>
          <View>
            <Text
              style={investment.avail >= 0 ? styles.cardItemBodyRedText : styles.listItemText}>{investment.avail}</Text>
          </View>
          <View>
            <Text style={styles.cardItemBodyButton}>{investment.interestRate}%</Text>
          </View>
        </ListItem>
      )
      }
    </View>
  )
}
ClientInvestmentRatioTable.propTypes = {
  investments: PropTypes.array.isRequired
}
export default ClientInvestmentRatioTable
