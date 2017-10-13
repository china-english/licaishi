import React, { Component, PropTypes } from 'react'
import { Content } from 'native-base'

import PublicClientEditForm from './PublicClientEditForm'

class PublicClientCreateTab extends Component {
  state = {
    submitting: true
  }

  onSubmit = values => {
    // const {authActions} = this.props
    console.log('submitting form', values)
    // authActions.login(values.loginName, values.password).then(result => {
    //   console.log(result)
    // Actions.app()
    // })
  }

  render () {
    return (
      <Content >
        <PublicClientEditForm />
      </Content>
    )
  }
}

PublicClientCreateTab.propTypes = {
  user: PropTypes.object
}

export default PublicClientCreateTab
