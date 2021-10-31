import React from 'react';

function Navbar({
    goForm,
    goPreview,
}) {

    return (
        (<ul className="header__menu">
            <li><button onClick={goForm} className="header__button">Форма</button></li>
            <li><button onClick={goPreview} className="header__button">Превью</button></li>
        </ul>)
    );
}
export default Navbar;