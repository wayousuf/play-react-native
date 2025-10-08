import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ScrollViewList from './components/ScrollViewList.js';
import FlatListView from './components/FlatListView.js';
import SectionListView from './components/SectionListView.js';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView styles={styles.container} edges={['top']}>
        {/* <ScrollViewList /> */}
        {/* <FlatListView /> */}
        <SectionListView />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
});
