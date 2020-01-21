import React from 'react';
import SingIn from '../../components/singin/singin';
import SignUp from '../../components/sign-up/sign-up';

import './singinup.scss';

const SingInUp = () => (
    <div className="sign-in-and-sign-up">
        <SingIn />
        <SignUp />
    </div>
);

export default SingInUp;