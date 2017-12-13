// NPM Imports
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, View, StatusBar, Text } from 'react-native';

// Styles
import styles from './styles/SearchViewContainerStyles';

class SearchView extends Component {

  componentDidMount() {
    const { getRestaurantRequestCount } = this.props
    getRestaurantRequestCount()
  }

  render () {
    const { restaurants, loading } = this.props 
    if (restaurants) {
      return (
        <View>
          <Text> Redux Data Loaded </Text>
        </View>
      )
    }
    return (
      <View>
        <Text> Redux Data not loaded ?</Text>
      </View>
    )
  }  
}

export default SearchView
