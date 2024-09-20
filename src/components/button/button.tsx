import { FC } from "react";
import cn from "classnames";

interface IButton {
    text: string;
    color: string;
    condition: any;
}

const Button: FC<IButton> = ({ text = "", color = "black-400", condition = {} }) => {
    return (
        <button className={cn(`bg-${color}`, { ...condition })}>
            {text}
        </button>
    )
}

export default Button