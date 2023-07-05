import React, { useEffect, useState } from 'react';
import { getMyPage } from '../apis/mypage';
const Mypage = () => {
  //로그인한 사람의 정보 가져오기
  const [data, setData] = useState({});
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    getMyPage({ access: accessToken, refresh: refreshToken }).then((res) =>
      setData(res.data)
    );
  }, []);
  //화면에 찍기
  return (
    <>
      <div>{data.name}</div>
      <div>{data.age}</div>
    </>
  );
};

export default Mypage;
