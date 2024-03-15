import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES} from '../data/data';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                numColumns={2}
                data={CATEGORIES}
                renderItem={({item}) => (
                    <Pressable
                        style={[styles.button, {backgroundColor: item.color}]}
                        onPress={() => navigation.navigate('Categorie', {...item})}
                    >
                        <Text style={styles.textItem}>
                            {item.title}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F4',
        alignItems: 'center',
    },

    button: {
        justifyContent: 'center',
        borderRadius: 10,
        width: 180,
        height: 170,
        elevation: 2,
        color: 'white',
        margin: 10,
    },
    textItem: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
