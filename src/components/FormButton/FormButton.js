const FormButton = ({ children, type }) => {
  return (
    <button className="dialog-button" type={type}>
      {children}
    </button>
  );
};

export default FormButton;
