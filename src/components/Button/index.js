import classNames from "classnames/bind";
import styles from "./Button.module.scss"
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Button({to, href, primary, outline, upload, disabled, children, onClick, ...anotherProps}) {
    let Comp = 'button';
    const classes = cx(
        'wrapper',
        {
            primary,
            outline,
            upload,
            disabled
        }
    );

    const props = {
        onClick,
        ...anotherProps
    }
    if(to){
        props.to = to;
        Comp = Link
    }else if(href){
        props.href = href;
        Comp = 'a';
    }
    if(disabled){
        Object.keys(props).forEach(key=>{
            if(key.startsWith('on' && typeof props[key] === 'function')){
                delete props[key];
            }
        })
        props.onClick = (e)=>{
            e.preventDefault();
        }
    }
    return (    
        <Comp className={classes} {...props}>
            <span><b>{children}</b></span>
        </Comp>
     );
}

export default Button;