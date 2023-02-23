import { Pressable, PressableProps } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '@theme/colors'

export default function AddButton(props: PressableProps) {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      pressRetentionOffset={10}
    >
      <Ionicons name='add-circle' size={32} color={colors.mainBlue} />
    </Pressable>
  )
}
