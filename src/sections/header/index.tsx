import { FC } from "react";

interface IHeader {
  info?: string;
}

const Header: FC<IHeader> = ({ info }) => {
  return (
    <div className="bg-pink-600 sticky left-0 top-0 h-10 flex align-center p-1">
      <img
        src="/src/assets/logo.png"
        alt="hantaran seserahan hantarannya humaira"
      />
      {info && <p className="p-0 m-1 text-center text-white w-full">{info}</p>}
    </div>
  );
};

export default Header;
