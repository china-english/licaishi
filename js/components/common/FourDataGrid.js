import React, { PropTypes } from 'react'
import { View } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'

import * as colors from '../../constants/colors'
import FourDataGridCell from './FourDataGridCell'

const styles = {
  infoCell: {
    paddingTop: 5,
    height: 55
  },
  infoCellBorder: {
    borderColor: colors.grey200,
    borderBottomWidth: 1
  },
  verticalLine: {
    marginTop: 8,
    height: 40,
    borderColor: colors.grey200,
    borderWidth: 0.5
  }
}

const FourDataGrid = ({data, gridData, type}) => {
  return (
    <Grid>
      <Col>
        <Row style={Object.assign({}, styles.infoCell, styles.infoCellBorder)}>
          <FourDataGridCell iconName={gridData[0]['iconName']} infoText={gridData[0]['infoText']}
            infoNumber={type ? data.totalCustomerNum : data.newCustomer} />
        </Row>
        <Row style={styles.infoCell}>
          <FourDataGridCell iconName={gridData[1]['iconName']} infoText={gridData[1]['infoText']}
            infoNumber={type ? data.annualCommission : data.redeemCustomer} />
        </Row>
      </Col>
      <Col style={{width: 1}}>
        <Row>
          <View style={styles.verticalLine} />
        </Row>
        <Row>
          <View style={styles.verticalLine} />
        </Row>
      </Col>
      <Col>
        <Row
          style={Object.assign({}, styles.infoCell, styles.infoCellBorder)}>
          <FourDataGridCell iconName={gridData[2]['iconName']} infoText={gridData[2]['infoText']}
            infoNumber={type ? data.totalInvestBanalce : data.tradeBlance} />
        </Row>
        <Row style={styles.infoCell}>
          <FourDataGridCell iconName={gridData[3]['iconName']} infoText={gridData[3]['infoText']}
            infoNumber={type ? data.annualFinishedInvest : data.redeemBlance} />
        </Row>
      </Col>
    </Grid>
  )
}

export default FourDataGrid
