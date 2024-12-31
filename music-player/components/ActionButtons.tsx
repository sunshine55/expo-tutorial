import React from 'react';
import { SegmentedButtons } from 'react-native-paper';

export type ActionButtonsProps = {
  action: string;
  onActionChange: (value: string) => void;
}

export function ActionButtons(props: ActionButtonsProps) {
  return (
    <SegmentedButtons
      value={props.action}
      onValueChange={props.onActionChange}
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
          icon: 'play'
        },
        {
          value: 'pause',
          label: 'Pause',
          icon: 'pause'
        },
        {
          value: 'next',
          label: 'Next',
          icon: 'skip-next'
        }
      ]}
    />
  );
}