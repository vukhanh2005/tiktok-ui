import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItems.module.scss"
import classNames from "classnames/bind";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles);
function AccountItems() {
    return ( <div className={cx("wrapper")}>
        <div className={cx("avatar")}>
            <img alt="ur mom" src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/5106fda0cc4782cd0735143e7af271ea~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&amp;refresh_token=377e377c&amp;x-expires=1773223200&amp;x-signature=28Wn%2By%2BaY4NnbJCGvkqUeS5IiNQ%3D&amp;t=4d5b0474&amp;ps=13740610&amp;shp=a5d48078&amp;shcp=81f88b70&amp;idc=my"/>
        </div>
        <div className={cx("user")}>
            <h4>ENI</h4>
            <span>
                <p>nguyen-vu-khanh</p>
            </span>
        </div>
        <div className={cx("tich-xanh")}>
            <FontAwesomeIcon icon={faFlagCheckered}/>
        </div>
    </div> );
}
export default AccountItems;