import { Valuable } from '@models/Valuable'
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import { FC } from 'react'
import { Image, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'

type Props = {
  valuable: Valuable
  containerStyle?: StyleProp<ViewStyle>
  onPress?: () => void
}

export const ValuableCard: FC<Props> = ({
  valuable,
  containerStyle,
  onPress: handleOnPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, styles.container, containerStyle]}
      onPress={handleOnPress}
      testID={`ValuableCard_${valuable.id}`}
    >
      <Image
        source={{ uri: valuable.photo }}
        style={styles.image}
        testID={`ValuableCard_${valuable.id}_Image`}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2} testID={`ValuableCard_${valuable.id}_Title`}>
          {valuable.name}
        </Text>
        <Text style={styles.price} testID={`ValuableCard_${valuable.id}_Price`}>
          €{valuable.purchasePrice}
        </Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 14,
    flex: 1,
    shadowColor: '#06080D',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 2,
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: 19,
    lineHeight: 26,

    color: colors.gray[1000],
  },
  price: {
    fontFamily: fonts.regular,
    fontSize: 15,
    lineHeight: 20,
    marginTop: 5,
    color: colors.gray[700],
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 15,
  },
})
