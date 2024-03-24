function AppButton({ label, clickHandler }) {
  return (
    <>
      <button className={"post__name_btnOut"} onClick={(e) => clickHandler(e)}>
        {label}
      </button>
    </>
  );
}

export default AppButton;
