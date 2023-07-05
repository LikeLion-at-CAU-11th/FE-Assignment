import React, { useEffect, useState } from 'react';
import { getMyPage } from '../apis/mypage';
const Mypage = () => {
  //로그인한 사람의 정보 가져오기
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    getMyPage({ access: accessToken, refresh: refreshToken }).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  //화면에 찍기
  if (isLoading) return <div>로딩중</div>;
  return (
    <>
      <div>{data.name}</div>
      <div>{data.age}</div>
    </>
  );
};

export default Mypage;
