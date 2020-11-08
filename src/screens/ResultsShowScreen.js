import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, FlatList, View, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResults = async () => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResults()
    }, [])

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => { 
                    return <Image style={styles.image} source={{uri:item}}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300
    }
});

export default ResultsShowScreen;
