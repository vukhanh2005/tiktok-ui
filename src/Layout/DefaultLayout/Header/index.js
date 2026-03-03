import LogoTikTok from '~/components/Logo/Tiktok';
import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import {Wrapper as PopperWrapper} from '~/components/Popper';
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(()=>{
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
    })
    return (
    
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <LogoTikTok/>
                </div>
                {/* Search */}
                <Tippy 
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4>Accounts</h4>
                            </PopperWrapper>
                        </div>
                    )}
                    appendTo={"parent"}
                >
                    <div className={cx('search')}>
                        <div className={cx('search-input-wrapper')}>
                            <input className={cx('search-input')} placeholder='Search accounts and video' spellCheck={false}/>
                        </div>
                        <button className={cx('clear-icon')}>
                            {/* Icon close, clear */}
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                        {/* Loading */}
                        <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner}/>
                        <button className={cx('search-btn')}>
                            {/* Search icon */}
                            <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                    
                </Tippy>
                {/* Action */}
                <div className={cx('action')}>
                    Hi
                </div>
            </div>
        </header>
    )
}

export default Header;