import products from '@/assets/data/products';
import { View, FlatList} from 'react-native';
import ProductListItem from '../../../components/ProductListItem';

export default function HomeScreen() {
  return (
      <FlatList
        data={products}
        renderItem={ ({item}) => <ProductListItem product={item}/> }
        numColumns={2}
        scrollEnabled={true}
      />
  );
}

