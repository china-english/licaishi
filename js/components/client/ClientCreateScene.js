import React, { Component, PropTypes } from 'react'
import { Actions } from 'react-native-router-flux'
import {
  Container,
  Header,
  Title,
  Content,
  Tabs,
  Tab,
  Button,
  Left,
  Body,
  Right,
  Icon
} from 'native-base'

import theme from '../../themes/base-theme'
import * as colors from '../../constants/colors'
import commonStyles from '../common/commonStyles'
import PrivateClientEditTab from './PrivateClientEditTab'
import PublicClientEditTab from './PublicClientEditTab'

const styles = {
  activeTextStyle: {
    fontSize: 12,
    color: colors.deepOrange400
  },
  textStyle: {
    color: colors.grey500,
    fontSize: 12
  },
  tabBarUnderline: {
    backgroundColor: colors.deepOrange400
  }
}

class ClientCreateScene extends Component {
  render () {
    return (
      <Container>
        <Header style={commonStyles.header}
          iosBarStyle={colors.iosBarColor}
          androidStatusBarColor={colors.statusBarColor}>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='arrow-back' style={commonStyles.white} />
            </Button>
          </Left>
          <Body>
          <Title style={commonStyles.white}>添加客户</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={styles.tabBarUnderline}>
          <Tab heading='个人客户'
            style={commonStyles.backgroundGrey}
            textStyle={styles.textStyle}
            activeTextStyle={styles.activeTextStyle}>
            <PrivateClientEditTab />
          </Tab>
          <Tab heading='机构客户'
            style={commonStyles.backgroundGrey}
            activeTextStyle={styles.activeTextStyle}
            textStyle={styles.textStyle}>
            <PublicClientEditTab />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

ClientCreateScene.propTypes = {
  user: PropTypes.object
}

export default ClientCreateScene
