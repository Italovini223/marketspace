import { Platform } from "react-native";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { useTheme } from "native-base";

import { Home } from "@screens/Home";
import { Product } from "@screens/Product";
import { MyProducts } from "@screens/MyProduct";

import { House, Tag, SignOut } from 'phosphor-react-native'
type AppRoutes = {
  home: undefined;
  product: undefined;
  myProducts: undefined;
  logout: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>
export function AppRoutes(){
  const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

  const { sizes, colors } = useTheme()
  const iconsSize = sizes[6]


  return(
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.gray[700],
      tabBarInactiveTintColor: colors.gray[400],
      tabBarStyle: {
        backgroundColor: colors.gray[100],
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 56,
      }
      
    }}>
      <Screen 
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House 
              color={color}
              size={iconsSize}
            />
          )
        }}
      />

      <Screen 
        name="myProducts"
        component={MyProducts}
        options={{
          tabBarIcon: ({ color }) => (
            <Tag 
              color={color}
              size={iconsSize}
            />
          )
        }}
      />

      <Screen 
        name="product"
        component={Product}
        options={{
          tabBarButton: () => null
        }}
      />

    </Navigator>
  )
}