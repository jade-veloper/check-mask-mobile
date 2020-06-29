import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoreItems = ({ store: { addr, created_at, name, remain_stat } }) => {
  return (
    <View>
      <View style={styles.list}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.addr}>{addr}</Text>
        <Text style={styles.date}>
          입고시간:{created_at ? created_at : '정보없음'}
        </Text>
        <Text
          style={
            remain_stat === 'plenty'
              ? styles.plenty
              : remain_stat === 'some'
              ? styles.some
              : remain_stat === 'few'
              ? styles.few
              : remain_stat === 'empty'
              ? styles.empty
              : styles.break
          }
        >
          {remain_stat === 'plenty'
            ? '충분'
            : remain_stat === 'some'
            ? '보통'
            : remain_stat === 'few'
            ? '부족'
            : remain_stat === 'empty'
            ? '없음'
            : '판매중지'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  name: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  addr: {
    marginBottom: 4,
    fontSize: 14,
    color: '#9E9E9E',
    lineHeight: 18,
  },
  date: {
    fontSize: 12,
    color: '#BDBDBD',
    marginBottom: 10,
  },
  plenty: {
    color: '#FFFFFF',
    backgroundColor: '#69db7c',
    padding: 5,
    textAlign: 'center',
  },
  some: {
    color: '#FFFFFF',
    backgroundColor: '#ffd43b',
    padding: 5,
    textAlign: 'center',
  },
  few: {
    color: '#FFFFFF',
    backgroundColor: '#ff8787',
    padding: 5,
    textAlign: 'center',
  },
  empty: {
    color: '#FFFFFF',
    backgroundColor: '#ced4da',
    padding: 5,
    textAlign: 'center',
  },
  break: {
    color: '#FFFFFF',
    backgroundColor: '#212529',
    padding: 5,
    textAlign: 'center',
  },
});

export default StoreItems;
