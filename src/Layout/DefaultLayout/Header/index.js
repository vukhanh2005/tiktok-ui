import LogoTikTok from '~/components/Logo/Tiktok';
import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsis, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import {Wrapper as PopperWrapper} from '~/components/Popper';
import AccountItems from "~/components/AccountItems"
import Button from '~/components/Button';
import MenuItems from '~/components/MenuItems';
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const [onShowMoreMenu, setOnShowMoreMenu] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 1000);
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
                    appendTo={document.body}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4>Accounts</h4>
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </PopperWrapper>
                        </div>
                    )}
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
                    <Button upload to="/upload">Upload</Button>
                    <Button outline href={'https://chatgpt.com/c/69aad728-c2b4-8324-81ac-da82665a2a4d'} target={'blank'} text>Log in</Button>
                    <Tippy
                        interactive
                        trigger='click'
                        placement='bottom-end'
                        render={(attrs)=>{
                            <div className={cx("menu-items")}>
                                <PopperWrapper>
                                    <MenuItems />
                                </PopperWrapper>
                            </div>
                        }}
                    >
                        <div className={cx('more-menus')}>
                            <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
                        </div>
                    </Tippy>
                </div>
            </div>
        </header>
    )
}

export default Header;