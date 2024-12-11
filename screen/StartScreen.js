import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import axios from 'axios';


export default function StartScreen({ }) {

    const [product, setProduct] = useState([]);

    const screenWidth = Dimensions.get('window').width;

    //mockapi
    useEffect(() => {
        axios.get('https://671d938709103098807d520d.mockapi.io/dailoc/popular_product').then((response) => {
            setProduct(response.data);
        });
    }, []);

    const numColumns = 2;
    return (
        <ImageBackground source={require('../assets/background.jpg')}
            resizeMode='cover'
            style={styles.container} >
            <View style={styles.top}>
                <Text style={styles.title}>Renovate your interior</Text>
                <TouchableOpacity style={styles.Touch}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Go to catalog</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bot}>
                <Text style={styles.titleModal}>Popular products</Text>
                <TouchableOpacity>
                    <Text>View all</Text>
                </TouchableOpacity>
            <FlatList
                data={product}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.productItem, { width: screenWidth / numColumns }]}>
                        <Text style={styles.productText}>{item.name}</Text>
                        <Text style={styles.productText}>{item.price}</Text>
                        <Text style={styles.productText}>{item.image}</Text>
                    </TouchableOpacity>
                )}
                numColumns={numColumns}
            />
            </View>
            

        </ImageBackground>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 10,
    },
    bot:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'left',
        // padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    titleModal:{
        fontSize: 20
    },
    title: {
        fontSize: 35,

    },
    Touch: {
        padding: 20,
        backgroundColor: 'pink',
        alignItems: 'center',
        borderRadius: 15,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'relative'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '100%',
        height: '60%',
        position: 'absolute',
        bottom: 0,
        zIndex: 1
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
})