import { Title } from '@components/Title'
import { ValuableCard } from '@components/ValuableCard'
import { addValuable, selectValuables } from '@store/features/valuablesSlice'
import { FC } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootTabScreenProps } from '../navigation/types'
import { colors } from '../theme/colors'

const InventoryScreen: FC<RootTabScreenProps<'Inventory'>> = ({ navigation, route }) => {
  const valuables = useSelector(selectValuables)
  const dispatch = useDispatch()

  const handleAddValuablePress = () =>
    dispatch(
      addValuable({
        name: 'Lou.Yetu necklace',
        purchasePrice: 100,
        photo:
          'https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4ba24826/images/large/637708739570526487-2088237.png?sw=750&sh=750&sm=fit&sfrm=png',
      }),
    )

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
          <>
            <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
          </>
        )}
        renderItem={({ item, index }) => (
          <ValuableCard
            valuable={item}
            key={item.id}
            containerStyle={index % 2 === 0 ? styles.leftItem : styles.rightItem}
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
})

export default InventoryScreen
