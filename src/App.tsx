import "./App.css";
import WhatsApp from "./components/whatsapp";
import Header from "./sections/header";
import MainChoosing from "./sections/main-choosing";
import MainIntro from "./sections/main-intro";

// 390 x 844 first

function App() {
  return (
    <>
      <Header info="Get 10% off for order until December 2024!" />
      <WhatsApp />
      <MainIntro />
      <MainChoosing />
    </>
  );
}

export default App;
