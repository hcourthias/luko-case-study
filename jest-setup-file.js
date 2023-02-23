jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
)

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    setOptions: jest.fn(),
  }),
  useRoute: () => ({
    name: 'Test',
  }),
}))

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
