import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form/immutable'
import { Button, View, Text, Form, Label } from 'native-base'

import commonStyles from '../common/commonStyles'
import * as colors from '../../constants/colors'
import { renderInput, renderSelect, renderMultiInput, renderDatePicker } from '../common/form/reduxFormHelper'
import {sex, identification, eduLevel, workIndustry, country} from '../../constants/optionsValues'

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

let PrivateClientCreateForm = props => {
  const {handleSubmit, submit, submitting} = props
  return (
    <View>
      <Form>
        <Label style={styles.label}>基础信息</Label>
        <View style={Object.assign({}, styles.fieldsContainer, commonStyles.backgroundWhite)}>
          <Field name='customerShortname' component={renderInput} label='客户名称'
            style={styles.field} />
          <Field name='phone' component={renderInput} label='手机号码'
            style={styles.field} />
          <Field name='tel' component={renderInput} label='固定电话' optional
            style={styles.field} />
          <Field name='email' component={renderInput} label='电子邮件' optional
            style={styles.field} />
          <Field name='sex' component={renderSelect} label='性别' options={sex}
            style={styles.field} />
        </View>
        <Label style={styles.label}>证件信息</Label>
        <View style={Object.assign({}, styles.fieldsContainer, commonStyles.backgroundWhite)}>
          <Field name='identification'
            component={renderSelect}
            label='证件类型'
            options={identification}
            style={styles.field} />
          <Field name='identificationNo' component={renderInput} label='证件号码'
            style={styles.field} />
          <Field name='idValidity' component={renderDatePicker} label='证件有效期'
            style={styles.field} />
          <Field name='birthday' component={renderDatePicker} label='客户生日'
            style={styles.field} />
        </View>
        <Label style={styles.label}>教育收入</Label>
        <View style={Object.assign({}, styles.fieldsContainer, commonStyles.backgroundWhite)}>
          <Field name='eduLevel' component={renderSelect} label='教育程度' options={eduLevel}
            style={styles.field} />
          <Field name='workIndustry' component={renderInput} label='职业'
            options={workIndustry}
            style={styles.field} />
        </View>
        <Label style={styles.label}>地址信息</Label>
        <View style={Object.assign({}, styles.fieldsContainer, commonStyles.backgroundWhite)}>
          <Field name='country' component={renderSelect} label='国家' options={country}
            style={styles.field} />
          <Field name='area' component={renderInput} label='地区' options={null}
            style={styles.field} />
          <Field name='address' component={renderMultiInput} label='联系地址'
            style={styles.field} />
        </View>
      </Form>
      <Button style={commonStyles.componentSeparator} block full onPress={handleSubmit(submit)}
        disabled={submitting}>
        <Text style={styles.loginText}>确定</Text>
      </Button>
    </View>
  )
}

PrivateClientCreateForm = reduxForm({
  form: 'privateClientCreateForm'
  // validate
})(PrivateClientCreateForm)

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: null
  }
}
export default connect(mapStateToProps, null)(PrivateClientCreateForm)
