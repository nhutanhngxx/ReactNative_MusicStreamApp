import { defaultStyles } from "@/styles";
import { SafeAreaView, Text, View, FlatList, ScrollView, ImageBackground, requireNativeComponent } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { Button, Input } from "react-native-elements";

import Icon from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useRouter, useLocalSearchParams} from "expo-router";

import dataTop50Canada from "../../../assets/data/top50canada.json";

const getImageSource = (imageName) => {
    switch (imageName) {
        case 'Flower':
            return require("../../../assets/DetailsChart/Flower.png");
        case 'ShapeOfYou':
            return require("../../../assets/DetailsChart/ShapeOfYou.png");
        case 'BlindingLights':
            return require("../../../assets/DetailsChart/BlindingLights.png");
        case 'Levitating':
            return require("../../../assets/DetailsChart/Levitating.png");
        case 'Levitating':
            return require("../../../assets/DetailsChart/ShapeOfYou.png");
        case 'Astronaut':
            return require("../../../assets/DetailsChart/Astronaut.png");
        case 'Dynamite':
            return require("../../../assets/DetailsChart/Dynamite.png");                                         
        // default:
        //     return require("../../../assets/DetailsChart/Flower.png");
    }
};

const DetailChart = () => {

    const {id, title, name, imgPath} = useLocalSearchParams();
    const router = useRouter();

    const renderItem = ({item}) => (
        <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{ flexDirection: 'row'}}>
                <Image
                    source={getImageSource(item.img)}
                    style={{ width: 50, height: 50, borderRadius: 5, marginRight: 10 }}
                />
                <View style={{gap: 5}}>
                    <Text style={{ fontSize: 20}}>{item.title}</Text>
                    <Text style={{ fontSize: 15}}>{item.artist}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between', width: 100}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <AntDesign name="hearto" size={12} color="black" />
                            <Text style={{ marginLeft: 5 }}>{item.view}</Text>
                        </View>
                        <Text style={{ alignSelf: 'center' }}>{item.time}</Text>
                    </View>
                </View>
            </View>
            <View>
                <Entypo name="dots-three-horizontal" size={20} color="black" />
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
                <Image
                    source={imgPath}
                    style={{marginRight: 20}}
                />
                <View style={{gap: 5}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>{name}</Text>
                    <View style={{flexDirection: 'row', gap: 20}}>
                        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                            <AntDesign name="hearto" size={12} color="black" />
                            <Text>1,234</Text>
                        </View>
                        <View>
                            <Text>05:10:18</Text>
                        </View>
                    </View>
                    <Text style={{fontSize: 15}}>{title}</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center', paddingTop: -10}}>
                <View style={{flexDirection: 'row', gap: 20}}>              
                    <TouchableOpacity><AntDesign name="hearto" size={20} color="black" /></TouchableOpacity>
                    <TouchableOpacity><Entypo name="dots-three-horizontal" size={20} color="black" /></TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                    <TouchableOpacity><FontAwesome name="random" size={24} color="black" /></TouchableOpacity>
                    <TouchableOpacity><AntDesign name="play" size={50} color="black" /></TouchableOpacity>
                </View>
            </View>

            <View>
                <FlatList
                    data={dataTop50Canada}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

export default DetailChart;