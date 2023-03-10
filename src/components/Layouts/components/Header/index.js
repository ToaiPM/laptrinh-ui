import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from './Header.module.scss'
import images from "~/assets/images";
import { useEffect, useState } from 'react';
import { Wrapper as PropperWrapper } from '~/components/Layouts/Propper';
import AccountItem from '~/components/AccountItem';
import Button from '../Button';
const cx = classNames.bind(styles)
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([1,2,3])
        },0)
    },[])
    return (
    <header className={cx('wraper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Tiktok"/>
            </div>
            <Tippy // Thẻ Tippy bao trùm "search" để khi tác động vào search
                    // thì "search-rerult" hiện lên
                interactive  //co phép chọn, copy
                visible={searchResult.length > 0} //nếu true thì hiển thị
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PropperWrapper>
                            <h4 className={cx('search-title')}>
                                Account
                            </h4>
                            <AccountItem/>
                            <AccountItem/>
                        </PropperWrapper>
                    </div>
                  )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                    <Button danger onClick={()=>alert('toai')}>Đăng ký</Button>
            </div>
        </div>
    </header>)
}

export default Header;