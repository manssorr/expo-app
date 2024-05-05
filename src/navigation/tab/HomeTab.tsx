import type { RootBottomTabParamList } from '@/navigation/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const HomeTab = (): React.ReactElement => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Today" component={Today} />
      <Tab.Screen name="Completed" component={Completed} />
      <Tab.Screen name="CategoriesStack" component={CategoriesStack} />
    </Tab.Navigator>
  );
};
