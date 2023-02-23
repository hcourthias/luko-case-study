import { useNavigation } from '@react-navigation/native'
import { addValuable, selectTotalValue } from '@store/features/valuablesSlice'
import { useFormik } from 'formik'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

interface AddValuableFormValues {
  name: string
  purchasePrice: string
  description: string
  photo: string
}

const initialValues: AddValuableFormValues = {
  name: '',
  purchasePrice: '',
  description: '',
  photo: '',
}

const useAddValuableForm = () => {
  const dispatch = useDispatch()
  const totalValue = useSelector(selectTotalValue)
  const navigation = useNavigation()

  const handleOnSubmit = (values: AddValuableFormValues) => {
    dispatch(addValuable({ ...values, purchasePrice: +values.purchasePrice }))
    navigation.goBack()
  }

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        photo: Yup.string().required('Photo is required').min(1),
        name: Yup.string().required('Name is required').min(1),
        purchasePrice: Yup.number()
          .transform((_, value) => +value.replace(',', '.'))
          .required('Purchase price is required')
          .test(
            'max',
            'The total valuation of your items cannot exceed 40000',
            (value) => totalValue + value <= 40000,
          )
          .min(1),
        description: Yup.string().optional(),
      }),
    [totalValue],
  )

  const {
    handleChange,
    handleSubmit,
    errors,
    isValid,
    values,
    setFieldValue,
    touched,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema,

    onSubmit: handleOnSubmit,
  })

  return {
    handleChange,
    handleSubmit,
    errors,
    isValid,
    values,
    setFieldValue,
    touched,
    handleBlur,
  }
}

export default useAddValuableForm
