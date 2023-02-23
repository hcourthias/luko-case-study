import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import { FC, useState } from 'react'
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
} from 'react-native'

type Props = {
  title: string
  error?: string
  touched?: boolean
  rightComponent?: React.ReactNode
  height?: number
} & TextInputProps

export const Input: FC<Props> = ({
  title,
  error,
  rightComponent,
  height = 48,
  touched,
  onBlur,
  onFocus,
  ...props
}: Props) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onFocus?.(e)
    setIsFocused(true)
  }
  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur?.(e)
    setIsFocused(false)
  }

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
            { height },
          ]}
        >
          <TextInput
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            style={styles.input}
            placeholderTextColor={colors.gray[300]}
            {...props}
          />
          <View style={styles.rightContainer}>{rightComponent}</View>
        </View>
      </View>
      {error && touched && <Text style={styles.error}>{error}</Text>}
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 17,
    color: colors.gray[1000],
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 15,
    height: '100%',
    textAlignVertical: 'top',
  },
  error: {
    fontFamily: fonts.regular,
    fontSize: 13,
    lineHeight: 17,
    marginTop: 3,
    marginHorizontal: 4,
    color: colors.red,
  },
  rightContainer: {
    marginRight: 15,
  },
})
