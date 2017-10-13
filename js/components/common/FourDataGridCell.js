import React from 'react'
import { Text } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import * as colors from '../../constants/colors'

const styles = {
  grid: {
    height: 40
  },
  iconCell: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 6
  },
  icon: {
    fontSize: 16,
    color: colors.lightBlue500
  },
  infoText: {
    paddingTop: 2,
    fontSize: 13,
    color: colors.grey600
  },
  infoNumber: {
    paddingBottom: 4,
    fontSize: 13,
    color: colors.grey900
  }
}

const FourDataGridCell = (props: { iconName: string, infoText: string, infoNumber: number }) => {
  const {iconName, infoText, infoNumber} = props
  return (
    <Grid style={styles.grid}>
      <Col size={25}>
        <Row style={styles.iconCell} size={50}>
          <MaterialCommunityIcons name={iconName} style={styles.icon} />
        </Row>
        <Row size={50} />
      </Col>
      <Col size={80}>
        <Row size={50}>
          <Text style={styles.infoText}>{infoText}</Text>
        </Row>
        <Row size={50}>
          <Text style={styles.infoNumber}>{infoNumber}</Text>
        </Row>
      </Col>
    </Grid>
  )
}

export default FourDataGridCell
