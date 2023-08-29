import React from 'react-native'
import { SafeAreaView, View, Text, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from 'expo-router';


export default function Course() {
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between', margin: 15 }}>
                <TouchableOpacity>
                    <Link href={'/home'}>
                    <FontAwesome name="home" size={24} color="black" />
                    </Link>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Link href={'/profile'}>
                    <FontAwesome name="user" size={24} color="black" />
                    </Link>
                </TouchableOpacity>
                
                
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -30 }}>
                <Image source={require('../../../assets/teacher.png')} resizeMode="stretch" style={{ width: 400, height: 250 }} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 10 }}>Design de App's &  Websites</Text>
                <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 'auto', textAlign: 'center', padding: 10, }}>
                    A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para
                    preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, padding: 15 }}>
                <View style={{
                    marginLeft: 20,
                    borderWidth: 0.5,
                    borderColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    width: 115,
                    height: 115,
                    shadowColor: 'black', // Cor da sombra
                    shadowOffset: { width: 0, height: 8 }, // Deslocamento vertical positivo
                    shadowOpacity: 0.5, // Opacidade da sombra
                    shadowRadius: 4, // Raio da sombra
                    elevation: 5, // Elevação da sombra no Android
                    backgroundColor: 'white', // Cor de fundo da View
                    marginBottom: 15, // Espaço abaixo da View para a sombra visível
                }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}> 8 Horas </Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, marginTop: -15 }}>_____</Text>
                    <Text style={{ fontSize: 12, fontWeight: '500' }}>Teoria e Prática</Text>
                </View>

                <View style={{
                    marginRight: 25,
                    borderWidth: 0.5,
                    borderColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    width: 115,
                    height: 115,
                    shadowColor: 'black', // Cor da sombra
                    shadowOffset: { width: 0, height: 8 }, // Deslocamento vertical positivo
                    shadowOpacity: 0.5, // Opacidade da sombra
                    shadowRadius: 4, // Raio da sombra
                    elevation: 5, // Elevação da sombra no Android
                    backgroundColor: 'white', // Cor de fundo da View
                    marginBottom: 20, // Espaço abaixo da View para a sombra visível
                }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}> 42 </Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, marginTop: -15 }}>_____</Text>
                    <Text style={{ fontSize: 12, fontWeight: '500' }}> Leitura </Text>
                </View>
            </View>


            <View style={{ alignItems: 'center', marginBottom: -30, width: '100%', shadowColor: 'black', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5, shadowRadius: 4, elevation: 5, marginBottom: 20 }}>
                <Link href={'/learn'}>
                    <TouchableOpacity style={{ backgroundColor: 'black', padding: 20, borderRadius: 10, flexDirection: 'row', width: '100%' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingRight: 120, textAlign: 'left' }}>Vamos começar</Text>
                        <FontAwesome name="chevron-right" size={20} color="white" style={{ marginTop: 5 }} />
                    </TouchableOpacity>
                </Link>
            </View>

        </SafeAreaView>
    )
}
