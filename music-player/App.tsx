import { createContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, SegmentedButtons, Text } from 'react-native-paper';
import { PlayList, SearchForm } from './components';
import { AudioSource } from 'expo-audio';


export function App() {
  const [titleSearch, setTitleSearch] = useState<string>('');
  const [audioSource, setAudioSource] = useState<AudioSource>('');
  const [action, setAction] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.heading}>
        SUNSHINE55 MUSIC PLAYER
      </Text>
      <SearchForm onSearch={(text) => setTitleSearch(text)} />
      <PlayList titleFilter={titleSearch} onSelectItem={(uri) => setAudioSource(uri)} />
      <Divider horizontalInset={true} />
      <View style={styles.bottomBtns}>
        <SegmentedButtons
          value={action}
          onValueChange={setAction}
          theme={{
            colors: {
              secondaryContainer: '#f7b9a1'
            }
          }}
          buttons={[
            {
              value: 'prev',
              label: 'Previous',
              icon: 'skip-previous'
            },
            {
              value: 'play',
              label: 'Play',
              icon: 'play-pause'
            },
            {
              value: 'next',
              label: 'Next',
              icon: 'skip-next'
            }
          ]}
        />
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
