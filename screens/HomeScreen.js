import {
    SafeAreaView
} from 'react-native-safe-area-context';

import { Image, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice'

// directions api
// places api
// distance matrix api

const HomeScreen = () => {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: 'https://links.papareact.com/gzs'
                    }}
                />
                <GooglePlacesAutocomplete
                    placeholder='Where From'
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    styles={{
                        container: {
                            flex: 0
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}

                    query={{
                        key: GOOGLE_MAPS_KEY,
                        language: 'en'
                    }}
                    minLength={2}
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null))
                    }}
                    fetchDetails={true}
                    returnKeyType={'search'}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen
const styles = StyleSheet.create({
})