// 기존 코드 (활성화)
import axios from 'axios'
const endPoint = process.env.REACT_APP_BACKEND_ENDPOINT;
const api = axios.create({
    baseURL: endPoint
})
export default api

// 새로운 코드 (주석 처리)
// import axios from 'axios';
// const instance = axios.create({
//     baseURL: 'http://localhost:3001', // JSON Server가 3001 포트에서 실행된다고 가정
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });
// export default instance;