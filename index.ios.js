import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
} from 'react-native';

import CalendarCell from './CalendarCell';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class HomeDojo extends Component {

  constructor() {
    super();
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
}

  consumeService(){
    fetch('https://private-b9c8e-mock23.apiary-mock.com/api/timeline', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({dataSource: ds.cloneWithRows(responseJson)});
          console.log(this.state.dataSource);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  setDataToText(row){

    switch (row.type) {
      case "calendar":
        return <CalendarCell row={row}></CalendarCell>
        break;
      case "news":
        return <Text>notification: {row.message}</Text>
        break;
      case "notification":
        return <Text>notification: {row.message}</Text>
        break;
      case "store":

      return <Text>store: {row.from} - {row.to}</Text>
        break;

      default:
        return <Text>deu ruim</Text>
    }
  }



  render() {
    return (
      <View style={styles.container}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this.setDataToText}
      />
      </View>
    );
  }


  componentDidMount(){

    console.log("Entrou em componentDidMount");
    this.consumeService();

  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('HomeDojo', () => HomeDojo);