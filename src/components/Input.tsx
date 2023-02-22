import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import { FC, useState } from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'

type Props = {
  title: string
} & TextInputProps

export const Input: FC<Props> = ({ title, multiline, ...props }: Props) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleOnFocus = () => setIsFocused(true)
  const handleOnBlur = () => setIsFocused(false)
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View
        style={[
          isFocused ? { backgroundColor: '#D6E3FD' } : { backgroundColor: 'transparent' },
          styles.inputContainer,
        ]}
      >
        <View
          style={[
            isFocused ? { borderColor: colors.mainBlue } : { borderColor: colors.gray[100] },
            styles.outline,
            multiline && { height: 128 },
          ]}
        >
          <TextInput
            multiline={multiline}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            style={styles.input}
            placeholderTextColor={colors.gray[300]}
            {...props}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.regular,
    fontSize: 13,
    lineHeight: 17,
    marginTop: 15,
    marginHorizontal: 4,
    color: colors.gray[1000],
  },
  inputContainer: {
    borderRadius: 12,
    marginTop: 3,
    padding: 4,
  },
  outline: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: colors.white,
    height: 48,
  },
  input: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 17,
    color: colors.gray[1000],
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
})
