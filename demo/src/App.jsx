import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'hippy-react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      pageIndex: 0,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Hippy-react</Text>
      </View>
    );
  }
}
