import React from 'react';

export const Users = (props: any) => {

    if(props.users.length === 0) {
        props.setUsers([

            {
                id: 101,
                photoUrl: 'https://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Luke-Skywalker.png',
                followed: true,
                fullname: 'Luke Skywalker',
                status: 'Jedi',
                location: {planet: 'Tatooine', galaxy: 'Outer Rim'},
            },
            {
                id: 102,
                photoUrl: 'https://image.pngaaa.com/993/2845993-middle.png',
                followed: false,
                fullname: 'Han Solo',
                status: 'captain',
                location: {planet: 'Hoth', galaxy: 'Hoth'},
            },
            {
                id: 103,
                photoUrl: 'https://brickville.com.au/cdn/shop/products/BTKA_16852550365318644_43dd98d8ffd130d2e9ba3ec9a4e50f.jpg?v=1685946329',
                followed: true,
                fullname: 'Owen Lars',
                status: 'farmer',
                location: {planet: 'Corellia', galaxy: 'Core Worlds'},
            },

        ])
    }
    return <div>
        {
            props.users.map((u: any) => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} style={{height: "auto",
                        width: "100%",
                        maxWidth: "72px"}}/>
                </div>
                <span>
                    {u.followed
                        ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={()=>{props.follow(u.id)}}>Follow</button>
                    }

                </span>
            </span>
                    <span>
                <span>
                    <div>{u.fullname}</div><div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.planet}</div>
                    <div>{u.location.galaxy}</div>
                </span>
            </span>
                </div>
            )}
    </div>
};

