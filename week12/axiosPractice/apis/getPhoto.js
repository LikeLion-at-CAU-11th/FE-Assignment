import axios from 'axios';
export const getPhoto = async () => {
  const result = await axios.get(
    'https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?serviceKey=qAzPL9saU4atfm%2F%2FrfNHZY5LkVfxDUDSr3BR%2Bm9OSbUXV3EBJRSx%2Fb6FQi3bAopM7mwKbWJLcqAM5UjAYbQQLw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&_type=json'
  );
  console.log(result.data.response.body);
};
