import * as React from 'react';
import { FAB, Portal } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export function FloatingActionButton() {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: { open: boolean }) => setState({ open });

  const { open } = state;

  return (
    <Portal>
      <FAB.Group
        open={open}
        visible
        icon={open ? 'calendar-today' : 'plus'}
        actions={[
          { icon: 'plus', onPress: () => console.log('Pressed add') },
          {
            icon: 'star',
            label: 'Star',
            onPress: () => console.log('Pressed star'),
          },
          {
            icon: 'email',
            label: 'Email',
            onPress: () => console.log('Pressed email'),
          },
          {
            icon: 'bell',
            label: 'Remind',
            onPress: () => console.log('Pressed notifications'),
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
        style={styles.fabGroup}
        fabStyle={styles.fab}
      />
    </Portal>
  );
}

const styles = StyleSheet.create({
  fabGroup: {
    paddingBottom: 80, // Adjust this value to move it higher from bottom
  },
  fab: {
    borderRadius: 50, // Makes the FAB fully rounded
    width: 56,
    height: 56,
    backgroundColor: '#007AFF', // Change the color as needed
  },
});
