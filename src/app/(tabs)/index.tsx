import products from '@/assets/data/products';
import { Colors } from '@/src/constants/Colors';
import { View} from 'react-native';
import ProductListItem from '../ProductListItem';

export default function HomeScreen() {
  return (
    <View style={{backgroundColor: 'powderblue'}}>
      <ProductListItem product={products[0]}/>
      <ProductListItem product={products[1]}/>
      <ProductListItem product={products[0]}/>
    </View>
  );
}

