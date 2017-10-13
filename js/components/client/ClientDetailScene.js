import React from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import {
  Container,
  Header,
  Title,
  Content,
  ListItem,
  Text,
  Button,
  Left,
  Body,
  Right,
  Icon, Spinner
} from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import * as clientsActions from '../../actions/clientsActions'

import * as colors from '../../constants/colors'
import commonStyles from '../common/commonStyles'
import FourDataGridCell from '../common/FourDataGridCell'
import ClientInfoCard from './ClientInfoCard'
import { convertMoneyToString } from '../../businessLogic/utils'

const styles = {
  component: {
    flex: 1,
    backgroundColor: colors.white
  },
  label: {
    fontSize: 12,
    marginRight: 8,
    marginTop: 1,
    color: colors.grey500
  },
  achievementInfoCell: {
    paddingTop: 5,
    height: 55
  },
  achievementMiniInfoCell: {
    paddingTop: 5
  },
  achievementInfoText: {
    fontSize: 13,
    color: colors.grey700
  },
  achievementInfoCellBorder: {
    borderColor: colors.grey200,
    borderBottomWidth: 1
  },
  verticalLine: {
    marginTop: 10,
    height: 40,
    borderColor: colors.grey200,
    borderWidth: 0.5
  },
  verticalLineMini: {
    marginTop: 10,
    marginBottom: 10,
    height: 20,
    borderColor: colors.grey200,
    borderWidth: 0.5
  },
  flexCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4
  }
}

class ClientDetailScene extends React.Component {
  props: {
    selectedClient: ?Object
  }

  state = {
    isLoading: true
  }

  async componentDidMount () {
    const {clientId, clientsActions} = this.props
    try {
      await clientsActions.loadClient(clientId)
      this.setState({isLoading: false})
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    const {selectedClient} = this.props
    if (this.state.isLoading) {
      return <Content>
        <Spinner color='blue' />
      </Content>
    }
    return (
      <Container style={commonStyles.backgroundGrey}>
        <Header style={commonStyles.header}
          iosBarStyle={colors.iosBarColor}
          androidStatusBarColor={colors.statusBarColor}>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='arrow-back' style={commonStyles.white} />
            </Button>
          </Left>
          <Body>
            <Title style={commonStyles.white}>客户详情</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <ClientInfoCard client={selectedClient} />
          <Grid style={Object.assign({}, commonStyles.componentSeparator, styles.component)}>
            <Col>
              <Row
                style={Object.assign({},
                  styles.achievementInfoCell, styles.achievementInfoCellBorder)}>
                <FourDataGridCell iconName='coin' infoText='在投资产'
                  infoNumber={convertMoneyToString(selectedClient.investmentAmount)} />
              </Row>
              <Row style={Object.assign({}, styles.achievementMiniInfoCell, styles.flexCenter)}>
                <Text style={styles.label}>注册时间</Text>
                <Text style={styles.achievementInfoText}>
                  {selectedClient.createTime.substring(0, 10)}
                </Text>
              </Row>
            </Col>
            <Col style={{width: 1}}>
              <Row>
                <View style={styles.verticalLine} />
              </Row>
              <Row>
                <View style={styles.verticalLineMini} />
              </Row>
            </Col>
            <Col>
              <Row
                style={Object.assign({}, styles.achievementInfoCell, styles.achievementInfoCellBorder)}>
                <FourDataGridCell iconName='database-plus' infoText='下笔到期时间/金额'
                  infoNumber={selectedClient.lastEndTime.substring(0, 10)} />
              </Row>
              <Row style={Object.assign({}, styles.achievementMiniInfoCell, styles.flexCenter)}>
                <Text style={styles.label}>地区</Text>
                <Text
                  style={styles.achievementInfoText}>{selectedClient.province} {selectedClient.city}</Text>
              </Row>
            </Col>
          </Grid>
          <View padder style={Object.assign({}, commonStyles.componentSeparator, styles.component)}>
            <ListItem
              onPress={() => Actions.clientVisitRecords({clientId: selectedClient.customerId})}>
              <Text>拜访记录</Text>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem>
            <ListItem onPress={() => Actions.clientInvestmentRatio()}>
              <Text>投资占比</Text>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem>
            <ListItem onPress={() => Actions.clientInvesting()}>
              <Text>在投资产</Text>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem>
            <ListItem onPress={() => Actions.clientTradingRecord()}>
              <Text>交易记录</Text>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem>
            <ListItem onPress={() => Actions.clientInfo()}>
              <Text>基础信息</Text>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem>
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    clientId: ownProps.clientId,
    selectedClient: state.clients.selectedClient
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clientsActions: bindActionCreators(clientsActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailScene)
