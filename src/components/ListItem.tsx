import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';

type ListItemProps = {
  title: string;
  author: string;
  imageUrl: string;
  date: string;
  onPress: any;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  author,
  imageUrl,
  date,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text} numberOfLines={3}>{title}</Text>
        <View style={styles.metaContainer}>
          <Text style={styles.subText}>
            {format(parseISO(date), 'yyyy.M.d', { locale: ja })}
          </Text>
          <Text style={styles.subText}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    borderColor: '#d0d0d0',
    borderWidth: 1
  },
  leftContainer: {
    width: 100
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  metaContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 16
  },
  subText: {
    fontSize: 10,
    color: 'gray'
  }
});

export default ListItem;
