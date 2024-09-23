import { FC, ReactNode } from "react";
import cn from "classnames";

interface IButton extends React.PropsWithChildren {
    children: ReactNode;
    color: string;
    id: string;
    condition?: any;
}

const Button: FC<IButton> = ({ id, children, color = "black-400", condition = {} }) => {

    const bgColor = `bg-${color}`
    return (
        <button id={id} className={cn('w-36 flex flex-wrap align-center justify-center text-white text-center px-4 py-2.5 rounded-lg', bgColor, { ...condition })}>
            {children}
        </button>
    )
}

export default Button