import React from 'react';

export const Header = () => {
    const logoLink = "https://galerey-room.ru/images/144107_1413628867.png"


    return (
        <header className='header'>
            <img src={logoLink} height={"30px"}/>
        </header>
    );
};
