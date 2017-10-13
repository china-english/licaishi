import React, { PropTypes } from 'react'
import { View } from 'react-native'
import { ListItem, Text } from 'native-base'
import { Row, Col } from 'react-native-easy-grid'

import * as colors from '../../constants/colors'
import commonStyles from '../common/commonStyles'

const styles = {
  component: {
    flex: 1,
    backgroundColor: colors.white
  },
  listItemText: {
    fontSize: 14,
    color: colors.grey800
  },
  cardTitle: {
    fontSize: 14,
    marginBottom: 4
  },
  subTitle: {
    fontSize: 12,
    color: colors.grey600,
    textAlign: 'center'
  },
  cardValueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.grey900,
    textAlign: 'center'
  },
  cardValueView: {
    margin: 4
  }
}

const ClientTradingRecordCard = ({tradingRecord}) => {
  return (
    <View style={Object.assign({}, commonStyles.componentSeparator, styles.component)}>
      <ListItem>
        <Text style={styles.listItemText}>{tradingRecord.date} {tradingRecord.time}</Text>
      </ListItem>
      <ListItem>
        <Row>
          <Col size={3}>
            <Row>
              <Text style={styles.cardTitle}>{tradingRecord.title}</Text>
            </Row>
            <Row>
              <Col size={1} style={styles.cardValueView}>
                <View>
                  <Row>
                    <Text style={styles.cardValueText}>{tradingRecord.amount}万</Text>
                  </Row>
                  <Row>
                    <Text style={styles.subTitle}>投资金额</Text>
                  </Row>
                </View>
              </Col>
              <Col size={1}>
                <View>
                  <Row>
                    <Text style={styles.cardValueText}>{tradingRecord.value}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.subTitle}>净值</Text>
                  </Row>
                </View>
              </Col>
            </Row>
          </Col>
          <Col size={1} />
        </Row>
      </ListItem>
    </View>
  )
}
ClientTradingRecordCard.propTypes = {
  tradingRecord: PropTypes.object.isRequired
}
export default ClientTradingRecordCard
