import "./Footer.css";
import { ReactComponent as HomeIcon } from "../../assets/homeIcon.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/bookmark.svg";
import { ReactComponent as UserIcon } from "../../assets/user-icon.svg";

export default function Footer({
  onRenderAll,
  onRenderBookmarked,
  onRenderProfile,
  render,
}) {
  return (
    <footer className="footer">
      <ul className="footer-nav">
        <li className="footer-links">
          <a
            className={render === "all" ? "current-page" : ""}
            href="#title"
            aria-label="Home Page"
            onClick={onRenderAll}
          >
            <HomeIcon className="nav-icon" />
          </a>
        </li>
        <li className="footer-links">
          <a
            className={render === "bookmarked" ? "current-page" : ""}
            href="#title"
            aria-label="Bookmarks Page"
            onClick={onRenderBookmarked}
          >
            <BookmarkIcon className="nav-icon" />
          </a>
        </li>
        <li className="footer-links">
          <a
            className={render === "profile" ? "current-page" : ""}
            href="#title"
            aria-label="Profile Page"
            onClick={onRenderProfile}
          >
            <UserIcon className="nav-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
