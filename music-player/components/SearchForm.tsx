import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { GestureResponderEvent, View } from 'react-native';

export type SearchFormProps = {
  text?: string,
  onSearch: (text: string) => void
}

export function SearchForm(props: SearchFormProps) {
  const [text, setText] = useState(props.text || '');

  const handleSubmit = (event: GestureResponderEvent) => {
    if (!!text) {
      event.preventDefault();
      props.onSearch(text);
      setText('');
    }
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <TextInput
        label="Search..."
        value={text}
        mode="outlined"
        activeOutlineColor="#eb5e28"
        onChangeText={(text) => setText(text)}
        right={
          <TextInput.Icon
            icon="filter"
            onPress={handleSubmit}
            color="#eb5e28"
          />
        }
      />
    </View>
  );
};
