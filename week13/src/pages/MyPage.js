import React,{useContext} from 'react'
import {useRecoilValue, useResetRecoilState} from 'recoil';
import {userNameAtom, isSubmitedAtom, emailAtom} from '../recoil/atoms';

import {Button, Title, Wrapper} from '../components/layout/common';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/context';

const MyPage = () => {
    const userName = useRecoilValue(userNameAtom);
    const resetName = useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const reset = useResetRecoilState(isSubmitedAtom);
    const navigate = useNavigate();

    const mode = useContext(ThemeContext);

    const handleDelete=()=>{
        reset();
        resetName();
        resetEmail();

        navigate('/');

    }

    return (
        <Wrapper>
        <Title>Welcome {userName} </Title>
        <Button onClick={handleDelete} mode={mode.button}>리셋</Button>
        </Wrapper>
    )
}

export default MyPage