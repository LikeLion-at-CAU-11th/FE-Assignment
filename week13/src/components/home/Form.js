import React from 'react'
import {styled} from 'styled-components';

import {useRecoilState} from 'recoil';
import {userNameAtom, emailAtom} from '../../recoil/atoms';

const Form = ({type, inputType}) => {
    const [userName, setUserName] = useRecoilState(userNameAtom);
    const [email, setEmail] = useRecoilState(emailAtom);

    const onChange=(e)=>{
        const data = e.target.value;

        if(inputType==='이름'){
            setUserName(data);
        }
        else{
            setEmail(data);
        }
    }

    return (
        <Wrapper>
            <div>{inputType}</div>
            <input type={type} onChange={onChange} />
        </Wrapper>
    )
}

export default Form

const Wrapper = styled.div`
display: flex;
flex-direction : column;

margin-bottom: 20px;
`