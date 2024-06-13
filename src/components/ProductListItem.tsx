import { Colors } from '@/src/constants/Colors';
import { Image, StyleSheet, Platform, View, Text, Pressable } from 'react-native';
import { Product } from '../types';
import { Link } from 'expo-router';

export const defaultPizaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png'

type ProductListItemProps = {
    product: Product;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container} >
        <Image 
        source={{ uri: product.image || defaultPizaImage}}  style={styles.image} 
        resizeMode='contain'/>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text> 
    </Pressable>
    </Link>
    
    ); 
};


export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    flex: 1,
    backgroundColor: 'powderblue',
    margin: 5,
    maxWidth: '50%'
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
