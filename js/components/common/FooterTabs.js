import React, { PropTypes } from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'

const FooterTabs = ({activeTab}) => {
  return (
    <Footer >
      <FooterTab>
        <Button active={activeTab === 'home'} onPress={() => Actions.homeScenes()}>
          <Icon active={activeTab === 'home'} name='home' />
          <Text>首页</Text>
        </Button>
        <Button active={activeTab === 'clients'} onPress={() => Actions.clientsScenes()}>
          <Icon active={activeTab === 'clients'} name='people' />
          <Text>客户</Text>
        </Button>
        <Button active={activeTab === 'products'} onPress={() => Actions.productsScenes()} >
          <Icon active={activeTab === 'products'} name='cube' />
          <Text>产品</Text>
        </Button>
        <Button active={activeTab === 'person'} onPress={() => Actions.personalScenes()}>
          <Icon active={activeTab === 'person'} name='person' />
          <Text>我的</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
}

FooterTabs.propTypes = {
  activeTab: PropTypes.string.isRequired
}

export default FooterTabs
