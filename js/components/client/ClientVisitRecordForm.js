import React  from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form/immutable'
import { Button, View, Text, Form } from 'native-base'

import commonStyles from '../common/commonStyles'
import * as colors from '../../constants/colors'
import { renderInput, renderDatePicker, renderMultiInput } from '../common/form/reduxFormHelper'

const styles = {
  field: {
    label: {
      fontSize: 15,
      marginLeft: 10
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
  },
  loginButton: {},
  loginText: {
    fontSize: 18
  },
  form: {
    backgroundColor: colors.white,
    marginTop: 10
  },
  formList: {
    marginHorizontal: 15
  }
}

let ClientVisitRecordForm = (props: { handleSubmit?: () => void, submitting: boolean, submit?: () => void }) => {
  const {handleSubmit, submit, submitting} = props
  return (
    <View>
      <Form style={styles.form}>
        <View style={styles.formList}>
          <Field name='remark' component={renderMultiInput} label='日志'
            style={styles} />
        </View>
      </Form>
      <Button style={commonStyles.componentSeparator} block full onPress={handleSubmit(submit)}
        disabled={submitting}>
        <Text style={styles.loginText}>确定</Text>
      </Button>
    </View>
  )
}

ClientVisitRecordForm = reduxForm({
  form: 'clientVisitRecordForm'
  // validate
})(ClientVisitRecordForm)

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: {
      remark: '123456'
    }
  }
}
export default connect(mapStateToProps)(ClientVisitRecordForm)
