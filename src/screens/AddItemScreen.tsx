import { useNavigation } from '@react-navigation/native'
import { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Button from '@components/Button'
import { colors } from '@theme/colors'
import { Input } from '@components/Input'
import { ImagePickerView } from '@components/ImagePickerView'

export const AddItemScreen: FC = () => {
  const navigation = useNavigation()
  const [imageUri, setImageUri] = useState<string>()

  const handleImageAvailable = (imageUri: string) => setImageUri(imageUri)
  const handleOnDelete = () => setImageUri(undefined)

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title='Cancel' onPress={() => navigation.goBack()} />
        <Button title='Add' disabled onPress={() => undefined} />
      </View>
      <ImagePickerView
        containerStyle={{ alignSelf: 'center' }}
        imageUri={imageUri}
        onImageAvailable={handleImageAvailable}
        onDelete={handleOnDelete}
      />
      <Input title='Name' placeholder='Bracelet' />
      <Input title='Value' placeholder='700' />
      <Input title='Description' placeholder='Optional' multiline />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
})

export default AddItemScreen
