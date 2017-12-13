import {StyleSheet} from 'react-native'
import GlobalStyles from '../../../styles/GlobalStyles'

export default StyleSheet.create({
  ...GlobalStyles.text,  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
