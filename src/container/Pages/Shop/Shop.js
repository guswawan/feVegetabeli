import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Icon, SearchBar} from 'react-native-elements';
import driver from '../../../assets/image/bike.png';
import Category from '../../../components/moleculs/Category/Category';
import ProductBestSeller from '../../../components/moleculs/ProductBestSeller/ProductBestSeller';

class Belanja extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <View style={styles.parent}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={styles.topBar}>
          <SearchBar
            inputStyle={{fontSize: 14}}
            containerStyle={styles.searchBar}
            onChangeText={this.updateSearch}
            value={search}
            platform="android"
            placeholder="Cari sayur, bumbu dapur, lauk pauk"
          />
        </View>
        <View style={styles.addressBar}>
          <View style={styles.textPos}>
            <Text style={styles.textGray}>Kamu Belanja di:</Text>
          </View>
          <View style={styles.textStore}>
            <Icon
              name="store"
              size={28}
              color="skyblue"
              containerStyle={styles.iconStyle}
            />
            <Text style={styles.textSize}>BAKUL DAWET</Text>
          </View>
          <View style={styles.btnGanti}>
            <Button
              title="GANTI"
              titleStyle={styles.titleBtn}
              containerStyle={styles.btnAdress}
              buttonStyle={styles.btnColor}
              onPress={() => this.props.navigation.navigate('ListShop')}
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
          <View style={styles.categoryBar}>
            <Text style={styles.fontCategory}>Telusuri Jenis Produk</Text>
            <Category />
          </View>
          <View style={styles.img}>
            <View style={styles.rounded}>
              <Image source={driver} style={styles.imgStyle} />
            </View>
            <View style={styles.textPromo}>
              <Text style={styles.ok}>PROMO BERLIMPAH, SLUR!</Text>
              <Text style={styles.ok}>SELAMAT BERBELANJA</Text>
            </View>
          </View>
          <View style={styles.bestSeller}>
            <Text style={styles.fontBestSell}>Produk Bestseller</Text>
            <TouchableOpacity>
              <Text style={styles.fontSeeAll}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <ProductBestSeller />
          </View>
        </ScrollView>
        <View style={styles.floatingButton}>
          <TouchableOpacity>
            <Icon
              name="shopping-cart"
              type="font-awesome"
              color="white"
              size={23}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Belanja;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'white',
    flex: 1,
  },
  topBar: {
    backgroundColor: '#DC4C6F',
    flexDirection: 'row',
    height: 120,
    justifyContent: 'center',
  },
  searchBar: {
    width: '90%',
    height: '32%',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    marginTop: 15,
    borderRadius: 45,
  },
  addressBar: {
    width: '90%',
    height: 90,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
    marginTop: -50,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 2,
  },
  main: {
    backgroundColor: '#F9F9F9'
  },
  categoryBar: {
    height: 180,
    // backgroundColor: '#F9F9F9',
    marginTop: 20,
    flexWrap: 'wrap'
  },
  btnGanti: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginLeft: '65%',
  },
  textGray: {
    fontSize: 13,
    color: '#919392',
    marginLeft: 10,
  },
  textSize: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 12,
  },
  textPos: {
    justifyContent: 'center',
    marginTop: 18,
  },
  textStore: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  btnAdress: {
    marginTop: 10,
  },
  btnColor: {
    backgroundColor: '#F15B5D',
    width: '80%',
    height: 40,
    borderRadius: 6,
    elevation: 2,
  },
  titleBtn: {
    fontSize: 14,
  },
  iconStyle: {
    marginLeft: 9,
    marginTop: 7,
    marginBottom: 10,
  },
  fontCategory: {
    marginTop: 3,
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textCategory: {
    fontSize: 12,
    marginBottom: -12,
  },
  img: {
    width: '80%',
    aspectRatio: 2 / 1,
    backgroundColor: '#F15B5D',
    marginVertical: 25,
    alignSelf: 'center',
    flexDirection: 'column',
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  bestSeller: {
    width: '95%',
    aspectRatio: 10 / 1,
    backgroundColor: 'white',
    marginHorizontal: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontBestSell: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '2%',
  },
  fontSeeAll: {
    color: '#F15B5D',
    fontSize: 13,
  },
  imgStyle: {
    height: 75,
    width: 75,
    marginLeft: 10,
  },
  rounded: {
    backgroundColor: '#F1F1F1',
    width: '35%',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 6,
  },
  textPromo: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  ok: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#87CAFE',
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 12,
    elevation: 5,
  },
});
