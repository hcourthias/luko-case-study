import { addValuable, selectValuables } from '@store/features/valuablesSlice'
import { FC } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Title } from '../components/Title'
import { RootTabScreenProps } from '../navigation/types'
import { colors } from '../theme/colors'

const InventoryScreen: FC<RootTabScreenProps<'Inventory'>> = ({ navigation, route }) => {
  const valuables = useSelector(selectValuables)
  const dispatch = useDispatch()

  const handleAddValuablePress = () =>
    dispatch(addValuable({ name: 'test', purchasePrice: 100, photo: '' }))
  const handleAddButtonPress = () => navigation.navigate('AddItem')

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
      <Text>{JSON.stringify(valuables)}</Text>
      <Pressable>
        <Text onPress={handleAddValuablePress}>Add valuable</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
})

export default InventoryScreen
