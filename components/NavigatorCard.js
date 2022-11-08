import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import { SectionList } from 'react-native';


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
                                height: '100%'
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
            </View>
        </SafeAreaView>
    )
}
export default NavigatorCard