import classNames from "classnames/bind";
import Header from "~/components/Layouts/components/Header";
import Sidebar from "./Sidebar";
import style from './DefaultLayout.module.scss'
const cx = classNames.bind(style)
function DefaultLayout( {children} ) {
    return ( 
        <div className={cx('wraper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    { children }
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;