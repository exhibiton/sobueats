// NPM Imports
import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './styles/RootContainerStyles'

// Other Modules & Imports
import CONSTANTS from '../utils/Constants'
import SearchViewContainer from './Search/SearchViewContainer'
import { setApiTokenHeader } from '../utils/InitConfig'

class RootContainer extends Component {

  componentWillMount() {
    setApiTokenHeader(CONSTANTS.API_TOKEN)
  }

  render () {
    return (
      <View style={styles.container}>
        <SearchViewContainer />
      </View>
    )
  }
}


export default RootContainer
