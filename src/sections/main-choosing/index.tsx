import Button from "../../components/button";

export default function MainChoosing() {
  return (
    <div id="main-choosing" className="flex items-start justify-center h-screen bg-pink-600 p-4">
      <div className="flex flex-col items-start justify-center rounded-xl bg-white/50 p-2 mt-8 w-full lg:w-1/2">
        <div id="type-choosing" className="flex flex-col items-start w-full">
          <h3>Choose your type</h3>
          <div className="flex items-center justify-evenly w-full">
            <Button id="btn-choosing-acrylic">Acrylic</Button>
            <Button id="btn-choosing-hidden">Hidden</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
