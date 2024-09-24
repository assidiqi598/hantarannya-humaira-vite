import "./App.css";
import Header from "./sections/header";
import MainChoosing from "./sections/main-choosing";
import MainIntro from "./sections/main-intro";

// 390 x 844 first

function App() {
  return (
    <>
      <Header info="Get 10% off until December 2024!" />
      <MainIntro />
      <MainChoosing />
    </>
  );
}

export default App;
