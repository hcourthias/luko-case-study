import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import Button from '@components/Button'
import { colors } from '@theme/colors'

export const AddItemScreen: FC = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title='Cancel' onPress={() => navigation.goBack()} />
        <Button title='Add' disabled onPress={() => undefined} />
      </View>
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
