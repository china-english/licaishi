// @flow
import * as colors from '../constants/colors'

const styles = {
  textWaitColor: {
    color: colors.grey600,
    fontSize:13,
  },
  textAlreadyColor: {
    color: colors.orange600,
    fontSize:13,
  }
}

export function statusStyle (status) {
  if (status === 2) {
    return styles.textWaitColor
  } else {
    return styles.textAlreadyColor
  }
}
