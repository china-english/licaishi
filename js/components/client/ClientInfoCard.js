import React, { PropTypes } from 'react'
import { TouchableOpacity, View, Image, Platform } from 'react-native'
import { Text } from 'native-base'
import { Grid, Row } from 'react-native-easy-grid'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { phonecall } from 'react-native-communications'

import * as colors from '../../constants/colors'
import commonStyles from '../common/commonStyles'

const styles = {
  component: {
    flex: 1,
    backgroundColor: colors.white
  },
  flexCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexStart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 4
  },
  personLabelButtonIos: {
    height: 16,
    borderRadius: 12,
    paddingTop: 2,
    paddingRight: 6,
    paddingLeft: 6,
    margin: 4,
    borderWidth: 1
  },
  personLabelButtonAndroid: {
    height: 16,
    borderRadius: 12,
    paddingBottom: 2,
    paddingRight: 6,
    paddingLeft: 6,
    margin: 4,
    borderWidth: 1
  },
  personLabelText: {
    fontSize: 9
  },
  normalColor: {
    color: colors.blue500
  },
  personLabelButtonBorderBlue: {
    borderColor: colors.blue500
  },
  personNameText: {
    margin: 4
  },
  personComponent: {
    marginTop: 10
  },
  personAvatarImg: {
    margin: 8,
    marginLeft: 16,
    width: 64,
    height: 64,
    borderRadius: 12
  },
  rankType: {
    flexDirection: 'row'
  },
  callButton: {
    backgroundColor: colors.deepOrange400,
    borderRadius: 25,
    padding: 10,
    width: 40,
    height: 40,
    margin: 24
  },
  phoneIcon: {
    color: colors.white
  }
}

const personType = (user) => {
  if (user.type === '稳健型') {
    return (
      <TouchableOpacity
        style={Object.assign({}, Platform.OS === 'ios' ? styles.personLabelButtonIos : styles.personLabelButtonAndroid, styles.personLabelButtonBorderBlue)}>
        <Text style={Object.assign({}, styles.personLabelText, styles.normalColor)}>稳健型</Text>
      </TouchableOpacity>
    )
  }
  if (user.type === '未测试') {
    return (
      <TouchableOpacity
        style={Object.assign({}, Platform.OS === 'ios' ? styles.personLabelButtonIos : styles.personLabelButtonAndroid, styles.personLabelButtonBorderBlue)}>
        <Text style={Object.assign({}, styles.personLabelText, styles.normalColor)}>未测试</Text>
      </TouchableOpacity>
    )
  }
  if (user.type === '待审核') {
    return (
      <TouchableOpacity
        style={Object.assign({}, Platform.OS === 'ios' ? styles.personLabelButtonIos : styles.personLabelButtonAndroid, styles.personLabelButtonBorderBlue)}>
        <Text style={Object.assign({}, styles.personLabelText, styles.normalColor)}>待审核</Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
        style={Object.assign({}, Platform.OS === 'ios' ? styles.personLabelButtonIos : styles.personLabelButtonAndroid, styles.personLabelButtonBorderBlue)}>
        <Text style={Object.assign({}, styles.personLabelText, styles.normalColor)}>未通过</Text>
      </TouchableOpacity>
    )
  }
}

const personSafeType = (user) => {
  if (user.safe) {
    return (
      <TouchableOpacity
        style={Object.assign({}, Platform.OS === 'ios' ? styles.personLabelButtonIos : styles.personLabelButtonAndroid, styles.personLabelButtonBorderBlue)}>
        <Text style={Object.assign({}, styles.personLabelText, styles.normalColor)}>安全型</Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
        style={Object.assign({}, Platform.OS === 'ios' ? styles.personLabelButtonIos : styles.personLabelButtonAndroid, styles.personLabelButtonBorderBlue)}>
        <Text style={Object.assign({}, styles.personLabelText, styles.normalColor)}>非安全型</Text>
      </TouchableOpacity>
    )
  }
}

const personCredit = (user) => {
  if (user.credit) {
    return (
      <TouchableOpacity
        style={Object.assign({}, Platform.OS === 'ios' ? styles.personLabelButtonIos : styles.personLabelButtonAndroid, styles.personLabelButtonBorderBlue)}>
        <Text style={Object.assign({}, styles.personLabelText, styles.normalColor)}>合格投资者</Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
        style={Object.assign({}, Platform.OS === 'ios' ? styles.personLabelButtonIos : styles.personLabelButtonAndroid, styles.personLabelButtonBorderBlue)}>
        <Text style={Object.assign({}, styles.personLabelText, styles.normalColor)}>不合格投资者</Text>
      </TouchableOpacity>
    )
  }
}

const ClientInfoCard = (props: { client: Object }) => {
  const {client} = props
  return (
    <View
      style={Object.assign({}, styles.flexCenter, styles.component, commonStyles.componentSeparator)}>
      <View style={styles.flexStart}>
        <Image style={styles.personAvatarImg}
          source={require('../../../images/avatar.jpg')} />
        <View style={styles.personComponent}>
          <View>
            <Text style={styles.personNameText}>{client.customerName}</Text>
          </View>
          <View style={styles.rankType}>
            {personType(client)}
            {personSafeType(client)}
            {personCredit(client)}
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.callButton}
        onPress={() => phonecall(client.phone, true)}>
        <EntypoIcon name='phone' size={18} style={styles.phoneIcon} />
      </TouchableOpacity>
    </View>
  )
}

export default ClientInfoCard
