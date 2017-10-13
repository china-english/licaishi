import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { StyleProvider } from 'native-base'
import App from './App'
import configureStore from './configureStore'
import getTheme from '../native-base-theme/components'
import platform from '../native-base-theme/variables/platform'
import { View } from 'react-native'

function setup (): React.Component {
  class Root extends Component {
    state = {
      isLoading: true,
      store: configureStore(() => {
        this.setState({isLoading: false})
      })
    }

    render () {
      if (this.state.isLoading) {
        // todo: update to Loading image
        return <View />
      }
      return (
        <StyleProvider style={getTheme(platform)}>
          <Provider store={this.state.store}>
            <App />
          </Provider>
        </StyleProvider>
      )
    }
  }

  return Root
}

export default setup
