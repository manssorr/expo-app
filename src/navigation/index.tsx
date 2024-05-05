import { NavigationContainer } from '@react-navigation/native';

import AuthStackNavigator from './AuthStackNavigator';

const Navigator = () => {
  const user = true;
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
