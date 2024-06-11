import { Colors } from '@/src/constants/Colors';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ProductListItem = ({ product }) => {
  return (<View >
      <Image source={{ uri: product.image}}  style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
    ); 
};


export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'powderblue',
    fontSize: 20,
     fontWeight: 'bold'
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 15,
    textAlign: 'center'
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
