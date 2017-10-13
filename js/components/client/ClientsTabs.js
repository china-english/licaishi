// @flow
import React, { Component } from 'react'
import { Tab, Tabs } from 'native-base'

import * as colors from '../../constants/colors'
import ClientsList from './ClientsList'

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

class ClientsTabs extends Component {
  props: {
    clients: Array<Object>
  }

  render () {
    const {clients} = this.props
    return (
      <Tabs tabBarUnderlineStyle={styles.tabBarUnderline}>
        <Tab heading='全部'
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}>
          <ClientsList clients={clients} />
        </Tab>
        <Tab heading='已投资'
          activeTextStyle={styles.activeTextStyle}
          textStyle={styles.textStyle}>
          <ClientsList clients={clients} />
        </Tab>
        <Tab heading='未投资'
          activeTextStyle={styles.activeTextStyle}
          textStyle={styles.textStyle}>
          <ClientsList clients={clients} />
        </Tab>
        <Tab heading='潜在会员'
          activeTextStyle={styles.activeTextStyle}
          textStyle={styles.textStyle}>
          <ClientsList clients={clients} />
        </Tab>
      </Tabs>
    )
  }
}

export default ClientsTabs
