// @flow
import React from 'react'
import { View, TouchableOpacity, FlatList } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { Content, Spinner, Text } from 'native-base'
import { Row, Col } from 'react-native-easy-grid'
import * as clientsActions from '../../actions/clientsActions'

import * as colors from '../../constants/colors'
import ClientInfoCard from './ClientInfoCard'
import { convertMoneyToString } from '../../businessLogic/utils'
import { onEndReachedThreshold } from '../../constants/numbers'

const styles = {
  container: {
    backgroundColor: colors.grey200
  },
  label: {
    fontSize: 12,
    marginRight: 8,
    marginTop: 1,
    color: colors.grey500
  },
  achievementMiniInfoCell: {
    paddingTop: 5
  },
  achievementInfoText: {
    fontSize: 13,
    color: colors.grey700
  },
  verticalLineMini: {
    marginTop: 8,
    marginBottom: 8,
    height: 16,
    borderColor: colors.grey200,
    borderWidth: 0.5
  },
  flexCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4
  },
  personInfoSubCard: {
    backgroundColor: colors.white,
    marginTop: 1
  }
}

const ClientItem = (props: { item: Object }) => {
  const client = props.item.item
  return (
    <TouchableOpacity key={client.customerId}
      onPress={() => Actions.clientDetail({clientId: client.customerId})}>
      <ClientInfoCard client={client} />
      <Row style={styles.personInfoSubCard}>
        <Col style={Object.assign({}, styles.achievementMiniInfoCell, styles.flexCenter)}>
          <Text style={styles.label}>在投金额</Text>
          <Text style={styles.achievementInfoText}>{convertMoneyToString(client.investmentAmount)}</Text>
        </Col>
        <Col style={{width: 1}}>
          <View style={styles.verticalLineMini} />
        </Col>
        <Col style={Object.assign({}, styles.achievementMiniInfoCell, styles.flexCenter)}>
          <Text style={styles.label}>近期到期时间</Text>
          <Text
            style={styles.achievementInfoText}>{client.lastEndTime.substring(0, 10)}</Text>
        </Col>
      </Row>
    </TouchableOpacity>
  )
}
class ClientsList extends React.Component {
  props: { clients: Array<Object> }

  state = {
    isLoading: true,
    isRefreshing: false,
    isFetchingMore: false
  }

  async componentDidMount () {
    const {pageNumber, clientsActions} = this.props
    try {
      const clients = await clientsActions.loadClients(pageNumber + 1)
      this.setState({isLoading: false})
    } catch (error) {
      console.log(error)
    }
  }

  _onRefresh = async () => {
    const {clientsActions} = this.props
    this.setState({isRefreshing: true})
    await clientsActions.loadClients(1, '')
    this.setState({isRefreshing: false})
  }

  _onEndReached = async () => {
    const {pageNumber, clientsActions} = this.props
    if (!this.state.isFetchingMore) {
      this.setState({isFetchingMore: true})
      await clientsActions.loadClients(pageNumber + 1, '')
      this.setState({isFetchingMore: false})
    }
  }

  render () {
    const {clients} = this.props
    const clientsWithKeys = clients.map(client => Object.assign({}, client, {
      key: client.customerId
    }))
    if (this.state.isLoading) {
      return (
        <Content>
          <Spinner color='blue' />
        </Content>
      )
    }
    return (
      <FlatList
        key={'clientsList'}
        data={clientsWithKeys}
        refreshing={this.state.isRefreshing}
        onEndReached={this._onEndReached}
        onEndReachedThreshold={onEndReachedThreshold}
        onRefresh={this._onRefresh}
        renderItem={(item) => <ClientItem item={item} />}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients,
    pageNumber: state.clients.pageNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clientsActions: bindActionCreators(clientsActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClientsList)
