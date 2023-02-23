import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '@components/Button'
import { colors } from '@theme/colors'
import { Input } from '@components/Input'
import { ImagePickerView } from '@components/ImagePickerView'
import useAddValuableForm from './hooks/useAddValuableForm'
import { useNavigation } from '@react-navigation/native'
import { fonts } from '@theme/fonts'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const AddItemScreen: FC = () => {
  const navigation = useNavigation()
  const {
    handleChange,
    handleSubmit,
    errors,
    isValid,
    values,
    setFieldValue,
    touched,
    handleBlur,
  } = useAddValuableForm()

  const handleOnDeleteImage = () => {
    setFieldValue('photo', '')
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title='Cancel' onPress={() => navigation.goBack()} />
        <Button title='Add' disabled={!isValid} onPress={() => handleSubmit()} />
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps='handled'
        enableOnAndroid
        enableAutomaticScroll
      >
        <ImagePickerView
          containerStyle={{ alignSelf: 'center' }}
          imageUri={values.photo}
          onImageAvailable={handleChange('photo')}
          onDelete={handleOnDeleteImage}
        />
        <Input
          title='Name'
          placeholder='Bracelet'
          onChangeText={handleChange('name')}
          value={values.name}
          error={errors.name}
          touched={touched.name}
          onBlur={handleBlur('name')}
        />
        <Input
          title='Value'
          placeholder='700'
          onChangeText={handleChange('purchasePrice')}
          rightComponent={<Text style={styles.currencyText}>€</Text>}
          keyboardType='numeric'
          value={values.purchasePrice}
          error={errors.purchasePrice}
          touched={touched.purchasePrice}
          onBlur={handleBlur('purchasePrice')}
        />
        <Input
          title='Description'
          placeholder='Optional'
          multiline
          height={128}
          onChangeText={handleChange('description')}
          value={values.description}
          error={errors.description}
          touched={touched.description}
          onBlur={handleBlur('description')}
        />
      </KeyboardAwareScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  scrollView: {
    paddingHorizontal: 20,
    flex: 1,
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  currencyText: {
    fontFamily: fonts.regular,
    fontSize: 13,
    lineHeight: 17,
    color: colors.gray[700],
  },
})

export default AddItemScreen
