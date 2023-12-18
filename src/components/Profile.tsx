import React from 'react';

export const Profile = () => {
    const imgLink = "https://img.razrisyika.ru/kart/136/544000-fotografiy-v-horoshem-kachestve-26.jpg"
    const avatarLink = "https://getwallpapers.com/wallpaper/full/5/4/c/1437228-free-kawaii-fox-wallpaper-1920x1200-xiaomi.jpg"

    return (
        <div className='content'>
            <div>
                <img src={imgLink} alt="" className="bgContent"/>
                <div className="content-header">
                    <img src={avatarLink} className="avatar"/>

                    <div>
                        <p>description</p>
                        <p>description 2nd string</p>
                        <p>description 3rd string</p>
                        <p>description 4th string</p>
                    </div>
                </div>

            </div>
            <div>
                <h2>My posts</h2>
                <div>Posts</div>
            </div>
        </div>
    );
};
