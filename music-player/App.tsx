import { Audio } from 'expo-av';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { ActionButtons, PlayList, SearchForm } from './components';

export function App() {
  const [titleSearch, setTitleSearch] = useState<string>('');
  const [audioSource, setAudioSource] = useState<string>('');
  const [action, setAction] = useState<string>('pause');

  const handleActionChange = async (value: string) => {
    if (!audioSource) {
      return;
    }
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: audioSource });
      if (value === 'play') {
        await sound.playAsync();
      } else if (value === 'pause') {
        console.log('Pause audio');
        await sound.pauseAsync();
      } else if (value === 'stop') {
        console.log('Stop audio');
        await sound.stopAsync();
        await sound.unloadAsync();
      }
      setAction(value);
    } catch (error) {
      console.error('Cannot play audio', error);
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
        SIMPLE MP3
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
