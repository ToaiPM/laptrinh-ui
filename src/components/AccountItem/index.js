import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import style from './AccountItem.module.scss';
const cx = classNames.bind(style);
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/101f2bd32cb11214b9b54a4645ce325a~c5_300x300.webp?x-expires=1677157200&x-signature=c%2FLh4dnjhoJc0t%2BwQih0jUZNasc%3D" className={cx('avatar')} alt="Hoa" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn Tấn Toại</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nttoai</span>
            </div>
        </div>
    );
}

export default AccountItem;