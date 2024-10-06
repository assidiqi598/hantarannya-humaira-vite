import { FC } from "react";

interface IHeader {
  info?: string;
}

const Header: FC<IHeader> = ({ info }) => {
  return (
    <div id="header" className="bg-pink-600 fixed left-0 top-0 min-h-10 w-screen flex justify-start items-center z-50">
      <a href="/">
        <img
          src="/src/assets/logo.png"
          alt="hantaran seserahan hantarannya humaira"
          className="m-1 h-10 w-10"
        />
      </a>

      {info && <p className="p-0 m-1 text-center text-white w-full">{info}</p>}
    </div>
  );
};

export default Header;
