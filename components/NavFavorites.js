import { View, Text } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed'
import tw from 'tailwind-react-native-classnames'
const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: "Code Street, Kawo, Kaduna"
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: "Alkali Road, Kaduna"
    },
]
const NavFavorites = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View
                    style={[tw`bg-gray-200`, { height: 0.5 }]}
                />
            )}
            renderItem={({ item: { location, destination, icon } }) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Icon
                        name={icon}
                        color={"white"}
                        type="ionicon"
                        style={tw`mr-2 rounded-full bg-gray-300 p-3`}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg ml-2`}>{location}</Text>
                        <Text style={tw`text-gray-500 ml-2`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}
export default NavFavorites