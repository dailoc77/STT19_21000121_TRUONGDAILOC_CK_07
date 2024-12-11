import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';

export default function StartScreen({ }) {
    return (
        <ImageBackground source={require('../assets/background.jpg')}
            resizeMode='cover'
            style={styles.container} >
            <View style={styles.overlay}>
                <Text style={styles.title}>Renovate your interior</Text>
                <TouchableOpacity style={styles.Touch}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Go to catalog</Text>
                </TouchableOpacity>
            </View>

            
        </ImageBackground>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 10,
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
})