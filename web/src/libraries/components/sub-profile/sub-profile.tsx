import { useEffect, useState } from 'react';
import asyncStorageHelpers, { StorageKey } from 'vending-core/common/helpers/async-storage-helpers';
import './sub-profile.scss';

export const SubProfile = (props: any) => {

    const { logoutApp } = props; 

    const [ profile, setProfile ] = useState<any>();

    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);


    useEffect(() => {
        const fetch = async () => {
            const data = await asyncStorageHelpers.get(StorageKey.USER_INFO);
            const result = JSON.parse(data);
            setProfile(result);
        }
        fetch();
    }, [])

    useEffect(() => {
    }, [profile])

    return (
        <div className="sub-profile">
        <img
        onClick={() => {setIsCollapsed(!isCollapsed)}}
        src={"https://app.smartvendingmachines.net/files/image/" + profile?.avatar }
        alt=""
        />
            <div className={((isCollapsed) ? "collapsed " : "") + "details"} onMouseLeave={() => {setIsCollapsed(true)}}>
                <div><div className="userIcon"/>Thông tin cá nhân</div>
                <div onClick={logoutApp}><div className="logOut"/>Đăng xuất</div>
            </div>
        </div>
    )

}
