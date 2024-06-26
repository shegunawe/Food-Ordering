import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import products from '@/assets/data/products';
import { defaultPizaImage } from '@/src/components/ProductListItem';
import { useState } from 'react';
import Button from '@/src/components/Button';
products;

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id.toString() == id);

  const [selectedSize, setSelectedSize] = useState('M');

  const addToCart = () => {
    console.warn('Item of size (', selectedSize ,')added to cart')
  }


  if (!product) {
    return <Text>Product not found</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name}}/>
      <Image source={{ uri: product.image || defaultPizaImage }} 
      style={styles.image}
      />

      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => 
          <Pressable
            onPress={ () => setSelectedSize(size)}
            style={[styles.size, 
              {
                backgroundColor: selectedSize == size ? 'gainsboro' : 'white'
              }
            ]} key={size}>
              <Text style={[styles.sizeText, , 
              {
                color: selectedSize == size ? 'black' : 'gray'
              }]}>{size}</Text>
          </Pressable>
        )}
      </View>


      <Text style={styles.price}>${product.price}</Text>

      <Button onPress={addToCart} text="Add to Cart"/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto'
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'

  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500'
  },
})
export default ProductDetailsScreen
