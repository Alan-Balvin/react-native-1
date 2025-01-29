import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function MazatlanScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/mazatlan-header.jpg')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenidos a Mazatlán!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Descubre Mazatlán</ThemedText>
        <ThemedText>
          Mazatlán, conocido como "La Perla del Pacífico", es famoso por sus playas, su malecón y su vibrante cultura.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Image
          source={require('@/assets/images/malecon-mazatlan.jpg')}
          style={styles.image}
        />
        <ThemedText type="subtitle">El Malecón</ThemedText>
        <ThemedText>
          Uno de los malecones más largos del mundo, ideal para caminar y disfrutar la brisa del mar.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Image
          source={require('@/assets/images/faro-mazatlan.jpg')}
          style={styles.image}
        />
        <ThemedText type="subtitle">El Faro</ThemedText>
        <ThemedText>
          Sube hasta el faro natural más alto del mundo y disfruta de una vista impresionante de la ciudad.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  headerImage: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
