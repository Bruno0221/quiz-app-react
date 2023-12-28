export default function Counter({ src, alt, count }) {
  return (
    <div className="counter">
      <img src={src} alt={alt}></img>
      <span className="question-count">{count}</span>
    </div>
  );
}
