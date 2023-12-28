import "./Bookmark.css";
import { ReactComponent as BookmarkIcon } from "../../assets/bookmark.svg";

export default function Bookmark({ id, onBookmarkQuestion }) {
  return (
    <>
      <input
        id={id}
        className="bookmark-checkbox hidden"
        type="checkbox"
        onChange={() => onBookmarkQuestion(id)}
        aria-hidden="true"
      />
      <label htmlFor={id} aria-label="icon to bookmark question">
        <BookmarkIcon className="bookmark" />
      </label>
    </>
  );
}
