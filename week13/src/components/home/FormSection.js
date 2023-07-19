import React, {useContext} from 'react'
import { ThemeContext } from '../../context/context';
import Form from './Form';
import {Button} from '../layout/common';

import { isSubmitedAtom } from '../../recoil/atoms';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const FormSection = () => {
    const mode = useContext(ThemeContext);

    const setSubmit = useSetRecoilState(isSubmitedAtom);
    const navigate = useNavigate();

    const handleClick=()=>{
        setSubmit(true);
        navigate('/mypage');
    }

    return (
    <>
    <Form type='text' inputType='이름'/>
    <Form type='email' inputType='이메일'/>
    <Button mode={mode.button} onClick={handleClick}>제출</Button>
    </>
    )
}

export default FormSection