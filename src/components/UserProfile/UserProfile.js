import "./UserProfile.css";
import ProfilePicture from "../../assets/profile-picture.jpg";
import CounterSection from "../CounterSection/CounterSection";
import ToggleButton from "../ToggleButton/ToggleButton";

export default function UserProfile({
  allQuestionCount,
  bookmarkedQuestionCount,
  onToggleDarkMode,
}) {
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
        <CounterSection
          allQuestionCount={allQuestionCount}
          bookmarkedQuestionCount={bookmarkedQuestionCount}
        />
      </section>
      <section className="profile-settings">
        <h2 className="settings-header">Settings</h2>
        <ToggleButton
          className="setting-container"
          onToggleDarkMode={onToggleDarkMode}
        />
        <div className="setting-container">
          <button className="question-button">+</button>
          <label className="add-question-label">Add New Question</label>
        </div>
      </section>
    </article>
  );
}
