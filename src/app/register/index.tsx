import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';


export default function Register() {
    return (

        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}  >
            <View style={{ flex: 1, marginTop: '10%' }} >
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <AntDesign name="rocket1" size={50} color="black" />
                    <Text style={{ fontSize: 40, fontWeight: '700', color: 'black' }}>Aprender</Text>
                </View>
                <View style={{
                     alignItems: 'center', justifyContent: 'center',
         
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name="mail" size={30} color="gray" style={{ position: 'absolute', marginTop: 15, marginLeft: 310 }} />
                        <TextInput placeholder=' Digite Seu Nome' style={{

                            width: '90%',
                            padding: 15,
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'black',
                            marginBottom: 15
                        }} />
                    </View>


                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name="key" size={30} color="gray" style={{ position: 'absolute', marginTop: 15, marginLeft: 310 }} />
                        <TextInput placeholder=' Digite Seu E-mail' style={{

                            width: '90%',
                            padding: 15,
                            justifyContent: 'space-between',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'black',
                            marginBottom: 15
                        }} />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name="key" size={30} color="gray" style={{ position: 'absolute', marginTop: 15, marginLeft: 310 }} />
                        <TextInput placeholder=' Digite Sua Senha' style={{

                            width: '90%',
                            padding: 15,
                            justifyContent: 'space-between',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'black',
                            marginBottom: 15
                        }} />
                    </View>

                    <TouchableOpacity style={{
                        width: '90%',
                        padding: 15,
                        alignItems: 'center',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: 'black',
                        marginBottom: 20
                    }}>
                        <Link href={'/home'}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>ENTRAR</Text>
                        </Link>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 15, fontWeight: '500', color: 'black', textAlign: 'center'}}>Ou use suas redes sociais</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 20,
                    
                }}>
                    <TouchableOpacity style={{ marginLeft: 60 }}><AntDesign name="google" size={40} color="black" /></TouchableOpacity>
                    <TouchableOpacity><AntDesign name="apple1" size={40} color="black" /></TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 60 }}><Entypo name="facebook" size={40} color="black" /></TouchableOpacity>

                </View>
            </View>


        </KeyboardAwareScrollView>
    )
}