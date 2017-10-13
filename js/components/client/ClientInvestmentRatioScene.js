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
import ClientInvestmentRatioChart from './ClientInvestmentRatioChart'
import ClientInvestmentRatioTable from './ClientInvestmentRatioTable'

const styles = {
  component: {
    marginTop: 10,
    flex: 1,
    backgroundColor: colors.white
  }
}

const investments = [
  {
    id: '1',
    title: '类固定',
    amount: '1828000.00',
    interestRate: '3.2',
    avail: '+12000.00'
  },
  {
    id: '2',
    title: '基金',
    amount: '100',
    interestRate: '3.2',
    avail: '0'
  },
  {
    id: '3',
    title: '公募',
    amount: '100',
    interestRate: '3.2',
    avail: '0'
  },
  {
    id: '4',
    title: '私募',
    amount: '100',
    interestRate: '3.2',
    avail: '0'
  },
  {
    id: '5',
    title: '保险',
    amount: '100',
    interestRate: '3.2',
    avail: '-2'
  }
]

class ClientInvestmentRatioScene extends Component {
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
          <Title style={commonStyles.white}>投资比例</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <ClientInvestmentRatioChart investments={investments} />
          <ClientInvestmentRatioTable investments={investments} />
        </Content>
      </Container>
    )
  }
}

ClientInvestmentRatioScene.propTypes = {
  investments: PropTypes.array
}

export default ClientInvestmentRatioScene
