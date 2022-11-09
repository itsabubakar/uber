import { View, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { Icon } from '@rneui/themed'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'
import { Image } from 'react-native'
import { useState } from 'react'
import { ScrollView } from 'react-native'

import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

// Surge charge price
const SURGE_CHARGE_RATE = 1.5


const RideOptionsCard = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])  //ignores a warning because I have a flatlist inside a scrolllist


    const data = [
        {
            id: "Uber-x-123",
            title: 'UberX',
            multiplier: 1,
            image: "https://links.papareact.com/3pn"
        },
        {
            id: "Uber-x-12",
            title: 'UberXL',
            multiplier: 1.2,
            image: "https://links.papareact.com/5w8"
        },
        {
            id: "Uber-x-1",
            title: 'Uber LUX',
            multiplier: 1.75,
            image: "https://links.papareact.com/7pf"
        },

    ]
    return (
        <View>

            <SafeAreaView style={tw` flex-grow`}>
                <View >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('NavigatorCard')}
                        style={tw`absolute top-2 left-5 p-3 rounded-full z-50`}>
                        <Icon
                            name='chevron-left'
                            type='fontawesome'
                            size={35}
                        />
                    </TouchableOpacity>
                    <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item: { image, multiplier, title, id }, item }) => (
                        <TouchableOpacity
                            onPress={() => setSelected(item)}
                            style={tw`flex-row justify-between items-center px-5 ${id === selected?.id && 'bg-gray-200'}`}>
                            <Image
                                style={{
                                    width: 100,
                                    height: 100,
                                    resizeMode: 'contain'
                                }}
                                source={{ uri: image }}
                            />
                            <View style={tw`-ml-6`}>
                                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                                <Text>{travelTimeInformation?.duration?.text} Travel time</Text>
                            </View>
                            <Text style={tw`text-xl`}>
                                {
                                    Math.floor(travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 10

                                }
                            </Text>
                        </TouchableOpacity>
                    )}
                />

                <View>
                    <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
                        <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}
export default RideOptionsCard