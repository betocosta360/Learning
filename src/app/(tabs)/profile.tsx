import React from "react";
import { View, Text, Image, } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function Profile() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', marginTop: -20 }}>

            <View style={{ backgroundColor: 'black', width: '100%', height: 210, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <View style={{
                    backgroundColor: 'white',
                    marginTop: 20,
                    width: 120,
                    height: 120,
                    borderRadius: 120,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image resizeMode='center' source={require('../../../assets/avatar.png')}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 120
                        }} />
                </View>
                <View style={{ marginTop: 10, marginBottom: 30 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginBottom: 10 }}>Roberto C. de Cerqueira</Text>

                </View>
            </View>

            <View style={{ flexDirection: 'column', width: '100%', position: "absolute", marginTop: 210, marginBottom: 20 }}>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 20,
                    marginRight: 20,
                    padding: 10,
                    borderWidth: 0.1,
                    borderColor: "black",
                    borderRadius: 1,
                    backgroundColor: 'white',
                    elevation: 10,
                    marginBottom: 10,
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 15,
                }}>
                    <MaterialCommunityIcons name="account" size={24} color="gray" />
                    <TextInput
                        placeholder="Seu Nome"
                        style={{
                            fontSize: 15,
                            marginLeft: 10,
                            color: 'gray',
                            flex: 1,
                        }}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 20,
                    marginRight: 20,
                    padding: 10,
                    borderWidth: 0.1,
                    borderColor: "black",
                    borderRadius: 1,
                    backgroundColor: 'white',
                    elevation: 10,
                    marginBottom: 10,
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 15,
                }}>
                    <Feather name="mail" size={24} color="gray" />
                    <TextInput
                        placeholder="Seu E-mail"
                        style={{
                            fontSize: 15,
                            marginLeft: 10,
                            flex: 1,
                        }}
                    />
                </View>
            </View>

            <View>
                <View style={{ marginTop: 90 }}>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20,
                        marginRight: 20,
                        padding: 10,
                        borderWidth: 0.1,
                        borderColor: "black",
                        borderRadius: 1,
                        backgroundColor: 'white',
                        elevation: 10,
                        marginBottom: 10,
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 15,
                    }}>
                        <Ionicons name="notifications" size={24} color="gray" />
                        <TextInput
                            placeholder="Notificações"
                            style={{
                                fontSize: 15,
                                marginLeft: 10,
                                color: 'gray',
                                flex: 1,
                            }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20,
                        marginRight: 20,
                        padding: 10,
                        borderWidth: 0.1,
                        borderColor: "black",
                        borderRadius: 1,
                        backgroundColor: 'white',
                        elevation: 10,
                        marginBottom: 10,
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 15,
                    }}>
                        <FontAwesome5 name="key" size={24} color="gray" />
                        <TextInput
                            placeholder="Password"
                            style={{
                                fontSize: 15,
                                marginLeft: 10,
                                flex: 1,
                            }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20,
                        marginRight: 20,
                        padding: 10,
                        borderWidth: 0.1,
                        borderColor: "black",
                        borderRadius: 1,
                        backgroundColor: 'white',
                        elevation: 10,
                        marginBottom: 10,
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 15,
                    }}>
                        <FontAwesome5 name="whatsapp" size={24} color="gray" />
                        <TextInput
                            placeholder="Telefone"
                            style={{
                                fontSize: 15,
                                marginLeft: 10,
                                flex: 1,
                            }}
                        />
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}
