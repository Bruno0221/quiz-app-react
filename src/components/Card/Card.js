import "./Card.css";
import { BookmarkIcon } from "../../assets/bookmark-icon";

export default function Card() {
  return (
    <article className="question-container">
      <input
        id="bookmark-checkbox"
        className="bookmark-checkbox"
        type="checkbox"
      />
      <label htmlFor="bookmark-checkbox">
        <BookmarkIcon />
      </label>
      <h2>Question</h2>
      <button></button>
      <p>Answer</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </article>
  );
}
