import { Colors } from '@/src/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, View } from 'react-native';
import CartScreen from '../../cart';

export default function MenuStack() {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };
    
  return (
    <Stack
        screenOptions={{
            headerRight: () => (
                <Link href="/cart" asChild>
                    <Pressable >
                        <View style={styles.container}>
                        <Pressable onPress={openModal}>
                            {({ pressed }) => (
                                <FontAwesome
                                    name="plus-square-o"
                                    size={25}
                                    color={Colors.light.tint}
                                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                />
                            )}
                        </Pressable>
                            <CartScreen visible={modalVisible} onClose={closeModal} />
                        </View>
                    </Pressable>
                </Link>
            ),
        }}
     >

     <Stack.Screen name="index" options={{title: 'Menu'}}/>
     </Stack>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });