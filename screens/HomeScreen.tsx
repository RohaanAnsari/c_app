import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ChatRoomItem } from '../components/_index';
import { RootTabScreenProps } from '../types';
import chatRoomsData from '../assets/dummy-data/ChatRooms';

const chatRoom1 = chatRoomsData[0];
const chatRoom2 = chatRoomsData[1];

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatroom={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
