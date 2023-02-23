import { colors } from '@theme/colors'
import { Pressable, PressableProps, Text } from 'react-native'

export default function Button({ title, onPress, disabled }: PressableProps & { title: string }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      pressRetentionOffset={20}
      hitSlop={20}
      testID={'Button'}
    >
      <Text
        style={{
          fontSize: 17,
          color: disabled ? colors.gray[300] : colors.mainBlue,
        }}
        testID={'Button_Title'}
      >
        {title}
      </Text>
    </Pressable>
  )
}
