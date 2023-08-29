import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome,  } from '@expo/vector-icons';
import { Link } from "expo-router";

export default function Settings() {
    const [showSobreModal, setShowSobreModal] = useState(false);
   
    const [showContratoModal, setShowContratoModal] = useState(false);
    const [showPoliticaModal, setShowPoliticaModal] = useState(false);

    const openSobreModal = () => setShowSobreModal(true);
    const closeSobreModal = () => setShowSobreModal(false);

   

    const openContratoModal = () => setShowContratoModal(true);
    const closeContratoModal = () => setShowContratoModal(false);

    const openPoliticaModal = () => setShowPoliticaModal(true);
    const closePoliticaModal = () => setShowPoliticaModal(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ backgroundColor: 'black', height: 180, position: 'relative', alignItems: 'center', marginTop: -30 }}>
            
                <View style={{ position: 'absolute', flexDirection: 'column', marginTop: 50 }}>
                    <AntDesign name="rocket1" style={{ fontSize: 30, color: 'white', textAlign: 'center' }} />
                    <Text style={{ fontSize: 30, fontWeight: '700', color: 'white' }}>Aprender</Text>
                </View>
            </View>
            <View style={{ flex: 1, marginTop: 30, marginLeft: 20 }}>
                <TouchableOpacity style={{ marginBottom: 20 }} onPress={openSobreModal}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Sobre</Text>
                </TouchableOpacity>

                

                <TouchableOpacity style={{ marginBottom: 20 }} onPress={openContratoModal}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Contrato de usuário</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginBottom: 20 }} onPress={openPoliticaModal}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Política de privacidade e cookies</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginBottom: 20 }} >
                    <Link href={"/home"}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Sair</Text>
                    </Link>
                    
                </TouchableOpacity>
            </View>

            {/* Modals */}
            <Modal visible={showSobreModal} transparent={true} onRequestClose={closeSobreModal}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 1)' }}>
                    <Text style={{fontSize: 25, fontWeight: '800', marginBottom: 20, color:'white'}}>SOBRE</Text>
                    <Text style={{fontSize: 20, fontWeight: '500', color:"white", marginBottom: 10, padding: 10, textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nobis consequuntur illum, incidunt repellat tempora voluptatum adipisci quaerat quia sit, exercitationem hic recusandae pariatur omnis eligendi labore neque deleniti enim?</Text>
                    <TouchableOpacity style={{backgroundColor:'white', marginLeft: 20, marginRight: 20, width:"50%", padding: 15, borderRadius: 10, alignItems:'center', justifyContent:'center'}} onPress={closeSobreModal}>
                        <Text style={{fontSize: 18, fontWeight:'700'}}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            

            <Modal visible={showContratoModal} transparent={true} onRequestClose={closeContratoModal}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 1)' }}>
                <Text style={{fontSize: 25, fontWeight: '800', marginBottom: 20, color:'white'}}>Contrato de usuário</Text>
                <Text style={{fontSize: 20, fontWeight: '500', color:"white", marginBottom: 10, padding: 10, textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nobis consequuntur illum, incidunt repellat tempora voluptatum adipisci quaerat quia sit, exercitationem hic recusandae pariatur omnis eligendi labore neque deleniti enim?</Text>
                    <TouchableOpacity style={{backgroundColor:'white', marginLeft: 20, marginRight: 20, width:"50%", padding: 15, borderRadius: 10, alignItems:'center', justifyContent:'center'}} onPress={closeContratoModal}>
                        <Text style={{fontSize: 18, fontWeight:'700'}}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <Modal visible={showPoliticaModal} transparent={true} onRequestClose={closePoliticaModal}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 1)' }}>
                <Text style={{fontSize: 25, fontWeight: '800', marginBottom: 20, color:'white'}}>Política de privacidade e cookies</Text>
                <Text style={{fontSize: 20, fontWeight: '500', color:"white", marginBottom: 10, padding: 10, textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nobis consequuntur illum, incidunt repellat tempora voluptatum adipisci quaerat quia sit, exercitationem hic recusandae pariatur omnis eligendi labore neque deleniti enim?</Text>
                    <TouchableOpacity style={{backgroundColor:'white', marginLeft: 20, marginRight: 20, width:"50%", padding: 15, borderRadius: 10, alignItems:'center', justifyContent:'center'}} onPress={closePoliticaModal}>
                        <Text style={{fontSize: 18, fontWeight:'700'}}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
