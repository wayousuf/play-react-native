import { Text, FlatList, StyleSheet } from 'react-native'
import { SingleList as data } from '../constants'

const FlatListView = () => {
  return (
    <FlatList
      data={data}
      keyextractor={(item, index) => index.toString()}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
     />
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});

export default FlatListView