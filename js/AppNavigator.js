import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { Drawer } from 'native-base'
import { Router, Scene, ActionConst } from 'react-native-router-flux'

import { closeDrawer } from './actions/drawer'

// auth
import LoginScene from './components/auth/LoginScene'
import GestureLoginScene from './components/auth/GestureLoginScene'

// home
import HomeScene from './components/home/homeScene'
import MessageScene from './components/home/MessageScene'

// clients
import ClientDetailScene from './components/client/ClientDetailScene'
import ClientsScene from './components/client/ClientsScene'
import ClientInfoScene from './components/client/ClientInfoScene'
import ClientInvestmentsScene from './components/client/ClientInvestmentsScene'
import ClientTradingRecordScene from './components/client/ClientTradingRecordScene'
import ClientVisitRecordsScene from './components/client/ClientVisitRecordsScene'
import ClientVisitRecordEditScene from './components/client/ClientVisitRecordEditScene'
import ClientInvestmentRatioScene from './components/client/ClientInvestmentRatioScene'
import ClientsVisitEditScene from './components/home/ClientsVisitEditScene'
import ClientsVisitDetailScene from './components/home/ClientsVisitDetailScene'
import ClientCreateScene from './components/client/ClientCreateScene'
import AgendasScene from './components/home/AgendasScene'
import BlankPage from './components/blankPage'
import SideBar from './components/sideBar'

// product
import ProductsScene from './components/product/ProductsScene'
import ProductDetailedScene from './components/product/ProductDetailedScene'
import ProductAppointmentScreen from './components/product/ProductAppointmentScreen'
import ProductIntroductionScene from './components/product/ProductIntroductionScene'
import ClientsOptionalScene from './components/product/ClientsOptionalScene'

// personal
import PersonalScene from './components/personal/PersonalScene'
import PersonalCenterScene from './components/personal/PersonalCenterScene'
import AboutUsScene from './components/personal/AboutUsScene'
import CompetitionDetailsScene from './components/personal/CompetitionDetailsScene'
import ContractsScene from './components/personal/ContractsScene'
import ContractEditDetailsScene from './components/personal/ContractEditDetailsScene'
import ContractSuccessPromptScene from './components/personal/ContractSuccessPromptScene'
import AppointmentRecordScreen from './components/personal/AppointmentRecordScreen'

import { statusBarColor } from './constants/colors'

const RouterWithRedux = connect()(Router)

class AppNavigator extends Component {
  props: {
    drawerState: string,
    closeDrawer: () => void
  }

  componentDidUpdate () {
    // console.log(this.props)
    if (this.props.drawerState === 'opened') {
      this.openDrawer()
    }

    if (this.props.drawerState === 'closed') {
      this._drawer._root.close()
    }
  }

  openDrawer () {
    this._drawer._root.open()
  }

  closeDrawer () {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer()
    }
  }

  render () {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref }}
        type='overlay'
        tweenDuration={150}
        content={<SideBar />}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3
          }
        }}
        tweenHandler={(ratio) => {  //eslint-disable-line
          return {
            drawer: {shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5},
            main: {
              opacity: (2 - ratio) / 2
            }
          }
        }}
        negotiatePan
      >
        <RouterWithRedux>
          <Scene key='root'>
            <Scene key='auth' initial type={ActionConst.RESET}>
              <Scene key='login' component={LoginScene} type={ActionConst.RESET} hideNavBar
                initial />
              <Scene key='gestureLogin' component={GestureLoginScene} hideNavBar />
            </Scene>
            <Scene key='app' tabs hideTabBar>
              <Scene key='homeScenes' initial>
                <Scene key='home' initial component={HomeScene} hideNavBar />
                <Scene key='messagesList' component={MessageScene} hideNavBar />
                <Scene key='agendas' component={AgendasScene} hideNavBar />
                <Scene key='activities' component={BlankPage} hideNavBar />
                <Scene key='activitySignUp' component={BlankPage} hideNavBar />
                <Scene key='activityClientDetail' component={BlankPage} hideNavBar />
                <Scene key='clientsVisitDetail' component={ClientsVisitDetailScene} hideNavBar />
                <Scene key='clientsVisitEdit' component={ClientsVisitEditScene} hideNavBar />
              </Scene>
              <Scene key='clientsScenes'>
                <Scene key='clients' c component={ClientsScene} hideNavBar />
                <Scene key='clientCreate' component={ClientCreateScene} hideNavBar />
                <Scene key='clientDetail' component={ClientDetailScene} hideNavBar />
                <Scene key='clientInfo' component={ClientInfoScene} hideNavBar />
                <Scene key='clientInvesting' component={ClientInvestmentsScene} hideNavBar />
                <Scene key='clientTradingRecord' component={ClientTradingRecordScene} hideNavBar />
                <Scene key='clientVisitRecords' component={ClientVisitRecordsScene} hideNavBar />
                <Scene key='clientVisitRecordEdit' component={ClientVisitRecordEditScene} hideNavBar />
                <Scene key='clientInvestmentRatio' component={ClientInvestmentRatioScene}
                  hideNavBar />
              </Scene>
              <Scene key='productsScenes'>
                <Scene key='products' initial component={ProductsScene} hideNavBar />
                <Scene key='productIntroduction' component={ProductIntroductionScene} hideNavBar />
                <Scene key='productAppointment' component={ProductAppointmentScreen} hideNavBar />
                <Scene key='productAppointmentResult' component={BlankPage} hideNavBar />
                <Scene key='clientsOptional' component={ClientsOptionalScene} hideNavBar />
              </Scene>
              <Scene key='personalScenes'>
                <Scene key='personal' initial component={PersonalScene} hideNavBar />
                <Scene key='personalCenter' component={PersonalCenterScene} hideNavBar />
                <Scene key='competitionDetails' component={CompetitionDetailsScene} hideNavBar />
                <Scene key='updatePassword' component={BlankPage} hideNavBar />
                <Scene key='aboutUs' component={AboutUsScene} hideNavBar />
                <Scene key='updateGesturePassword' component={BlankPage} hideNavBar />
                <Scene key='contracts' component={ContractsScene} hideNavBar />
                <Scene key='appointmentRecord' component={AppointmentRecordScreen} hideNavBar />
                <Scene key='contractEditDetails' component={ContractEditDetailsScene} hideNavBar />
                <Scene key='contractSuccessPrompt' component={ContractSuccessPromptScene}
                  hideNavBar />
              </Scene>
            </Scene>
            <Scene key='blankPage' component={BlankPage} />
          </Scene>
        </RouterWithRedux>
      </Drawer>
    )
  }
}

function bindAction (dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer())
  }
}

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
  navigation: state.cardNavigation
})

export default connect(mapStateToProps, bindAction)(AppNavigator)
