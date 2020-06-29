import React from 'react';
import { FlatList, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { withContext } from 'react-simplified-context';
import Header from '../components/Header';
import StoreItem from '../components/StoreItem';

const ListScreen = ({ store }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <FlatList
          data={store}
          renderItem={({ item }) => {
            return <StoreItem store={item} />;
          }}
          keyExtractor={(item) => {
            return `${item.code}`;
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withContext(ListScreen);
