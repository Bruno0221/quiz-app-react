import "./TextInput.css";

export default function TextInput({ name, content }) {
  return (
    <div className="input-container">
      <textarea className="form-input" id={name} name={name}></textarea>
      <label htmlFor={name}>{content}</label>
    </div>
  );
}
