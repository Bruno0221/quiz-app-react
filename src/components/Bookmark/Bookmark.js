import "./Bookmark.css";
import { BookmarkIcon } from "../../assets/bookmark-icon";

export default function Bookmark({ id, onBookmarkQuestion }) {
  return (
    <>
      <input
        id={`bookmark-checkbox${id}`}
        className="bookmark-checkbox hidden"
        type="checkbox"
        onClick={onBookmarkQuestion}
      />
      <label htmlFor={`bookmark-checkbox${id}`}>
        <BookmarkIcon className="bookmark" />
      </label>
    </>
  );
}
