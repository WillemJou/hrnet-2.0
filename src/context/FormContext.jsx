import { createContext, useState } from 'react'

export const FormContext = createContext()

export const FormProvider = (props) => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <FormContext.Provider value={[toggle, handleToggle]}>
      {props.children}
    </FormContext.Provider>
  )
}
