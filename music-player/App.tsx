import { AudioSource, useAudioPlayer } from 'expo-audio';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { ActionButtons, PlayList, SearchForm } from './components';

export function App() {
  const player = useAudioPlayer();

  const [titleSearch, setTitleSearch] = useState<string>('');
  const [audioSource, setAudioSource] = useState<AudioSource>('');
  const [action, setAction] = useState<string>('pause');

  const handleActionChange = (value: string) => {
    setAction(value);
    if (!!audioSource) {
      if (value === 'play') {
        player.play();
      } else if (value === 'pause') {
        player.pause();
      }
    }
  };

  const handleSearch = (text: string) => {
    setTitleSearch(text);
  };

  const handleSelectItem = (uri: string) => {
    setAudioSource(uri);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.heading}>
        SUNSHINE55 MUSIC PLAYER
      </Text>
      <SearchForm onSearch={handleSearch} />
      <PlayList titleFilter={titleSearch} onSelectItem={handleSelectItem} />
      <Divider horizontalInset={true} />
      <View style={styles.bottomBtns}>
        <ActionButtons action={action} onActionChange={handleActionChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    height: '93%'
  },
  heading: {
    marginBottom: 10,
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 35,
    backgroundColor: '#eb5e28',
    color: 'white',
    textAlign: 'center'
  },
  bottomBtns: {
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 15
  }
});
