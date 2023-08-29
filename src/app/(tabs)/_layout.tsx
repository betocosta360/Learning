import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabRoutesLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'black',
                    height: 70,
                    elevation: 0,
                    width: '100%',
                },
                tabBarIconStyle: {
                    marginTop: 10,
                    
                },
                tabBarLabelStyle: {
                    marginBottom: 8, // Adicione margem inferior ao texto
                    fontSize: 12,   // Tamanho da fonte do texto
                    color: 'white', // Cor do texto
                },
                tabBarActiveTintColor: 'blue', // Cor do ícone e do texto da aba ativa
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="home" style={{ fontSize: 25, color: color }} />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="person" style={{ fontSize: 25, color: color }} />
                    ),
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Configurações',
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="settings" style={{ fontSize: 25, color: color }} />
                    ),
                }}
            />
        </Tabs>
    );
}
