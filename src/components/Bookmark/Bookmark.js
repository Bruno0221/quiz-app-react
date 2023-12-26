import "./Bookmark.css";
import { BookmarkIcon } from "../../assets/bookmark-icon";

export default function Bookmark({ id, onBookmarkQuestion }) {
  return (
    <>
      <input
        id={id}
        className="bookmark-checkbox hidden"
        type="checkbox"
        onClick={onBookmarkQuestion}
        aria-hidden="true"
      />
      <label htmlFor={id} aria-label="icon to bookmark question">
        <BookmarkIcon className="bookmark" />
      </label>
    </>
  );
}
