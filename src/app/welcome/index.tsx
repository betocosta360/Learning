import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';


export default function Welcome() {
    return (

        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flex: 1, marginTop: 90 }} >
                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <AntDesign name="rocket1" size={50} color="black" />
                    <Text style={{ fontSize: 40, fontWeight: '700', color: 'black' }}>Aprender</Text>
                </View>
                <View style={{
                    flex: 1, alignItems: 'center', justifyContent: 'center',
                    marginTop: 50
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'black',
                        width: '80%',
                        padding: 15,
                        alignItems: 'center',
                        borderRadius: 10,
                        marginBottom: 15
                    }}>
                        <Link href={'/login'}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: '600' }}>SIGN IN</Text>
                        </Link>

                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: '80%',
                        padding: 15,
                        alignItems: 'center',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: 'black',
                        marginBottom: 15
                    }}>
                        <Link href={'/register'}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>SIGN UP</Text>
                        </Link>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={{ fontSize: 15, fontWeight: '500', color: 'black', textAlign: 'center' }}>Ou use suas redes sociais</Text>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 20,
                marginBottom: 30
            }}>
                <TouchableOpacity style={{ marginLeft: 60 }}><AntDesign name="google" size={50} color="black" /></TouchableOpacity>
                <TouchableOpacity><AntDesign name="apple1" size={50} color="black" /></TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 60 }}><Entypo name="facebook" size={50} color="black" /></TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}