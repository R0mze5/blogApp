import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AppHeaderIcon from 'components/AppHeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { THEME } from '@theme';
import { useDispatch } from 'react-redux';
import { addPost } from 'store/actions/post';
import { PhotoPicker } from 'components/PhotoPicker';

interface Props {
  navigation: any;
}

export const CreateScreen = ({ navigation }: Props) => {
  navigation.setOptions({
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title={'Toggle Drawer'}
          iconName={'ios-menu'}
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  });

  const [text, setText] = useState('');

  const imgRef = useRef();

  const dispatch = useDispatch();

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      booked: false,
      img: imgRef.current,
    };
    dispatch(addPost(post));
    navigation.navigate('Main');
  };

  const photoPickHandler = (uri: string) => {
    imgRef.current = uri;
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create Post</Text>
          <TextInput
            style={styles.textarea}
            placeholder={'enter post text'}
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler} />
          <Button
            disabled={!text.length}
            title={'Create post'}
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textarea: {
    marginBottom: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
  wrapper: {
    padding: 10,
  },
});

export default CreateScreen;
