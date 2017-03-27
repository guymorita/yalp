
import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native'
import NavigationBar from 'react-native-navbar'

export default class Login extends Component {
  _onLoginPress() {
    const { navigator } = this.props
    navigator.push({title: 'Main'})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Yalp
        </Text>
        <View>
          <Button
            onPress={this._onLoginPress.bind(this)}
            title="Login"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5ECC9C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 80,
    color: 'white'
  }
})
