import "./ToggleButton.css";

export default function ToggleButton({ onToggleDarkMode }) {
  return (
    <>
      <div>
        <input
          type="checkbox"
          className="toggle"
          name="dark-mode"
          id="dark-mode"
          onChange={onToggleDarkMode}
        />
        <label htmlFor="dark-mode">Dark Mode</label>
      </div>
    </>
  );
}
