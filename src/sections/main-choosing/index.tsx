import { useState } from "react";
import Button from "../../components/button";

enum HantaranType {
  Acrylic = "Acrylic",
  Hidden = "Hidden",
}

enum Cloth {
  PinkMauve = "Pink Mauve",
}

export default function MainChoosing() {
  const [type, setType] = useState<HantaranType | string>("");
  const [cloth, setCloth] = useState<Cloth | string>("");

  return (
    <div
      id="main-choosing"
      className="flex items-start justify-center h-screen bg-pink-600 p-4"
    >
      <div className="flex flex-col items-start justify-center rounded-xl bg-white/50 p-2 mt-8 w-full lg:w-1/2">
        <div id="type-choosing" className="flex flex-col items-start w-full">
          <h3 className="mt-1">Choose your type</h3>
          <div className="flex items-center justify-start w-full">
            <Button
              id="btn-choosing-acrylic"
              additionalClassNames={["mr-2"]}
              bgColor={
                type === HantaranType.Acrylic ? "bg-pink-600" : undefined
              }
              onClick={() => setType(HantaranType.Acrylic)}
            >
              {HantaranType.Acrylic}
            </Button>
            <Button
              id="btn-choosing-hidden"
              bgColor={type === HantaranType.Hidden ? "bg-pink-600" : undefined}
              onClick={() => setType(HantaranType.Hidden)}
            >
              {HantaranType.Hidden}
            </Button>
          </div>
        </div>
        {type === HantaranType.Hidden && (
          <div id="cloth-choosing" className="flex flex-col items-start w-full">
            <h3 className="mt-1">Choose your wrapping cloth</h3>
            <div className="flex items-center justify-start w-full">
              <Button
                id="btn-choosing-hidden"
                bgColor={
                  cloth === Cloth.PinkMauve ? "bg-pink-600" : undefined
                }
                onClick={() => setCloth(Cloth.PinkMauve)}
              >
                {Cloth.PinkMauve}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
