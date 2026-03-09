import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MenuItems.module.scss'
import classNames from 'classnames/bind';
import { faBath, faBug, faInfo } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);
function MenuItems() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <span>
                    {/* Icon */}
                    <FontAwesomeIcon icon={faBug}></FontAwesomeIcon>
                </span>
                <p>Feedback</p>
            </div>
            <div className={cx('item')}>
                <span>
                    {/* Icon */}
                    <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
                </span>
                <p>More infomation</p>
            </div>
            <div className={cx('item')}>
                <span>
                    {/* Icon */}
                    <FontAwesomeIcon icon={faBath}></FontAwesomeIcon>
                </span>
                <p>Fuck you</p>
            </div>
        </div>
     );
}

export default MenuItems;