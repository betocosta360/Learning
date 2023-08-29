import { Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';



export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="light" />
      <View style={{ flex: 1, marginTop: 30, alignItems:'center' }} >
        <View>
          <AntDesign name="rocket1" size={50} color="black" />
        </View>
        <Text style={{ fontSize: 40, fontWeight: '700', color: 'black' }}>Aprender</Text>

      </View>
      <View style={{ flex: 2, justifyContent: 'center', marginBottom: '30%' }}>
        <Image source={require('../../assets/education.png')} resizeMode="stretch" style={{ width: 400, height: 400 }} />
      </View>

      <View>
        <TouchableOpacity style={{backgroundColor: 'black',width: '100%', marginLeft: 200,
            marginBottom: 30, borderRadius: 10}}>

          <View style={{
            padding:15,
            marginLeft: 30
            
          }}>

            <Link href={"/welcome"}>
              <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 20, color: 'white' }}>ENTRAR</Text>
              <Entypo name="chevron-right" size={20} color="white"  />
            </Link>

          </View>
        </TouchableOpacity>


      </View>



    </SafeAreaView>
  );
}
