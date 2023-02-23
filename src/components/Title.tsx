import { fonts } from '@theme/fonts'
import { FC } from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import AddButton from './AddButton'

type Props = {
  children: string
  style?: StyleProp<TextStyle>
  onButtonPress?: () => void
}
export const Title: FC<Props> = ({ children, style, onButtonPress }) => {
  return (
    <View style={[styles.titleContainer, style]} testID={'Title_Container'}>
      <Text style={styles.title} testID={'Title_Text'}>
        {children}
      </Text>
      {onButtonPress ? <AddButton onPress={onButtonPress} /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.bold,
    fontSize: 34,
    lineHeight: 42,
  },
  titleContainer: {
    width: '100%',
    height: 42,
    marginTop: 99,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
