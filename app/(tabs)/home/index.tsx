import { defaultStyles } from "@/styles";
import { SafeAreaView, Text, View, FlatList, ScrollView } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { Button, Input } from "react-native-elements";

import Icon from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRoute } from "@react-navigation/native";

const dataSuggestions = [
  {
    id: 1,
    img: require("../../../assets/Home/suggestions1.png")
  },
  {
    id: 2,
    img: require("../../../assets/Home/suggestions2.png")
  }
]

const dataCharts = [
  {
    id: 1,
    title: "Daily chart - toppers update",
    img: require("../../../assets/Home/Chart1.png")
  },
  {
    id: 2,
    title: "Daily chart - toppers update",
    img: require("../../../assets/Home/Chart2.png")
  },
  {
    id: 3,
    title: "Daily chart - toppers update",
    img: require("../../../assets/Home/Chart3.png")
  }
]

const dataAlbum = [
  {
    id: 1,
    title: "ME",
    singer: "Jessica Gonzalez",
    img: require("../../../assets/Home/Album1.png")
  },
  {
    id: 2,
    title: "Magna nost",
    singer: "Brian Thomas",
    img: require("../../../assets/Home/Album2.png")
  },
  {
    id: 3,
    title: "Magna nost",
    singer: "Christoper",
    img: require("../../../assets/Home/Album3.png")
  },
]

const dataArtists = [
  {
    id: 1,
    singer: "Jennifer Wilson",
    img: require("../../../assets/Home/Artists1.png")
  },
  {
    id: 2,
    singer: "Elizabeth Hall",
    img: require("../../../assets/Home/Artists2.png")
  },
  {
    id: 3,
    singer: "Anthonio",
    img: require("../../../assets/Home/Artists3.png")
  }
]

const HomeScreen = () => {

  const router = useRoute();

  const renderSuggesstions = ({ item }) => (
    <View>
      <Image
        source={item.img}
        style={{width: 225, height: 300, borderRadius: 10, marginRight: 20}}
      />
    </View>
  );

  const renderCharts = ({ item }) => (
      <View>
        <Image
          source={item.img}
          style={{width: 140, height: 140, borderRadius: 10, marginRight: 20}}
        />
        <Text style={{fontSize: 17, marginTop: 5, width: 140, opacity: 0.5}}>{item.title}</Text>
      </View>
  );

  const renderAlbum = ({ item }) => (
      <View>
        <Image
          source={item.img}
          style={{width: 140, height: 140, borderRadius: 10, marginRight: 20}}
        />
        <Text style={{fontSize: 17, marginTop: 5, width: 140}}>{item.title}</Text>
        <Text style={{fontSize: 17, marginTop: 5, width: 140, opacity: 0.5}}>{item.singer}</Text>
      </View>
  );

  const renderArtists = ({ item }) => (
    <View style={{justifyContent: 'space-between', alignItems: 'center', marginRight: 20}}>
      <Image
        source={item.img}
        style={{width: 140, height: 140, borderRadius: 10}}
      />
      <Text style={{fontSize: 17, marginTop: 10}}>{item.singer}</Text>
      <Button
        title={"Follow"}
        titleStyle={{fontSize: 15, fontWeight: 'bold'}}
        buttonStyle={{backgroundColor: 'black', width: 80, height: 40, borderRadius: 20, marginTop: 10}}
      />
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, width: '90%', alignSelf: 'center'}}>

      {/* Tiêu đều */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingTop: 10}}>
        <TouchableOpacity>
          <View>
            <Image
              source={require("../../../assets/Home/IconColor.png")}
              style={{width: 40, height: 40}}
            />
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={30} color="black" />
          </TouchableOpacity>
          <Image
            source={require("../../../assets/Home/AvatarHome.png")}
            style={{width: 40, height: 40}}
          />
        </View>
      </View>

      {/* Good morning!! */}
      <View>
        <Text style={{fontSize: 20, marginTop: 40, color: '#767D88'}}>Good morning,</Text>
        <Text style={{fontSize: 40, fontWeight: 'bold', marginTop: 5}}>Ashley Scott</Text>
      </View>

      {/* Thanh tìm kiếm bài hát */}
      <View style={{paddingTop: 10, paddingBottom: 10}}>
        <Input
          leftIcon={<Ionicons name="search" size={24} color="black" style={{paddingRight: 10}} />}
          placeholder="What you want to listen to"
          containerStyle={{paddingLeft: -10, paddingRight: -10, paddingTop: 10}}
          inputContainerStyle={{borderWidth: 1, borderRadius: 25, height: 50, paddingLeft: 10, paddingRight: 10}}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Suggestions for you */}
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold', paddingBottom: 10}}>Suggestions for you</Text>
            <FlatList
                data={dataSuggestions}
                renderItem={renderSuggesstions}
                keyExtractor={(sugesstion) => sugesstion.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />        
        </View>

        {/* Charts */}
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10, paddingTop: 30}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Trending albums</Text>
            <TouchableOpacity>
              <Text style={{opacity: 0.5, fontWeight: 'bold'}}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
            <FlatList
                data={dataCharts}
                renderItem={renderCharts}
                keyExtractor={(chart) => chart.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>

        {/* Trending albums */}
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10, paddingTop: 30}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Trending albums</Text>
            <TouchableOpacity>
              <Text style={{opacity: 0.5, fontWeight: 'bold'}}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
              data={dataAlbum}
              renderItem={renderAlbum}
              keyExtractor={(albums) => albums.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Popular artists */}
        <View style={{paddingBottom: 50}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10, paddingTop: 30}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Popular artists</Text>
            <TouchableOpacity>
              <Text style={{opacity: 0.5, fontWeight: 'bold'}}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
              data={dataArtists}
              renderItem={renderArtists}
              keyExtractor={(chart) => chart.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;
