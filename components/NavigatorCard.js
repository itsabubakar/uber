import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';


const NavigatorCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Day</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where to'
                        nearbyPlacesAPI='GooglePlacesSearch'
                        enablePoweredByContainer={false}
                        fetchDetails={true}
                        debounce={400}
                        styles={{
                            container: {
                                backgroundColor: "white",
                                paddingTop: 20,
                                flex: 0,
                            },
                            textInput: {
                                fontSize: 18,
                                backgroundColor: "#dddddf",
                                borderRadius: 0,
                            },
                            textInputContainer: {
                                fontSize: 18,
                                paddingHorizontal: 20,
                                paddingBottom: 0,
                            },
                        }}
                        query={{
                            key: GOOGLE_MAPS_KEY,
                            language: 'en'
                        }}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                }))
                            navigation.navigate("RideOptionsCard")
                        }}
                    />
                </View>
                <NavFavorites />
            </View>

            <View
                style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('RideOptionsCard')}
                    style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
                >
                    <Icon
                        name='car'
                        type='font-awesome'
                        color="white"
                        size={16}
                    />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
                >
                    <Icon
                        name='fast-food-outline'
                        type='ionicon'
                        color="black"
                        size={16}
                    />
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default NavigatorCard