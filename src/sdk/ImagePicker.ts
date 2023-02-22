import * as ExpoImagePicker from 'expo-image-picker'

const takePhoto: () => Promise<ExpoImagePicker.ImagePickerResult | undefined> = async () => {
  const { granted } = await ExpoImagePicker.requestCameraPermissionsAsync()
  // not supported on iOS simulator, you can use MediaLibrary with pickImage method instead
  if (granted) {
    const pickerResult = await ExpoImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })
    return pickerResult
  }
  return undefined
}

const pickImage: () => Promise<ExpoImagePicker.ImagePickerResult | undefined> = async () => {
  const { granted } = await ExpoImagePicker.requestMediaLibraryPermissionsAsync()
  if (granted) {
    const pickerResult = await ExpoImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })
    return pickerResult
  }
  return undefined
}

export const ImagePicker = {
  takePhoto,
  pickImage,
}
