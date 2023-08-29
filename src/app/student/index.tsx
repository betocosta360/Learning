import React from 'react-native'
import { SafeAreaView, View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome} from '@expo/vector-icons';
import { ProgressBar} from 'react-native-paper';
import { Link } from "expo-router";


export default function StudentArea() {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ backgroundColor: 'black', height: 300, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, position: 'relative', marginBottom: 30 }}>
            <View style={{ flex: 1, flexDirection: 'row', padding: 15, justifyContent: 'space-between', margin: 15, marginTop: 10 }}>
                <TouchableOpacity>
                    <Link href={'/home'}>
                    <FontAwesome name="home" size={20} color="white" />
                    </Link>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Link href={'/profile'}>
                    <FontAwesome name="user" size={20} color="white" />
                    </Link>
                </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <View style={{ backgroundColor: 'gray', width: 140, height: 140, padding: 20, borderRadius: 140, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 50, fontWeight: '800' }}>RC</Text>
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 40 }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>Roberto Costa de Cerqueira</Text>
                    </View>
                </View>

            </View>
            <View style={{
                marginTop: -55,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
                marginLeft: 40,
                marginRight: 40,
                borderRadius: 10,
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.5,
                shadowRadius: 4,
                elevation: 5,
                marginBottom: 25,
            }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>cursos matriculados</Text>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginBottom: 5 }}>Seu progresso</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 10 }}>
                <View style={{ backgroundColor: 'black', width: 65, height: 65, marginLeft: 35, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                    <Fontisto name="swift" size={55} color="white" />
                </View>
                <View style={{ borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, width: '65%', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: '800', }}>Swift Development</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', marginBottom: 3 }}>Assistidas 7 de 42 aulas</Text>
                        <ProgressBar progress={0.2} style={{marginRight: 15, marginTop: 5.5}}/>
                    </View>

                </View>
            </View>
            <View style={{ marginLeft: 30, marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Finalizados</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <ScrollView>
                    <View style={{ marginBottom: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 10 }}>
                <View style={{ backgroundColor: 'black', width: 65, height: 65, marginLeft: 35, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems:'center', justifyContent:'center' }}>
                <MaterialCommunityIcons name="react" size={55} color="white" />
                    
                </View>
                <View style={{ borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, width: '65%', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: '800', }}>React Native Development</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', marginBottom: 3 }}>Aulas Completadas</Text>
                        <ProgressBar progress={1} style={{marginRight: 15, marginTop: 5.5}}/>
                    </View>

                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 10 }}>
                <View style={{ backgroundColor: 'black', width: 65, height: 65, marginLeft: 35, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems:'center', justifyContent:'center' }}>
                <MaterialCommunityIcons name="language-javascript" size={65} color="white" />
                </View>
                <View style={{ borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, width: '65%', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: '800', }}>JavaScript Development</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', marginBottom: 3 }}>Aulas Completadas</Text>
                        <ProgressBar progress={1} style={{marginRight: 15, marginTop: 5.5}}/>
                    </View>

                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 10 }}>
                <View style={{ backgroundColor: 'black', width: 65, height: 65, marginLeft: 35, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems:'center', justifyContent:'center' }}>
                <MaterialCommunityIcons name="language-java" size={60} color="white" />
                </View>
                <View style={{ borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, width: '65%', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: '800', }}>Java Development</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', marginBottom: 3 }}>Aulas Completadas</Text>
                        <ProgressBar progress={1} style={{marginRight: 15, marginTop: 5.5}}/>
                    </View>

                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 20 }}>
                <View style={{ backgroundColor: 'black', width: 65, height: 65, marginLeft: 35, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems:'center', justifyContent:'center' }}>
                <MaterialCommunityIcons name="language-python" size={60} color="white" />
                </View>
                <View style={{ borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, width: '65%', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: '800', }}>Python Development</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', marginBottom: 3 }}>Aulas Completadas</Text>
                        <ProgressBar progress={1} style={{marginRight: 15, marginTop: 5.5}}/>
                    </View>

                </View>
            </View>

                    </View>
                </ScrollView>

            </ScrollView>

        </SafeAreaView>
    )
}