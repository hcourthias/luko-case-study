import { render } from '@testing-library/react-native'
import { colors } from '@theme/colors'
import { Input } from './Input'

describe('Input', () => {
  it('render', () => {
    const { getByTestId } = render(<Input title={'test'} />)
    const title = getByTestId('Input_Title')
    const background = getByTestId('Input_Background_Shadow')
    const outline = getByTestId('Input_Background_Outline')

    expect(title).toHaveTextContent('test')
    expect(outline).toHaveStyle({ borderColor: colors.gray[100] })
    expect(background).toHaveStyle({ backgroundColor: 'transparent' })
  })

  it('show error message only if exists and touched is true', async () => {
    const { queryByTestId } = render(<Input title={'test'} error={'error'} touched />)

    const error = queryByTestId('Input_Error')

    expect(error).toBeTruthy()
  })

  it('hide error message if touched is false', async () => {
    const { queryByTestId } = render(<Input title={'test'} error={'error'} touched={false} />)

    const error = queryByTestId('Input_Error')

    expect(error).toBeFalsy()
  })
})
