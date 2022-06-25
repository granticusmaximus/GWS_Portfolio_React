import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase/firebase"
import logo from '../../assets/img/logo.png'
import * as ROUTES from '../constants/routes'

function LoggedIn(props) {
    return <a href={ROUTES.PROFILE} className='btn btn-warning'>Profile</a>;
}

function Guest(props) {
    return <img src={logo} alt="image description" height={75} width={75} />;
}

function NavButton(props) {
    const [user] = useAuthState(auth);
    if (user) {
        return <LoggedIn />;
    } else {
        return <Guest />
    };
}

export default NavButton;