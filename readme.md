# Uber Build Clone
Video ends at 6:30 \


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
                                borderRadius: 0
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