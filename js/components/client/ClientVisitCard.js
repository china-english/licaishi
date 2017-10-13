import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { ListItem, Text } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

import * as colors from '../../constants/colors'
import commonStyles from '../common/commonStyles'
import { convertTwoDateTimesToOneString } from '../../businessLogic/utils'

const styles = {
  component: {
    flex: 1,
    backgroundColor: colors.white
  },
  cardHeaderView: {
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  cardHeaderSubView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  cardHeaderButton: {
    padding: 2,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.deepOrange400
  },
  cardHeaderEmptyButton: {
    padding: 2,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.grey800
  },
  cardItemBodyText: {
    fontSize: 12,
    marginHorizontal: 4,
    color: colors.grey800
  },
  cardHeaderButtonText: {
    fontSize: 12,
    margin: 0,
    color: colors.deepOrange400
  },
  cardHeaderButtonEmptyText: {
    fontSize: 12,
    margin: 0,
    color: colors.grey800
  },
  cardHeaderIcon: {
    color: colors.blue500
  },
  noteDetailText: {
    alignSelf: 'flex-start',
    color: colors.grey800,
    fontSize: 12,
    lineHeight: 20
  },
  noteDetailEmptyText: {
    color: colors.grey500,
    textAlign: 'center',
    marginTop: 24,
    fontSize: 12
  },
  noteDetailRow: {
    alignSelf: 'stretch',
    borderRadius: 4,
    minHeight: 60,
    marginHorizontal: 15
  },
  timeViewStyle: {
    flexDirection: 'row',
    marginVertical: 6,
    marginLeft: 25
  }
}

const remarkEditButton = (visitRecord) => {
  return (
    <TouchableOpacity
      onPress={() => Actions.clientVisitRecordEdit({visitRecord})}
      style={visitRecord.remark.length > 0 ? styles.cardHeaderButton : styles.cardHeaderEmptyButton}>
      <Text
        style={visitRecord.remark.length > 0 ? styles.cardHeaderButtonText : styles.cardHeaderButtonEmptyText}>{visitRecord.remark.length > 0 ? '编辑' : '添加'}</Text>
    </TouchableOpacity>
  )
}
const ClientVisitRecordCard = (props: { visitRecord: Object }) => {
  const visitRecord = props.visitRecord.item
  return (
    <View style={Object.assign({}, commonStyles.componentSeparator, styles.component)}>
      <ListItem style={styles.cardHeaderView}>
        <View style={styles.cardHeaderSubView}>
          <Icon name='edit' size={12} style={styles.cardHeaderIcon} />
          <Text style={styles.cardItemBodyText}>{visitRecord.title}</Text>
        </View>
        {remarkEditButton(visitRecord)}
      </ListItem>
      <ListItem>
        <View style={styles.noteDetailRow}>
          <Text
            style={visitRecord.remark.length > 0 ? styles.noteDetailText : styles.noteDetailEmptyText}>{visitRecord.remark.length > 0 ? visitRecord.remark : '暂无日志'}</Text>
        </View>
      </ListItem>
      <View style={styles.timeViewStyle}>
        <Text
          style={styles.cardItemBodyText}>{convertTwoDateTimesToOneString(visitRecord.startTime, visitRecord.endTime)}</Text>
      </View>
    </View>
  )
}

export default ClientVisitRecordCard
