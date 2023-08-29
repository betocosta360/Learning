import React from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { Link } from "expo-router";


export default function Home() {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: 'black', height: 190, borderBottomLeftRadius: 40, position: 'relative' }}>
                <View style={{ marginTop: 20,alignItems:'center' }} >
                    <View>
                        <AntDesign name="rocket1" size={30} color="white" />
                    </View>
                    <Text style={{ fontSize: 30, fontWeight: '700', color: 'white' }}>Aprender</Text>

                </View>
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 105 }}>
                <TextInput placeholder="Pesquisar" style={{
                    backgroundColor: 'white',
                    fontSize: 16,
                    marginLeft: 25,
                    width: '90%',
                    padding: 15,
                    justifyContent: 'space-between',
                    borderRadius: 10,
                    borderWidth: 1,
                    marginBottom: 50
                }} />
                <FontAwesome
                    name="search"
                    size={24}
                    color="gray"
                    style={{
                        flex: 1,
                        position: 'absolute',
                        marginTop: 15,
                        marginLeft: 330
                    }} />
            </View>


            <View style={{
                marginLeft: 10,
                width: '100%',

            }}>
                <Text style={{
                    marginLeft: 20,
                    marginTop: 15,
                    fontSize: 18,
                    fontWeight: "600"
                }}>
                    Recomendados para você
                </Text>

                <View style={{
                    width: '100%',
                    alignItems: 'center',
                    marginTop: 5,
                    marginBottom: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                }}>
                    <ScrollView showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                        <View style={{ marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
                            <FontAwesome5 name="swift" size={100} color="black" />
                            <Text style={{ textAlign: 'center' }}>Swift</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
                            <FontAwesome5 name="python" size={100} color="black" />
                            <Text style={{ textAlign: 'center' }}>Python</Text>
                        </View>

                        <View style={{ marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
                            <Fontisto name="java" size={100} color="black" />
                            <Text style={{ textAlign: 'center', marginTop: 8 }}>Java</Text>
                        </View>

                        <View style={{ marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
                            <FontAwesome5 name="react" size={100} color="black" />
                            <Text style={{ textAlign: 'center' }}>React</Text>
                        </View>

                        <View style={{ marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
                            <Ionicons name="logo-javascript" size={100} color="black" />
                            <Text style={{ textAlign: 'center' }}>JavaScript</Text>
                        </View>
                    </ScrollView>

                </View>

            </View>
            <Text style={{
                marginTop: 8,
                marginLeft: 30,
                fontSize: 18,
                fontWeight: "600"
            }}>
                Últimos cursos vistos
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ marginTop: 20, marginRight: 5, paddingHorizontal: 10, marginBottom: 20 }}>


                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                marginBottom: 10,
                                borderWidth: 0.5,
                                borderColor: 'gray',
                                padding: 15,
                                borderRadius: 7,
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                            }}
                        >
                            <Link href={"/course"}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>Back-End</Text>
                                    <Text style={{ fontSize: 13, fontWeight: "400", color: 'gray' }}>Web Development Course</Text>
                                </View>
                            </Link>

                            <AntDesign name="playcircleo" size={30} color="black" style={{ marginRight: 20, marginTop: 5 }} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
