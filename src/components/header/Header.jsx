import React from "react";
// import './Header.module.css'




 export default function Header ({black}) {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" />
                </a>
            </div>
            <div className="header--user">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                </a>
            </div>
        </header>
    )
}
