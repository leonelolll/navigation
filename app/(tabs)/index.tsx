import { StyleSheet, TouchableOpacity, Alert  } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {HmsPushInstanceId} from "@hmscore/react-native-hms-push";

export default function TabOneScreen() {

const getToken = () => {
  HmsPushInstanceId.getToken("")
    .then((result) => {  // Specify the type for 'result'
      console.log("getToken", result);
    })
    .catch((err: any) => {
      Alert.alert("[getToken] Error/Exception", JSON.stringify(err));
    });
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableOpacity
        style={[styles.buttonContainer, styles.primaryButton]}
        onPress={getToken}
      ></TouchableOpacity>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonContainer: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  primaryButton: {
    backgroundColor: '#007bff',
  },
});
