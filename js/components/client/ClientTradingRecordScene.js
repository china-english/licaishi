import React, { Component, PropTypes } from 'react'
import { Actions } from 'react-native-router-flux'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Body,
  Right,
  Icon
} from 'native-base'

import theme from '../../themes/base-theme'
import * as colors from '../../constants/colors'
import commonStyles from '../common/commonStyles'
import ClientTradingRecordCard from './ClientTradingRecordCard'

const tradingRecords = [
  {
    id: '1',
    date: '2017-02-04',
    time: '13:32',
    title: '慧投添益8号66期',
    amount: '100',
    value: '1.0000'
  },
  {
    id: '2',
    date: '2017-02-04',
    time: '13:32',
    title: '慧投添益8号66期',
    amount: '100',
    value: '1.0000'
  },
  {
    id: '3',
    date: '2017-02-04',
    time: '13:32',
    title: '慧投添益8号66期',
    amount: '100',
    value: '1.0000'
  },
  {
    id: '4',
    date: '2017-02-04',
    time: '13:32',
    title: '慧投添益8号66期',
    amount: '100',
    value: '1.0000'
  }
]
class ClientTradingRecordScene extends Component {
  render () {
    return (
      <Container theme={theme} style={commonStyles.backgroundGrey}>
        <Header style={commonStyles.header}
          iosBarStyle={colors.iosBarColor}
          androidStatusBarColor={colors.statusBarColor}>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='arrow-back' style={commonStyles.white} />
            </Button>
          </Left>

          <Body>
          <Title style={commonStyles.white}>交易记录</Title>
          </Body>

          <Right />
        </Header>

        <Content>
          {tradingRecords.length > 0 && tradingRecords.map((tradingRecord) =>
            <ClientTradingRecordCard tradingRecord={tradingRecord} key={tradingRecord.id} />
          )
          }
        </Content>
      </Container>
    )
  }
}

ClientTradingRecordScene.propTypes = {
  tradingRecords: PropTypes.array
}
export default ClientTradingRecordScene
