import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Title } from '../components/Title'
import { RootTabScreenProps } from '../navigation/types'
import { colors } from '../theme/colors'

const InventoryScreen: FC<RootTabScreenProps<'Inventory'>> = ({ navigation, route }) => {
  const handleAddButtonPress = () => navigation.navigate('AddItem')

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
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
