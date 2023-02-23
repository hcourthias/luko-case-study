import { useNavigation } from '@react-navigation/native'
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import { useCallback, useEffect, useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'

const useAnimatedHeader = (title: string, titleHeight: number) => {
  const navigation = useNavigation()

  const scrolling = useRef(new Animated.Value(0)).current

  const handleOnScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y: scrolling,
          },
        },
      },
    ],
    { useNativeDriver: true },
  )

  const titleOpacity = scrolling.interpolate({
    inputRange: [titleHeight - 2, titleHeight],
    outputRange: [0, 1],
  })

  const backgroundOpacity = scrolling.interpolate({
    inputRange: [0, 5],
    outputRange: [0, 1],
  })

  const headerBackground = useCallback(
    () => <Animated.View style={[styles.headerBackground, { opacity: backgroundOpacity }]} />,
    [backgroundOpacity],
  )

  const headerTitle = useCallback(
    () => (
      <Animated.Text style={[styles.tabBarLabelStyle, { opacity: titleOpacity }]}>
        {title}
      </Animated.Text>
    ),
    [title, titleOpacity],
  )

  useEffect(() => {
    navigation.setOptions({
      headerBackground,
      headerTitle,
    })
  }, [headerBackground, headerTitle, navigation])

  return {
    handleOnScroll,
  }
}

const styles = StyleSheet.create({
  tabBarLabelStyle: { fontFamily: fonts.regular, fontSize: 17 },
  headerBackground: { ...StyleSheet.absoluteFillObject, backgroundColor: colors.white },
})

export default useAnimatedHeader
