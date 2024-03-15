import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useLayoutEffect} from 'react';
import {MEALS} from '../data/data';

const Categorie = ({navigation, route}) => {
    const categorieId = route.params.id;
    const categorieTilte = route.params.title;

    const mealsFiltered = MEALS.filter(meal =>
        meal.categoryIds.includes(categorieId),
    );

    useLayoutEffect(() => {
        navigation.setOptions({title: categorieTilte});
    });

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                data={mealsFiltered}
                renderItem={({item}) => (
                    <View style={styles.containerPressable}>
                        <Pressable
                            style={styles.button}
                            onPress={() =>
                                navigation.navigate('Recipe', {...item})
                            }>
                            <Image
                                style={styles.mealPicture}
                                source={{
                                    uri: item.imageUrl,
                                }}
                            />
                            <View style={styles.containerTitle}>
                                <Text style={styles.textTitle}>
                                    {item.title}
                                </Text>
                                <View style={styles.containerDetails}>
                                    <Text style={styles.textDetails}>{item.complexity}</Text>
                                    <Text style={styles.textDetails}>{item.affordability}</Text>
                                    <Text style={styles.textDetails}>{item.duration} mins</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default Categorie;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1c9c9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatlist: {
        width: '100%',
        height: '100%',
    },
    containerPressable: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        width: '90%',
        height: 300,
        elevation: 2,
        color: 'white',
        margin: 10,
    },
    mealPicture: {
        flex: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    containerTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black',
    },
    containerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10,
    },
    textDetails: {
        fontWeight: 'bold',
        color: 'black',
    },

});
