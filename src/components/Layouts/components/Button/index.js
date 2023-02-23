import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./Button.module.scss";
const cx = classNames.bind(style)
function Button({ 
    to, 
    href, 
    primary=false, 
    outline=false, 
    danger=false,
    info=false, 
    children, 
    onClick, 
    passProps }) {
    let Component = 'button'
    const props = {
        onClick,
        ...passProps
    }
    if(to){
        props.to = to
        Component = Link
    }
    else if(href){
        props.href = href
        Component = 'a'
    }
    const classes = cx('wrapper',{
        primary,
        danger,
        outline
    })
    return ( 
        <Component className={classes} {...props}>
            <span>{ children }</span>
        </Component>
     );
}

export default Button;