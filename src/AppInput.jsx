function AppInput (
  {
    propsName,
    propsType,
    propsPlaceholder,
    propsValue,
    inputHandler,
  }) {
  return (
    <input type={propsType} defaultValue={propsValue} onInput={inputHandler} placeholder={propsPlaceholder} name={propsName}/>
  )
}

export default AppInput