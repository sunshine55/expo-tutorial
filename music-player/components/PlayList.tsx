import { List } from 'react-native-paper';

export type Song = {
  id: string,
  title: string,
  uri?: string
};

export type PlayListProps = {
  songs: Song[]
};

export function PlayList(props: PlayListProps) {
  const list = props.songs.map(song => (
    <List.Item
      key={song.id}
      title={song.title}
      left={() => (<List.Icon icon="music-note" />)}
    />
  ));

  return (
    <List.Section>
      {list}
    </List.Section>
  );
};
