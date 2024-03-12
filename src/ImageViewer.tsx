import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

type ImageViewerProps = {
  placeholderImageSource?: ImageSourcePropType
}

export function ImageViewer({ placeholderImageSource }: ImageViewerProps) {
  return (
    <Image source={placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});