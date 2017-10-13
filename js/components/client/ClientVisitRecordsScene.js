import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Body,
  Right,
  Icon
} from 'native-base'

import * as clientsActions from '../../actions/clientsActions'

import * as colors from '../../constants/colors'
import commonStyles from '../common/commonStyles'
import ClientVisitCard from './ClientVisitCard'
import { FlatList } from 'react-native'
import { onEndReachedThreshold } from '../../constants/numbers'

class ClientVisitRecordsScene extends Component {
  props: {
    visitRecords: Object[]
  }

  state = {
    isLoading: true,
    isRefreshing: false,
    isFetchingMore: false
  }

  async componentDidMount () {
    const {clientId, clientsActions} = this.props
    try {
      const visitRecords = await clientsActions.loadClientVisitRecords(clientId)
      console.log(visitRecords)
      this.setState({isLoading: false})
    } catch (error) {
      console.log(error)
    }
  }

  _onRefresh = async () => {
    console.log('onRefresh')
    const {clientId, clientsActions} = this.props
    await clientsActions.loadClientVisitRecords(clientId)
  }

  _onEndReached = async () => {
    console.log('onEndReached')
    const {clientId, visitRecordsPageNumber, clientsActions} = this.props
    if (!this.state.isFetchingMore) {
      this.setState({isFetchingMore: true})
      await clientsActions.loadClientVisitRecords(clientId, visitRecordsPageNumber + 1)
      this.setState({isFetchingMore: false})
    }
  }

  render () {
    const {visitRecords} = this.props
    const visitRecordsWithKeys = visitRecords.map(visitRecord => Object.assign({}, visitRecord, {
      key: visitRecord.id
    }))
    console.log(visitRecordsWithKeys)
    return (
      <Container style={commonStyles.backgroundGrey}>
        <Header style={commonStyles.header}
          iosBarStyle='light-content'
          androidStatusBarColor={colors.statusBarColor}>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='arrow-back' style={commonStyles.white} />
            </Button>
          </Left>
          <Body>
            <Title style={commonStyles.white}>拜访记录</Title>
          </Body>
          <Right />
        </Header>
        <FlatList
          key={'clientVisitRecordsList'}
          data={visitRecordsWithKeys}
          refreshing={this.state.isRefreshing}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={onEndReachedThreshold}
          onRefresh={this._onRefresh}
          renderItem={(item) => <ClientVisitCard visitRecord={item} />}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    clientId: ownProps.clientId,
    visitRecords: state.clients.visitRecords,
    visitRecordsPageNumber: state.clients.visitRecordsPageNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clientsActions: bindActionCreators(clientsActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClientVisitRecordsScene)
