import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
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
  Icon
} from 'native-base'

import theme from '../../themes/base-theme'
import * as colors from '../../constants/colors'
import commonStyles from '../common/commonStyles'

const styles = {
  CardItem: {
    justifyContent: 'space-between'
  },
  listViewTitle: {
    fontSize: 12,
    margin: 6,
    color: colors.grey600
  },
  addressRow: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.grey400,
    minHeight: 50,
    marginTop: 10,
    padding: 4
  },
  addressText: {
    alignSelf: 'flex-start',
    color: colors.grey700
  },
  addressView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  component: {
    flex: 1,
    backgroundColor: colors.white
  }
}

const user = {
  phone: '18888888888',
  tel: '0571 88888888',
  email: '88888888@qq.com',
  cardType: '身份证',
  cardExpiry: '2020-05-18',
  birthday: '1988-05-18',
  graduated: '本科',
  profession: '金融',
  income: '50W',
  country: '中国',
  province: '浙江省',
  city: '杭州市',
  address: '滨江区人民路'
}
class ClientInfoScene extends Component {
  render () {
    return (
      <Container theme={theme} style={commonStyles.backgroundGrey}>
        <Header style={commonStyles.header}
          iosBarStyle={colors.iosBarColor}
          androidStatusBarColor={colors.statusBarColor}>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='arrow-back' style={commonStyles.white} />
            </Button>
          </Left>
          <Body>
          <Title style={commonStyles.white}>客户信息</Title>
          </Body>
          <Right>
            <Button light small bordered>
              <Text>编辑</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          <View padder style={styles.component}>
            <ListItem onPress={() => Actions.productAppointment()} style={styles.CardItem}>
              <Text>手机号码</Text>
              <Text>{user.phone}</Text>
            </ListItem>
            <ListItem onPress={() => Actions.productAppointment()} style={styles.CardItem}>
              <Text>固定电话</Text>
              <Text>{user.tel}</Text>
            </ListItem>
            <ListItem onPress={() => Actions.productAppointment()} style={styles.CardItem}>
              <Text>电子邮件</Text>
              <Text>{user.email}</Text>
            </ListItem>
          </View>
          <Text style={styles.listViewTitle}>证件信息</Text>
          <View padder style={styles.component}>
            <ListItem onPress={() => Actions.productAppointment()} style={styles.CardItem}>
              <Text>证件类型</Text>
              <Text>{user.cardType}</Text>
            </ListItem>
            <ListItem onPress={() => Actions.productAppointment()} style={styles.CardItem}>
              <Text>证件号码</Text>
              <Text>xxxx xxxx xxxxxxxxx</Text>
            </ListItem>
            <ListItem onPress={() => Actions.productAppointment()} style={styles.CardItem}>
              <Text>证件有效期</Text>
              <Text>{user.cardExpiry}</Text>
            </ListItem>
            <ListItem onPress={() => Actions.productAppointment()} style={styles.CardItem}>
              <Text>客户生日</Text>
              <Text>{user.birthday}</Text>
            </ListItem>
          </View>
          <Text style={styles.listViewTitle}>教育收入</Text>
          <View padder style={styles.component}>
            <ListItem onPress={() => Actions.productAppointment()} style={styles.CardItem}>
              <Text>教育程度</Text>
              <Text>{user.graduated}</Text>
            </ListItem>
            <ListItem onPress={() => Actions.productAppointment()} style={styles.CardItem}>
              <Text>职业</Text>
              <Text>{user.profession}</Text>
            </ListItem>
            <ListItem onPress={() => Actions.productAppointment()} style={styles.CardItem}>
              <Text>年收入</Text>
              <Text>{user.income}</Text>
            </ListItem>
          </View>
          <Text style={styles.listViewTitle}>地址信息</Text>
          <View padder style={styles.component}>
            <ListItem onPress={() => Actions.productAppointment()} style={styles.CardItem}>
              <Text>国籍</Text>
              <Text>{user.country}</Text>
            </ListItem>
            <ListItem onPress={() => Actions.productAppointment()} style={styles.CardItem}>
              <Text>地区</Text>
              <Text>{user.province}{user.city}</Text>
            </ListItem>
            <ListItem onPress={() => Actions.productAppointment()} style={styles.addressView}>
              <View>
                <Text>联系地址</Text>
              </View>
              <View style={styles.addressRow}>
                <Text style={styles.addressText}>{user.address}</Text>
              </View>
            </ListItem>
          </View>
        </Content>
      </Container>
    )
  }
}

ClientInfoScene.propTypes = {
  user: PropTypes.object
}

export default ClientInfoScene
