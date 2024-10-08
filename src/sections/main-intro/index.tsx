import Button from "../../components/button";
import "./main-intro.css";

export default function MainIntro() {
  const goToMainChoosing = () => {
    const typeChoosing = document.getElementById("type-choosing")?.offsetTop;
    window.scrollTo({ top: typeChoosing, behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-svh w-svw bg-yellow-200 lg:w-full lg:max-h-screen">
      <img
        src="assets/main-intro-bg.svg"
        alt="hantaran-seserahan-main-intro-bg"
        className="hidden portrait:hidden lg:block lg:absolute lg:top-0 h-full"
        loading="lazy"
      />
      <img
        src="assets/hantaran-hidden.webp"
        alt="hantaran-seserahan-hidden"
        className="absolute left-0 right-0 mx-auto hantaran-hidden"
        loading="lazy"
      />
      <div className="flex flex-col items-center justify-end p-3 w-full lg:w-1/2 lg:px-0 absolute left-0 right-0 mx-auto intro-div">
        <h1 className="main-intro-title text-5xl lg:text-6xl text-center">
          "Hantaran" specially made for you
        </h1>
        <p className="text-pink-600 mb-5">by HANTARANNYA HUMAIRA</p>
        <Button
          id="main-intro-btn"
          bgColor="bg-pink-600"
          onClick={goToMainChoosing}
        >
          Get Started{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 22"
            fill="currentColor"
            className="size-6 chevron-right"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
}
