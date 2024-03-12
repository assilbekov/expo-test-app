import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

type ImageViewerProps = {
  selectedImage?: string | null;
  placeholderImageSource?: ImageSourcePropType
}

export function ImageViewer({ placeholderImageSource, selectedImage }: ImageViewerProps) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;

  return (
    <Image source={imageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});