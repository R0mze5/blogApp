import React, { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import { View, StyleSheet, Image, Button, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';

async function askForPermission() {
  const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
  if (status !== 'granted') {
    Alert.alert('Sorry, we need camera roll permissions to make this work!');
    return false;
  }

  return true;
}

interface Props {
  onPick?: (uri: string) => void;
}

export const PhotoPicker = ({ onPick }: Props) => {
  const [image, setImage] = useState<null | string>(null);

  const takePhoto = async () => {
    const hasPermissions = await askForPermission;

    if (!hasPermissions) {
      return;
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
    });

    if (!img.cancelled) {
      setImage(img.uri);
      if (onPick) {
        onPick(img.uri);
      }
    }
  };

  return (
    <View style={styles.wrapper}>
      <Button title={'take photo'} onPress={takePhoto} />
      {image ? <Image style={styles.image} source={{ uri: image }} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    marginTop: 10,
    width: '100%',
  },
  wrapper: {
    marginBottom: 10,
  },
});
