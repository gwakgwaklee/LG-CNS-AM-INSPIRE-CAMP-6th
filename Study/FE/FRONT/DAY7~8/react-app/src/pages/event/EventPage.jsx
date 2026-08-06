// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import api from '../../api/axios';
import { useNavigate } from 'react-router-dom'

const EventPage = () => {

    /*
    변수란? 
    - scope : 전역, 지역

    const data = {
        id : 'jslim', password : 'jslim'

    }
    let id = data.id;
    let password = data.password;
    -> State 관리가 안되는 코드 
    -> UI 와 Script가 sync가 안맞는다.
    
    const [id, setId] = useState();
    const [password, setPassword] = useState();

    setId(data.id);
    setPassword(data.password);
    -> 상태관리 UI와 Script가 sync가 맞는 코드
    */

    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('');

    // 작성해주신 원래 방식대로 직접 꽂아 넣기
    const emailHandler = (e) => {
        setEmail(e.target.value);
        // console.log(`debug >>>> emailHandler email : `, email);
    }

    const passwordHandler = (e) => {
        setPswd(e.target.value);
        // console.log(`debug >>>> passwordHandler password : `, pswd);
    }


    // transition 위한 Hook 
    const moveUrl = useNavigate();
    const signInHandler = async (e, email, pswd) => {
        console.log(`debug >>>> signInHandler email : `, email, `, pswd : `, pswd);
        e.preventDefault();

        await api.get(`/users?email=${email}&pswd=${pswd}`)
            .then(response => {
                console.log(`debug >>>> response`, response)

                const ary = response.data;
                if (ary.length > 0) {


                    const user = ary[0];
                    localStorage.setItem('userName', user.name);
                    //Router를 통해서 데이터를 전달
                    moveUrl('/success', {
                        state: {
                            user,
                            from: '/singIn'
                        }
                    })
                    // moveUrl(`/success?catagory=react&sort=latest`)
                } else {
                    moveUrl(`/error?category=react&sort=latest`);
                }
            })
            .catch(err => {
                console.log(`debug >>>> erorr : `, err);
            })

    }

    useEffect(() => {
        // console.log(`debug >>>> email : `, email);
        // console.log(`debug >>>> password : `, pswd);
    }, [email, pswd]);

    return (
        // mt-4(상단 여백)와 max-width 스타일 추가로 중앙 레이아웃 정돈
        <div className='container mt-4' style={{ maxWidth: '600px' }}>
            <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={(e) => emailHandler(e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Password:</label>
                <input type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="pswd"
                    value={pswd}
                    onChange={(e) => passwordHandler(e)} />
            </div>
            <div className="form-check mb-3">
                <label className="form-check-label">
                    <input className="form-check-input"
                        type="checkbox"
                        name="remember" /> Remember me
                </label>
            </div>
            <Button variant='primary'
                onClick={(e) => signInHandler(e, email, pswd)}>SignIn</Button>
            {/* <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => signInHandler(e, email, pswd)}
            >SignIp</button> */}
        </div>
    );
}

export default EventPage;