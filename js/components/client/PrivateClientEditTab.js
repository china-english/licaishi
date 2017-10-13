import React, { Component, PropTypes } from 'react'

import { Content } from 'native-base'
import PrivateClientEditForm from './PrivateClientEditForm'

class PrivateClientCreateTab extends Component {
  state = {
    submitting: true
  }

  onSubmit = values => {
    this.setState({submitting: true})
    // authActions.login(values.loginName, values.password).then(result => {
    //   console.log(result)
      // Actions.app()
    // })
  }
  render () {
    return (
      <Content >
        <PrivateClientEditForm onSubmit={this.onSubmit}
          submitting={this.state.submitting} />
      </Content>
    )
  }
}

PrivateClientCreateTab.propTypes = {
  user: PropTypes.object
}

export default PrivateClientCreateTab
