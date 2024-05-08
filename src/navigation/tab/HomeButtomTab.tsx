import type { RootBottomTabParamList } from '@/navigation/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../stack/HomeStack';
import TodayScreen from '@/screens/today/TodayScreen';
import CompletedScreen from '@/screens/completed/CompletedScreen';
import CategoriesStack from '@/navigation/stack/CategoriesStack';
import Icon from '@/components/shared/Icon';
import { useTheme } from '@shopify/restyle';
import type { Theme } from '@/utils/theme';

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const HomeButtomTab = (): React.ReactElement => {
  const theme: Theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: theme.colors.gray550,
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={{
          title: 'Today',
          tabBarIcon: ({ color }) => <Icon name="calendar" color={color} />,
        }}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        options={{
          title: 'Completed',
          tabBarIcon: ({ color }) => <Icon name="completed" color={color} />,
        }}
      />
      <Tab.Screen
        name="CategoriesStack"
        component={CategoriesStack}
        options={{
          title: 'Categories',
          tabBarIcon: ({ color }) => <Icon name="categories" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeButtomTab;
