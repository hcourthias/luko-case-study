import { Title } from '@components/Title'
import { ValuableCard } from '@components/ValuableCard'
import useAlert from '@hooks/useAlert'
import { Valuable } from '@models/Valuable'
import { removeValuable, selectValuables } from '@store/features/valuablesSlice'
import { FC } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootTabScreenProps } from '../navigation/types'
import { colors } from '../theme/colors'

const InventoryScreen: FC<RootTabScreenProps<'Inventory'>> = ({ navigation, route }) => {
  const valuables = useSelector(selectValuables)
  const dispatch = useDispatch()
  const { showAlert } = useAlert()

  const handleOnValuablePress = (item: Valuable) => {
    showAlert({
      title: 'Delete valuable',
      description: `Are you sure you want to delete ${item.name}?`,
      actions: [
        {
          text: 'Delete',
          onPress: () => dispatch(removeValuable(item)),
          destructive: true,
        },
      ],
    })
  }

  const handleAddButtonPress = () => navigation.navigate('AddItem')

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        numColumns={2}
        contentInset={{ bottom: 20 }}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={valuables}
        ListHeaderComponent={() => (
          <Title onButtonPress={handleAddButtonPress} style={styles.title}>
            {route.name}
          </Title>
        )}
        renderItem={({ item, index }) => (
          <ValuableCard
            valuable={item}
            key={item.id}
            containerStyle={index % 2 === 0 ? styles.leftItem : styles.rightItem}
            onPress={() => handleOnValuablePress(item)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flatlist: {
    paddingHorizontal: 20,
  },
  separator: {
    height: 20,
  },
  leftItem: {
    flex: 0.5,
    marginRight: 10,
  },
  rightItem: {
    flex: 0.5,
    marginLeft: 10,
  },
  title: {
    marginBottom: 15,
  },
})

export default InventoryScreen
