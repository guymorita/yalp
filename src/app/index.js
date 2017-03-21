
import React, { Component } from 'react'
import {
  Navigator
} from 'react-native'

import Main from './containers/Main'

export default class App extends Component {
  render() {
    const routes = [
      {
        title: 'Main',
        index: 0,
      },
      {
        title: 'Details',
        index: 1,
      },
      {
        title: 'Filter',
        index: 2,
      },
      {
        title: 'Map',
        index: 3,
      },
    ]

    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(route, navigator) {
    switch (route.title) {
      case 'Main':
        return (<Main navigator={navigator} />);
    }
  }
}
