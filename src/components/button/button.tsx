import { FC, ReactNode } from "react";
import cn from "classnames";

interface IButton extends React.PropsWithChildren {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  additionalClassNames?: Array<string>;
  id: string;
  condition?: any;
}

const Button: FC<IButton> = ({
  id,
  children,
  bgColor = "bg-black-400",
  textColor = "text-white",
  additionalClassNames = [],
  condition = {},
}) => {
  return (
    <button
      id={id}
      className={cn(
        "w-36 flex flex-wrap align-center justify-center text-center px-4 py-2.5 rounded-lg",
        bgColor,
        textColor,
        additionalClassNames,
        { ...condition }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
