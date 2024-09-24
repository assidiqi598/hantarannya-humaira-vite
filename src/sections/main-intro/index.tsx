import Button from "../../components/button/button";
import "./main-intro.css";

export default function MainIntro() {
  return (
    <section className="bg-main-intro bg-center bg-no-repeat bg-cover h-screen w-screen lg:w-full lg:bg-none lg:flex">
      <div className="bg-white/50 flex flex-col items-center justify-center p-3 w-full h-full lg:w-1/2 lg:px-0">
        <h1 className="main-intro-title text-6xl text-center">
          "Hantaran" specially made for you
        </h1>
        <br />
        <p></p>
        <br />
        <br />
        <h6 className="text-pink-600">by HANTARANNYA HUMAIRA</h6>
        <br />
        <br />
        <br />
        <Button id="main-intro-btn" bgColor="bg-pink-600">
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
      <div className="hidden lg:flex lg:justify-center lg:items-center lg:w-1/2">
        <img
          src="/src/assets/hantaran-acrylic.jpg"
          alt="hantaran seserahan acrylic not hidden"
          className="h-4/5 border-4 border-double rounded-xl"
        />
      </div>
    </section>
  );
}
