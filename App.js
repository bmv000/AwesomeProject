// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import { NavigationContainer } from "@react-navigation/native";

import 'react-native-gesture-handler';
import {useRoute} from "./router";






export default function App() {
    const routing = useRoute({});

  return (
      <NavigationContainer>
          {routing}
      </NavigationContainer>
  );
}
