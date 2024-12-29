import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { GestureResponderEvent, View } from 'react-native';

export type SearchFormProps = {
  onSearch: (text: string) => void
}

export function SearchForm(props: SearchFormProps) {
  const [text, setText] = useState<string>('');

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
            onPress={() => {
              setText('');
              props.onSearch(text)
            }}
            color="#eb5e28"
          />
        }
      />
    </View>
  );
};
