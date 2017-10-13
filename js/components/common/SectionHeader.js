import React, { PropTypes } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Icon, Text } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as colors from '../../constants/colors'

const styles = {
  grid: {
    height: 36,
    backgroundColor: colors.white,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    borderBottomWidth: 0.5,
    borderColor: colors.grey300
  },
  col: {
    flexDirection: 'row'
  },
  sectionText: {
    marginLeft: 2,
    fontSize: 14
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    height: 30,
    paddingTop: 0,
    marginTop: 0,
    border: 0
  },
  buttonText: {
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 0,
    fontSize: 14
  },
  icon: {
    color: colors.lightBlue300,
    fontSize: 15
  },
  arrow: {
    color: colors.grey300,
    fontSize: 15
  }
}

const SectionHeader = ({materialCommunityIconName, sectionText, buttonText, buttonArrow, buttonAction}) => {
  return (
    <Grid style={styles.grid}>
      <View style={styles.col}>
        <MaterialCommunityIcons name={materialCommunityIconName} style={styles.icon} />
        <Text style={styles.sectionText}>{sectionText}</Text>
      </View>
      <View style={styles.col}>
        <TouchableOpacity style={styles.buttonGroup} onPress={buttonAction}>
          {buttonText && <Text style={styles.buttonText}>{buttonText} </Text>}
          {buttonArrow && <Icon name='ios-arrow-forward' style={styles.arrow} />}
        </TouchableOpacity>
      </View>
    </Grid>
  )
}

SectionHeader.propTypes = {
  materialCommunityIconName: PropTypes.string.isRequired,
  sectionText: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonArrow: PropTypes.bool,
  buttonAction: PropTypes.func
}

export default SectionHeader
