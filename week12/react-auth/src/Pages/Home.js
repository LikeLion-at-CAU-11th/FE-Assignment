import React from 'react';
import { styled } from 'styled-components';
import { useForm } from '../hooks/useForm';
import { login } from '../apis/login';
import { useNavigate } from 'react-router-dom';
import { Input, Inputs, Title, Wrapper, Form } from '../components/Common';

const Home = () => {
  const [id, changeId] = useForm();
  const [pw, changePW] = useForm();
  const router = useNavigate();
  const onClick = async () => {
    const result = await login(id, pw);
    localStorage.setItem('accessToken', result.accessToken);
    localStorage.setItem('refreshToken', result.refreshToken);
    router('/mypage');
  };
  return (
    <Wrapper>
      <Title>로그인하기</Title>
      <Form>
        <Inputs>
          <Input
            placeholder={'아이디'}
            type="text"
            value={id}
            onChange={changeId}
          />
          <Input
            placeholder={'비밀번호'}
            type="password"
            value={pw}
            onChange={changePW}
          />
        </Inputs>
        <Button onClick={onClick}>LOGIN</Button>
      </Form>
    </Wrapper>
  );
};

export default Home;

const Button = styled.div`
  background-color: black;
  color: white;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;