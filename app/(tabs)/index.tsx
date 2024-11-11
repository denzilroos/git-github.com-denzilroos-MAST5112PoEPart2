import { Image, StyleSheet, Platform, Button } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams } from 'expo-router';

export default function HomeScreen() {

  const params = useLocalSearchParams();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Menu</ThemedText>
     
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">{params.message}</ThemedText>
        <ThemedText type="subtitle">{params.message4}</ThemedText>
        <ThemedText type="subtitle">{params.message2}</ThemedText>
        <ThemedText type="subtitle">{params.message3}</ThemedText>
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
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 10,
    left: 20,
    position: 'absolute',
    
  },
});
