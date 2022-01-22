import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native'
import FavoriteNavigation from '../navigation/FavoriteNavigation'
import PokedexNavigation from '../navigation/PokedexNavigation'
import AccountNavigation from '../navigation/AccountNavigation'


// Tab navigation
const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Favorite" component={FavoriteNavigation} options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({color, size}) => (
                    <Icon name="heart" size={size} color={color} />
                )
            }}/>
            <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
                tabBarLabel: '',
                tabBarIcon: () => renderPokeball()
            }}/>
            <Tab.Screen name="Account" component={AccountNavigation} options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({color, size}) => (
                    <Icon name="user" size={size} color={color} />
                )
            }}/>
        </Tab.Navigator>
    )
}


// Funcion para retornar la imagen de pokedex de src/assets
function renderPokeball() {
    return (
        <Image source={require('../assets/pokeball.png')} style={{width: 50, height: 50, top: -15}} />
    )
}