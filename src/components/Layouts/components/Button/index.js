import clsx from "clsx";
import style from "./Button.module.scss";
function Button({ primary, danger,info, children }) {
    const classes = clsx(style.btn, {
        [style.primary]: primary,
        [style.danger]: danger,
        [style.info]: info
    })
    return ( 
        <button className={classes}>{children}</button>
     );
}

export default Button;