import { StyleSheet, Text, View } from 'react-native';

interface IButtonProps {
  text: string;
  capitalized?: boolean;
}

const Button = (props: IButtonProps) => {
  // constants props
  const { capitalized = true } = props;

  // dynamic props
  let { text } = props;

  // operations
  if (capitalized) {
    text = text.toUpperCase();
  }

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
