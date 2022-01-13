import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FavoriteScreen from '../screens/Favorite'
import AccountScreen from '../screens/Account'
import PokedexScreen from '../screens/Pokedex'

// Tab navigation
const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Pokedex" component={PokedexScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    )
}
