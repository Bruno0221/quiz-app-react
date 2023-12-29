import "./Counter.css";

export default function Counter({ src, alt, count }) {
  return (
    <div className="counter">
      <img src={src} alt={alt}></img>
      <span>{count}</span>
    </div>
  );
}
