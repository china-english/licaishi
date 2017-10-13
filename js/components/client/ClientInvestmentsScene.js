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
import ClientInvestmentCard from './ClientInvestmentCard'

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
    date: '2017-02-04',
    time: '13:32',
    title: '慧投添益8号66期',
    amount: '100',
    value: '1.0000',
    start: '2018-05-14',
    end: '2018-06-14'
  },
  {
    id: '2',
    date: '2017-02-04',
    time: '13:32',
    title: '慧投添益8号66期',
    amount: '100',
    value: '1.0000',
    start: '2018-05-14',
    end: '2018-06-14'
  },
  {
    id: '3',
    date: '2017-02-04',
    time: '13:32',
    title: '慧投添益8号66期',
    amount: '100',
    value: '1.0000',
    end: '2018-06-14'
  },
  {
    id: '4',
    date: '2017-02-04',
    time: '13:32',
    title: '慧投添益8号66期',
    amount: '100',
    value: '1.0000',
    end: '2018-06-14'
  }
]
class ClientInvestmentsScene extends Component {
  render () {
    return (
      <Container theme={theme} style={commonStyles.backgroundGrey}>
        <Header style={commonStyles.header}
          iosBarStyle={colors.iosBarColor}
          androidStatusBarColor={colors.statusBarColor}>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='arrow-back' size={30} style={commonStyles.white} />
            </Button>
          </Left>
          <Body>
          <Title style={commonStyles.white}>在投资产</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {investments.length > 0 && investments.map((investment) =>
            <ClientInvestmentCard investment={investment} key={investment.id} />
          )
          }
        </Content>
      </Container>
    )
  }
}

ClientInvestmentsScene.propTypes = {
  investments: PropTypes.array
}

export default ClientInvestmentsScene
