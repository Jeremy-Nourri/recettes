import {Image, StyleSheet, Text, ScrollView, View} from 'react-native';
import SectionRecipe from './SectionRecipe';

const Recipe = ({route}) => {
    const item = route.params;

    return (
        <ScrollView>
            <Image
                style={styles.mealPicture}
                source={{
                    uri: item.imageUrl,
                }}
            />
            <View style={styles.containerText}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <View style={styles.containerDetails}>
                    <Text style={styles.textDetails}>{item.duration} mins</Text>
                    <Text style={styles.textDetails}>{item.complexity.toUpperCase()}</Text>
                    <Text style={styles.textDetails}>{item.affordability.toUpperCase()}</Text>
                </View>
            </View>
            <View style={styles.containerSectionRecipe}>
                <SectionRecipe title="Ingredients" data={item.ingredients} />
                <SectionRecipe title="Steps" data={item.steps} />
            </View>
        </ScrollView>
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
    textDetails: {
        color: 'black',
    },
    containerSectionRecipe: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 30,
    },
});
