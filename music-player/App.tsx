import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider, SegmentedButtons, Text } from 'react-native-paper';
import uuid from 'react-native-uuid';
import { PlayList, SearchForm, Song } from './components';

const initSongs: Song[] = [
  {
    id: uuid.v4(),
    title: 'Midori no Asa',
    uri: ''
  }
];

function renderPlayList(songs: Song[]) {
  if (songs.length === 0) {
    return (
      <ScrollView style={{ paddingTop: 50 }}>
        <Text variant="titleLarge" style={{ textAlign: 'center' }}>
          Your list is empty
        </Text>
      </ScrollView>
    );
  }
  return <PlayList songs={songs} />;
}

export function App() {
  const [songs, setSongs] = useState(initSongs);
  const [action, setAction] = useState('');

  const handleSearch = (text: string) => {
    const nextSongs = initSongs.filter((song) => {
      const { title } = song;
      return title.includes(text);
    });
    setSongs(nextSongs);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.heading}>
        CHI CHI
      </Text>
      <SearchForm onSearch={handleSearch} />
      {renderPlayList(songs)}
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
