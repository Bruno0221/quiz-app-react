import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import { questionArray } from "./utils/InitialQuestions";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState(questionArray);
  const [bookmarks, setBookmarks] = useState(questions);

  function handleBookmarkQuestion(id) {
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, isBookmarked: !question.isBookmarked }
          : question
      )
    );
  }
  return (
    <>
      <Header />
      <main>
        {questions.map((question) => {
          return (
            <Card
              key={question.id}
              question={question}
              onBookmarkQuestion={handleBookmarkQuestion}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default App;
