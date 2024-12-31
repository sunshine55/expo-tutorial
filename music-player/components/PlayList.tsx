import { ScrollView } from 'react-native';
import { List, Text } from 'react-native-paper';
import uuid from 'react-native-uuid';

const AUDIO_ASSETS_URI = 'https://github.com/sunshine55/expo-tutorial/raw/refs/heads/master/music-player/assets/audio';
// const AUDIO_ASSETS_URI = './assets/audio';

const availableSongs: Song[] = [
  {
    id: uuid.v4(),
    title: 'MidoriNoAsa_KimioEto.mp3'
  }
];

export type Song = {
  id: string,
  title: string
};

export type PlayListProps = {
  titleFilter?: string,
  onSelectItem: (uri: string) => void
};

export function PlayList(props: PlayListProps) {
  
  const handlePress = (songId: string) => {
    const nextSelectedSong: Song = availableSongs.find(s => s.id === songId) ?? availableSongs[0];
    props.onSelectItem(`${AUDIO_ASSETS_URI}/${nextSelectedSong.title}`);
  };

  const filterList = !!props.titleFilter ?
    availableSongs.filter(s => s.title === props.titleFilter) :
    [...availableSongs];

  if (filterList.length === 0) {
    return (
      <ScrollView style={{ paddingTop: 50 }}>
        <Text variant="titleLarge" style={{ textAlign: 'center' }}>
          Your list is empty
        </Text>
      </ScrollView>
    );
  }
  return (
    <List.Section>
      {
        filterList.map(song => (
          <List.Item
            key={song.id}
            title={song.title}
            left={() => (<List.Icon icon="music-note" />)}
            onPress={() => handlePress(song.id)}
          />
        ))
      }
    </List.Section>
  );
};
