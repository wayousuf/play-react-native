import { View, Text, SectionList } from 'react-native'
import { SectionListData as data } from '../constants'

const SectionListView = () => {
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text style={{ padding: 10, fontSize: 18, height: 44 }}>{item}</Text>}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ fontWeight: 'bold', fontSize: 32, backgroundColor: '#fff' }}>{title}</Text>
      )}
      ListFooterComponent={() => <Text style={{ fontWeight: 'bold', fontSize: 32, backgroundColor: '#fff' }}>This is Footer</Text>}
      ListHeaderComponent={() => <Text style={{ fontWeight: 'bold', fontSize: 32, backgroundColor: '#fff' }}>This is Header</Text>}
      ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'red' }} />}
     />
  )
}

export default SectionListView