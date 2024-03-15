import {StyleSheet, Text, View, FlatList} from 'react-native';

const SectionRecipe = ({title, data}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <FlatList
                style={styles.flatList}
                data={data}
                renderItem={({item}) => (
                    <Text style={styles.textItem}>{item}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default SectionRecipe;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    title: {
        width: '80%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        color: '#E1B497',

    },
    flatList: {
        width: '80%',
        borderTopWidth: 3,
        borderColor: '#E1B497',
        paddingVertical: 10,
    },
    textItem: {
        fontSize: 16,
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#E1B497',
        borderRadius: 10,
        fontWeight: 'bold',

        alignItems: 'center',
        textAlign: 'center',
    },
});
