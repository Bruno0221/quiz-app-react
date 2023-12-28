import "./UserProfile.css";
import ProfilePicture from "../../assets/profile-picture.jpg";
import BookmarkIcon from "../../assets/bookmark.svg";
import QuestionmarkIcon from "../../assets/questionmark-icon.svg";

export default function UserProfile() {
  return (
    <article className="question-container">
      <section className="profile-header">
        <img className="profile-img" src={ProfilePicture} alt="Profile"></img>
        <p className="profile-name">Max Doe</p>
      </section>
      <section className="profile-about">
        <h2 className="about-header">About Me:</h2>
        <p className="about-txt">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          repudiandae delectus cupiditate reprehenderit placeat earum sed
          pariatur facilis quasi voluptatum.
        </p>
        <div className="about-counter">
          <div className="counter question-counter">
            <img src={QuestionmarkIcon} alt="Question Counter"></img>
            <span className="question-count">4</span>
          </div>
          <div className="counter bookmark-counter">
            <img src={BookmarkIcon} alt="Bookmark Counter"></img>
            <span className="bookmark-count">0</span>
          </div>
        </div>
      </section>
      <section className="profile-settings">
        <h2 className="settings-header">Settings</h2>
        <div className="setting-container">
          <input
            type="checkbox"
            className="toggle"
            name="dark-mode"
            id="dark-mode"
          />
          <label htmlFor="dark-mode">Dark Mode</label>
        </div>
        <div className="setting-container">
          <button className="question-button">+</button>
          <label className="add-question-label">Add New Question</label>
        </div>
      </section>
    </article>
  );
}
