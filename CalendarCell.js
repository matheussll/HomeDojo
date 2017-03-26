import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window')

export default class CalendarCell extends Component {

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.headerCalendar}>
        <Image style={{width: 15, height: 15, margin: 5}}
           source={require('./img/calendar_icon.jpg')}></Image>
          <Text style={{margin: 5, color: '#124F6E'}}>Calendário</Text>
        </View>
       <Text style={styles.subTitle}>Próxima Partida</Text>
        <View style={styles.containerTeams}>
          <View style={styles.containerTeam}>
            <Image style={{width: width*0.15, height: width*0.15}}
              source={{uri: this.props.row.home.img}}></Image>
            <Text style={styles.textInfos}>{this.props.row.home.name}</Text>
          </View>
          <Text style={{fontWeight:'bold'}}>X</Text>
          <View style={styles.containerTeam}>
            <Image style={{width: width*0.15, height: width*0.15}}
            source={{uri: this.props.row.visitor.img}}></Image>
            <Text style={styles.textInfos}>{this.props.row.visitor.name}</Text>
          </View>
          <View style={styles.containerInfos}>
           <Text style={styles.textInfos, {fontWeight: 'bold', fontSize: 10}}>{this.props.row.championship}</Text>
           <Text style={styles.textInfos}>{this.props.row.when}</Text>
           <Text style={styles.textInfos}>{this.props.row.where}</Text>
         </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  container: {
      width: width-10,
      margin:4,
      padding:10,
      shadowColor: "#000000",
      shadowOpacity: 0.2,
      shadowRadius: 3,
      shadowOffset: {height: 0,width: 0},
      borderRadius: 4,
      alignItems: 'stretch',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#ffffff',
      overflow:'visible'
  },
  containerTeams: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    marginLeft: 10
  },
  containerTeam:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  containerInfos:{
    flex: 0.8,
    margin: 5,
  },
  headerCalendar: {
    flexDirection: 'row'
  },
  textInfos: {
    textAlign: 'left',
    fontSize: 10,
  },
  subTitle: {
    color: '#1E81D1',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10
  }
});
