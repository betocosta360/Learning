import React, { useState } from "react";
import { View, Text, SafeAreaView,  TouchableOpacity } from 'react-native'
import { FontAwesome,  } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

import { Link } from "expo-router";



export default function Learn() {
    
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: 'black', height: 350, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, position: 'relative' }}>
                <View style={{ flex: 1, flexDirection: 'row', padding: 15, justifyContent: 'space-between', margin: 15 }}>
                <TouchableOpacity>
                    <Link href={'/home'}>
                    <FontAwesome name="home" size={24} color="white" />
                    </Link>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Link href={'/profile'}>
                    <FontAwesome name="user" size={24} color="white" />
                    </Link>
                </TouchableOpacity>
                </View>
            </View>
            <View style={{
                position: 'absolute',
                marginTop: 75,
                backgroundColor: 'white',
                width: 340,
                height: 260,
                marginLeft: 25,
                borderRadius: 20
            }}>

                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Design de App's & Websites</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>For Biginners</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Ionicons name="time-outline" size={24} color="black" style={{marginTop: 5 }} />
                        <Text style={{ fontSize: 18, fontWeight: '300', marginLeft: 5, marginTop: 5 }}>8 Horas</Text>
                    </View>

                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{
                        marginTop: -5,
                        borderWidth: 3,
                        width: 140,
                        height: 140,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 100,
                        marginBottom: 10
                    }}>
                        <Text style={{ fontSize: 40, fontWeight: '900' }}>56%</Text>
                    </View>
                </View>
            </View>



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
                            <Link href={"/student"}>
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
