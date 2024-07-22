import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Platform, TextInput, Dimensions } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);
  let [qrs, setQrs] = useState('');
  const [barcodeData, setBarcodeData] = useState([]);
  const [qrread, setQrread] = useState('');



  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");

    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = async (onBarcodeScanningResult) => {

    if (Platform.OS == "android")
      setBarcodeData(onBarcodeScanningResult.boundingBox);
    else {
      setBarcodeData(onBarcodeScanningResult.bounds);
      console.log(onBarcodeScanningResult.bounds)
    }


    await setQrread(onBarcodeScanningResult.data)
    setQrs(onBarcodeScanningResult.data);
  };


  if (hasPermission === null) {
    return <SafeAreaView style={styles.container}><Text>Requesting for camera permission</Text></SafeAreaView>;
  }
  if (hasPermission === false) {
    return <SafeAreaView style={styles.container}><Text>No access to camera</Text></SafeAreaView>;
  }

  const windowWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraContainer}>

        <CameraView
          onBarcodeScanned={!scanned ? null : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr", "code128"]
          }}
          style={styles.absoluteFillObject}
        >

          {barcodeData && barcodeData.origin && barcodeData.size && qrread && (
            <View
              style={[
                styles.boundingBox,
                {

                  height: Platform.OS == "android" ? Number(barcodeData.size.width) : Number(barcodeData.size.height),
                  width: Platform.OS == "android" ? Number(barcodeData.size.height) : Number(barcodeData.size.width),
                  right: Platform.OS == "android" ? Number(barcodeData.origin.y) : (windowWidth - Number(barcodeData.origin.x)) - (Platform.OS == "android" ? Number(barcodeData.size.height) : Number(barcodeData.size.width)),
                  top: Platform.OS == "android" ? Number(barcodeData.origin.x) : Number(barcodeData.origin.y),
                },
              ]}
            >

            </View>

          )}
        </CameraView>

      </View>
      {/*  {scanned && (
                    <Button title={"Tekrar Oku"} onPress={() => setScanned(false)} />
                )} */}



      <View style={{ width: '100%' }}>

        <TextInput
          style={styles.inputcss}
          autoCorrect={false}
          secureTextEntry={false}
          value={qrs}
          autoCapitalize='none' />


      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
  },
  inputcss: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#cbd5e1",
    backgroundColor: "#e2e8f0",
    borderWidth: 2,
    borderRadius: 7,
    width: '80%',
    marginTop: 30,
    margin: 'auto'
  },
  absoluteFillObject: {
    height: 350,
    alignSelf: 'stretch',
    position: 'relative',
    borderRadius: 15
  },

  boundingBox: {
    position: 'absolute',
    borderColor: 'green',
    borderWidth: 2,
    zIndex: 1,
  },
});