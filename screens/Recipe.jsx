import {Image, StyleSheet, Text, View} from 'react-native';
import SectionRecipe from './SectionRecipe';

const Recipe = ({route}) => {
    const item = route.params;

    return (
        <View>
            <Image
                style={styles.mealPicture}
                source={{
                    uri: item.imageUrl,
                }}
            />
            <View style={styles.containerText}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <View style={styles.containerDetails}>
                    <Text>{item.duration} mins</Text>
                    <Text>{item.complexity.toUpperCase()}</Text>
                    <Text>{item.affordability.toUpperCase()}</Text>
                </View>
            </View>
            <View>
                <SectionRecipe title="Ingredients" data={item.ingredients} />
                <SectionRecipe title="Steps" data={item.steps} />
            </View>
        </View>
    );
};

export default Recipe;

const styles = StyleSheet.create({
    mealPicture: {
        width: '100%',
        height: 200,
    },
    containerText: {
        padding: 10,
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    containerDetails: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        marginVertical: 10,
    },
});
