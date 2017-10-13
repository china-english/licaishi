import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

// import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  Container,
  Header,
  Content,
  Button,
  Spinner,
  Item,
  Left,
  Right,
  Input,
  Icon
} from 'native-base'

import * as clientsActions from '../../actions/clientsActions'

import FooterTabs from '../common/FooterTabs'
import ClientsTabs from './ClientsTabs'
import * as colors from '../../constants/colors'
import commonStyles from '../common/commonStyles'

const styles = {
  searchBarInput: {
    fontSize: 12,
    textAlign: 'center'
  },
  searchBarItem: {
    backgroundColor: colors.grey500,
    marginTop: 4,
    marginLeft: 16,
    marginRight: 4,
    borderRadius: 3
  },
  searchIcon: {
    justifyContent: 'center',
    marginTop: 4,
    marginLeft: 4,
    color: colors.grey300
  }
}

const users = [
  {
    id: '1',
    name: '程英杭',
    createdAt: '2017-3-31',
    endTime: '2017-4-31',
    province: '浙江',
    city: '杭州',
    amount: '1823000.00',
    money: '186900.00',
    type: '稳健型',
    safe: true,
    credit: true,
    phone: '13733913401'
  },
  {
    id: '2',
    name: '程英杭',
    createdAt: '2017-3-31',
    endTime: '2017-4-31',
    province: '浙江',
    city: '杭州',
    amount: '1823000.00',
    money: '186900.00',
    type: '稳健型',
    safe: true,
    credit: true,
    phone: '13733913401'
  },
  {
    id: '3',
    name: '程英杭',
    createdAt: '2017-3-31',
    endTime: '2017-4-31',
    province: '浙江',
    city: '杭州',
    amount: '1823000.00',
    money: '186900.00',
    type: '稳健型',
    safe: true,
    credit: true,
    phone: '13733913401'
  },
  {
    id: '6',
    name: '程英杭',
    createdAt: '2017-3-31',
    endTime: '2017-4-31',
    province: '浙江',
    city: '杭州',
    amount: '1823000.00',
    money: '186900.00',
    type: '稳健型',
    safe: true,
    credit: true,
    phone: '13733913401'
  },
  {
    id: '4',
    name: '程英杭',
    createdAt: '2017-3-31',
    endTime: '2017-4-31',
    province: '浙江',
    city: '杭州',
    amount: '1823000.00',
    money: '186900.00',
    type: '稳健型',
    safe: true,
    credit: true,
    phone: '13733913401'
  },
  {
    id: '5',
    name: '程英杭',
    createdAt: '2017-3-31',
    endTime: '2017-4-31',
    province: '浙江',
    city: '杭州',
    amount: '1823000.00',
    money: '186900.00',
    type: '稳健型',
    safe: true,
    credit: true,
    phone: '13733913401'
  }
]

class ClientsScene extends Component {
  props: {
    clients: Array,
    clientsActions: Object
  }

  async componentWillMount () {
    const {clientsActions} = this.props
    await clientsActions.initClients()
  }

  render () {
    const {clients} = this.props
    console.log(clients)

    return (
      <Container style={commonStyles.backgroundGrey}>
        <Header searchBar rounded style={commonStyles.header}
          iosBarStyle='light-content'
          androidStatusBarColor={colors.statusBarColor}>
          <Left style={{flex: 0}}>
            <Button transparent onPress={() => { Actions.clientCreate() }}>
              <Icon active name='person-add' style={commonStyles.white} />
            </Button>
          </Left>
          <Item style={styles.searchBarItem}>
            <Icon name='search' style={styles.searchIcon} />
            <Input placeholder='请输入客户名称'
              placeholderTextColor={colors.white}
              style={styles.searchBarInput}
            />
          </Item>
          <Right style={{flex: 0}}>
            <Button transparent onPress={() => {}}>
              <Icon name='mail' style={commonStyles.white} />
            </Button>
          </Right>
        </Header>
        <ClientsTabs clients={clients} />
        <FooterTabs activeTab='clients' />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clientsActions: bindActionCreators(clientsActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClientsScene)
