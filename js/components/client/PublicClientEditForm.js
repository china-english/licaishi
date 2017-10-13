import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

import { Button, Form, Label, Text, View } from 'native-base'

import commonStyles from '../common/commonStyles'
import * as colors from '../../constants/colors'
import { renderInput, renderSelect } from '../common/form/reduxFormHelper'
import { identification, sex } from '../../constants/optionsValues'

const styles = {
  field: {
    label: {
      fontSize: 15
    },
    item: {
      paddingTop: 2,
      paddingBottom: 2
    },
    text: {
      fontSize: 15,
      color: colors.grey800
    },
    subtitle: {
      fontSize: 15,
      color: colors.grey400
    },
    multiInput: {
      minHeight: 100
    }
  },
  fieldsContainer: {
    marginHorizontal: 0,
    paddingHorizontal: 8
  },
  label: {
    fontSize: 13,
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 8,
    color: colors.grey600
  }
}

const PublicClientCreateForm = props => {
  const {handleSubmit, submit} = props

  return (
    <View>
      <Form>
        <Label style={styles.label}>机构信息</Label>
        <View style={Object.assign({}, styles.fieldsContainer, commonStyles.backgroundWhite)}>
          <Field name='customerShortname'
            component={renderInput}
            label='客户名称'
            style={styles.field} />
          <Field name='lawName'
            component={renderInput}
            label='法人代表名称'
            style={styles.field} />
          <Field name='identification'
            component={renderSelect}
            label='证件类型'
            options={identification}
            style={styles.field} />
          <Field name='lawIdentityNo'
            component={renderInput}
            label='证件号码'
            style={styles.field} />

          <Field name='sex' component={renderSelect} label='机构类型' options={sex}

            // TODO:相关命名错误
            style={styles.field} />
        </View>
        <Label style={styles.label}>授权经办人信息</Label>
        <View style={Object.assign({}, styles.fieldsContainer, commonStyles.backgroundWhite)}>
          <Field name='contact' component={renderInput} label='授权经办人名称'
            style={styles.field} />
          <Field name='contactIdType' component={renderSelect} label='授权经办人证件类型'
            options={sex}
            style={styles.field} />
          <Field name='contactIdNo' component={renderInput} label='授权经办人证件号码'
            style={styles.field} />
        </View>
      </Form>

      <Button style={commonStyles.componentSeparator} block full
        // onPress={handleSubmit(submit)}
      >
        <Text style={styles.loginText}>确定</Text>
      </Button>
    </View>
  )
}

export default reduxForm({
  form: 'PublicClientCreateForm'
})(PublicClientCreateForm)
