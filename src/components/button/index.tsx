import { FC, ReactNode } from "react";
import cn from "classnames";

interface IButton extends React.PropsWithChildren {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  additionalClassNames?: Array<string>;
  id: string;
  condition?: any;
  onClick?: Function;
}

const Button: FC<IButton> = ({
  id,
  children,
  bgColor = "bg-black-400",
  textColor = "text-white",
  additionalClassNames = [],
  condition = {},
  onClick = () => {},
}) => {
  return (
    <button
      id={id}
      className={cn(
        "w-fit flex flex-wrap align-center justify-center text-center px-4 py-2.5 rounded-lg origin-center active:scale-95 transition-transform",
        bgColor,
        textColor,
        additionalClassNames,
        { ...condition }
      )}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
