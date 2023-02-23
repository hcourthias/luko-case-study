import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import { FC } from 'react'
import { Image, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ImagePicker } from '../sdk/ImagePicker'
import useAlert from '@hooks/useAlert'
type Props = {
  imageUri?: string
  containerStyle?: StyleProp<ViewStyle>
  onImageAvailable: (imageUri: string) => void
  onDelete: () => void
}

export const ImagePickerView: FC<Props> = ({
  imageUri,
  containerStyle,
  onImageAvailable,
  onDelete: handleOnDelete,
}: Props) => {
  const { showAlert } = useAlert()

  const handleTakePhoto = async () => {
    const result = await ImagePicker.takePhoto()
    if (result && !result.canceled) {
      console.log(result.assets)
      return onImageAvailable(result.assets[0].uri)
    }
  }

  const handlePickImage = async () => {
    const result = await ImagePicker.pickImage()
    if (result && !result.canceled) {
      console.log(result.assets)
      return onImageAvailable(result.assets[0].uri)
    }
  }

  const handleShowAlert = () => {
    showAlert({
      title: 'Add a photo',
      actions: [
        {
          text: 'Take a photo',
          onPress: handleTakePhoto,
        },
        {
          text: 'Choose in the library',
          onPress: handlePickImage,
        },
      ],
    })
  }

  if (imageUri) {
    return (
      <Pressable style={containerStyle} onPress={handleOnDelete}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <View style={styles.deleteIcon}>
          <Ionicons name='md-trash' size={15} color='white' />
        </View>
      </Pressable>
    )
  }
  return (
    <Pressable style={[containerStyle, styles.container]} onPress={handleShowAlert}>
      <Ionicons name='md-camera' size={44} color={colors.mainBlue} />
      <Text style={styles.text}>Add a photo</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 158,
    height: 158,
    borderRadius: 158 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,

    borderColor: colors.gray[100],
    borderStyle: 'dashed',
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 17,
    lineHeight: 24,
    color: colors.gray[1000],
  },
  image: {
    width: 158,
    height: 158,
    borderRadius: 158 / 2,
  },
  deleteIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.red,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
})
