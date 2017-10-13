import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  Text,
  FooterTab,
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

class ClientVisitRecordEditScene extends Component {
  props: {
    visitRecords: Object[]
  }

  state = {
    isLoading: true,
    isRefreshing: false
  }

  async componentDidMount () {
    const {clientId} = this.props
    try {
      const visitRecords = await clientsActions.loadClientVisitRecords(clientId)
      console.log(visitRecords)
      this.setState({isLoading: false})
    } catch (error) {
      console.log(error)
    }
  }

  _onRefresh = async () => {
    const {clientId, clientsActions} = this.props
    this.setState({isRefreshing: true})
    await clientsActions.loadClientVisitRecords(clientId)
    this.setState({isRefreshing: false})
  }

  _onEndReached = async () => {
    const {clientId, visitRecordsPageNumber, clientsActions} = this.props
    if (!this.state.isRefreshing) {
      this.setState({isRefreshing: true})
      await clientsActions.loadClientVisitRecords(clientId, visitRecordsPageNumber + 1)
      this.setState({isRefreshing: false})
    }
  }

  render () {
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
            <Title style={commonStyles.white}>编辑日志</Title>
          </Body>
          <Right />
        </Header>

      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    clientId: ownProps.clientId,
    visitRecord: ownProps.visitRecord
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clientsActions: bindActionCreators(clientsActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClientVisitRecordEditScene)
