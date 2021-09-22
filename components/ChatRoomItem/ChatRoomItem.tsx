import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

export default function ChatRoomItem({ chatroom }) {
  const user = chatroom.users[1];
  return (
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: user.imageUri,
          }}
          style={styles.image}
        />
        {chatroom.newMessages ? (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatroom.newMessages}</Text>
          </View>
        ) : null}
        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>{user.name} </Text>
            <Text style={styles.text}>11:11am</Text>
          </View>
          <Text style={styles.text} numberOfLines={1}>
            {chatroom.lastMessage.content}
          </Text>
        </View>
      </View>
    </>
  );
}
