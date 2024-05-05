import { Text, SafeAreaView } from 'react-native';

import Button from '@/components/Button/Button';

const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>Do you want to be more productive?</Text>
      <Button text="Start your journey" />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
