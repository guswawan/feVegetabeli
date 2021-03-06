import React from "react";
import { StyleSheet, Image, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Item, Input, Title, Button, Text } from "native-base";
import { FAB, Provider, Portal,Modal } from 'react-native-paper';
// import styles from './IsiCSS' 

export default class Screenku extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      isdisable: false,
      visible:''
    };
  }
  showModal=()=>this.setState({visible:true})
  hideModal=()=>this.setState({visible:false})
  ShowHideComponent = () => {
    // if (this.state.show == null) {
    this.setState({ show: false, isdisable: true });
    // } 
  };
  render() {
    // if (this.state.show==false){
    //   <Text>ooooo</Text>
    // }
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Screenku') }}>
                <Icon name='ios-arrow-back' style={styles.iconHeader} />
              </TouchableOpacity>
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleHeader}>Detail Bantuan</Title>
          </Body>
          <Right />
        </Header>
        
        
          
        <View >
          <Text style={styles.parent}>Apa kebijakan Tumbasin.id terkait pembatalan pesanan?</Text>
          <Text style={styles.child}>Untuk berbagai alasan teknis, and tidak dapat membatalkan pesanan ketika pesanan tersebut telah dibelanjakan.</Text>
          <View >
            {this.state.show ?
              <View style={styles.emot}>
                <Text style={styles.ask}>Apakah penjelasan ini membantu?</Text>
                <TouchableOpacity onPress={this.ShowHideComponent} disabled={this.state.isdisable}>
                  <View style={styles.icon}>
                    <Image style={styles.smile} source={require('./smile.png')} />
                    <Image style={styles.sad} source={require('./sad.png')} />
                  </View>
                </TouchableOpacity>
              </View> : <View >
                <Item regular style={styles.itemThanks}>
                  <Text style={styles.itemText}>Terimakasih atas masukan kamu</Text>
                </Item>
                <Text style={styles.call}>
                  <Text style={styles.call}>Masih</Text>
                  <Text style={styles.callBold}> butuh bantuan </Text>
                  <Text style={styles.call}>atau </Text>
                  <Text style={styles.callBold}>punya pertanyaan lain</Text>
                  <Text style={styles.call}> yang ingin ditanyakan? </Text>
                  <Text style={styles.callRed}>HUBUNGI KAMI</Text>
                </Text>
                <Item regular style={styles.itemFooter}>
                  <Image style={styles.icon2} source={require('./info.png')} />
                  <Text style={styles.textFooter}>Layanan Pelanggan 24 Jam, Senin s/d Minggu, tidak termasuk Hari Libur Nasional</Text>
                </Item>
              </View>
            }
            
          </View>
          
        </View>
        <Provider>
            <Portal>
              <Modal visible={this.state.visible} onDismiss={this.hideModal}>
                <Card style={{marginTop:270,height:150, marginLeft:8,marginRight:8}}>
                  <Text>di isi gambar wa</Text>
                </Card>
                <Card style={{marginTop:5,height:45,marginLeft:8,marginRight:8}}>
                  <Text style={{marginLeft:140, marginTop:12, color:'#43CFA8'}}>Cancel</Text>
                </Card>
              </Modal>
            </Portal>
          </Provider>
        <FAB
            style={{
              position: 'absolute',
              right:0,
              marginTop:550,
              marginRight:16,
              backgroundColor:'#43CFA8',
              height:55,
              width:55,
            }}
            medium
            icon="whatsapp"
            onPress={this.showModal}
          />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  header: {
    backgroundColor: 'white',
    width: 360,
    height: 60
  },
  iconHeader: {
    color: '#F15B5D',
  },
  titleHeader: {
    color: 'black',
    fontSize: 18
  },
  emot:{
    marginBottom:450
  },
  parent: {
    marginTop: 22,
    marginBottom: 36,
    marginLeft: 15,
    fontSize: 13,
    fontWeight: "bold",
    color: 'gray',
    fontWeight: 'bold'
  },
  child: {
    marginLeft: 15,
    fontSize: 13,
    color: 'gray',
    marginRight: 25,
    marginBottom: 64
  },
  ask: {
    marginLeft: 75,
    fontSize: 13,
    color: 'gray',
    marginBottom: 20,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  itemThanks: {
    height: 50,
    width:315,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 64,
    borderColor: '#F1F2F6',
    backgroundColor: '#E9EAEC',
    borderRadius:5
  },
  itemText: {
    color: 'gray',
    fontSize: 13,
    marginLeft:60,
  },
  call: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 13,
    color: "gray"
  },
  callBold: {
    marginTop: 37,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 13,
    fontWeight: 'bold',
    color: "gray"
  },
  callRed: {
    marginTop: 37,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 13,
    color: "red"
  },
  itemFooter: {
    marginTop: 36,
    borderColor: 'white',
    marginBottom:150
  },
  icon2: {
    marginRight: 10,
    marginLeft: 15,
    width: 12,
    height: 12
  },
  textFooter: {
    marginRight: 100,
    fontSize: 11,
    color: 'gray',
    marginTop: 12
  },
  smile: {
    width: 36,
    height: 36
  },
  sad: {
    width: 36,
    height: 36,
    marginLeft: 30
  }
})




