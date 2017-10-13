import React, { PropTypes } from 'react'
import { View } from 'react-native'
import { ListItem, Text, Button } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'

import * as colors from '../../constants/colors'
import commonStyles from '../common/commonStyles'

const styles = {
  component: {
    flex: 1,
    backgroundColor: colors.white
  },
  cardFooterView: {
    padding: 0,
    flex: 1,
    justifyContent: 'flex-end'
  },
  cardFooterText: {
    margin: 0,
    padding: 0,
    fontSize: 12,
    color: colors.grey600
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
  },
  cardRightButton: {
    margin: 4
  }
}

const ClientInvestmentCard = ({investment}) => {
  return (
    <View style={Object.assign({}, commonStyles.componentSeparator,styles.component)}>
      <ListItem>
        <Text style={styles.listItemText}>{investment.date} {investment.time}</Text>
      </ListItem>
      <ListItem>
        <Grid>
          <Row>
            <Col size={3}>
              <Row>
                <Text style={styles.cardTitle}>{investment.title}</Text>
              </Row>
              <Row>
                <Col size={1} style={styles.cardValueView}>
                  <View>
                    <Row>
                      <Text style={styles.cardValueText}>{investment.amount}万</Text>
                    </Row>
                    <Row>
                      <Text style={styles.subTitle}>投资金额</Text>
                    </Row>
                  </View>
                </Col>
                <Col size={1}>
                  <View>
                    <Row>
                      <Text style={styles.cardValueText}>{investment.value}</Text>
                    </Row>
                    <Row>
                      <Text style={styles.subTitle}>净值</Text>
                    </Row>
                  </View>
                </Col>
              </Row>
            </Col>

            <Col size={1}>
              {investment.start &&
              <View>
                <Button small bordered style={styles.cardRightButton}><Text>赎回</Text></Button>
                <Button small bordered style={styles.cardRightButton}><Text>申购</Text></Button>
              </View>
              }
            </Col>
          </Row>
        </Grid>
      </ListItem>
      <ListItem style={styles.cardFooterView}>
        {investment.start
          ? <Text style={styles.cardFooterText}>开放期 {investment.start} 至 {investment.end}</Text>
          : <Text style={styles.cardFooterText}>到期时间 {investment.end}</Text>
        }
      </ListItem>
    </View>
  )
}
ClientInvestmentCard.propTypes = {
  investment: PropTypes.object.isRequired
}
export default ClientInvestmentCard
