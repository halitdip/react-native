import React from "react"
import { HomePage, Profile, Test,ReadQr } from "../screens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

const pages = [
  {
    name: 'HomePage',
    component: HomePage,
    tapBarLabel: 'Yeni Kabul',
    icon: 'qr-code',
    isMenu: 1
  },
  {
    name: 'Profile',
    component: Profile,
    tapBarLabel: 'Kabul Geçmişi',
    icon: 'account-circle',
    isMenu: 1
  },
  {
    name: 'Test',
    component: Test,
    tapBarLabel: 'Test',
    icon: '',
    isMenu: 0
  },
  {
    name: 'ReadQr',
    component: ReadQr,
    tapBarLabel: 'ReadQr',
    icon: '',
    isMenu: 0
  },
  

]

const authStack = () => {

  return (
    <Tab.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
      {pages.map((page) =>
        page.isMenu ? (
          <Tab.Screen
            key={page.name}
            name={page.name}
            component={page.component}
            options={{
              tabBarLabel: page.tapBarLabel,
              tabBarItemStyle:{   borderTopWidth:3,borderTopColor:'#00bad3'},
              tabBarActiveTintColor:'#00bad3',
              tabBarActiveBackgroundColor : 'rgba(6, 182, 212, 0.16)',
              tabBarIcon: ({ color }) => (
                page.icon ? <MaterialIcons name={page.icon} color={color} size={25} /> : null
              )
            }}
          />
        ) : (
          <Tab.Screen
            key={page.name}
            name={page.name}
            component={page.component}
            options={{
              tabBarButton: () => null,  // Bu sayfayı menüde gizlemek için
              tabBarLabel: () => null,   // Bu sayfayı menüde gizlemek için
            }}
          />
        )
      )}
    </Tab.Navigator>
  )
}

export default authStack 