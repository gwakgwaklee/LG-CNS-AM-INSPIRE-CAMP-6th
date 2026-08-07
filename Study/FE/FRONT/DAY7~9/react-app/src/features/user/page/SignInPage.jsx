import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // 1. Link 컴포넌트 import
import api from '../../../api/axios';

const SignInPage = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.username.trim() || !form.password.trim()) {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            return;
        }

        try {
            // 아이디와 비밀번호로 사용자 조회
            const response = await api.get(`/users?username=${form.username}&password=${form.password}`);

            if (response.data.length > 0) {
                const loggedInUser = response.data[0];

                localStorage.setItem('isLoggedIn', 'true');

                // PK로 사용할 이메일(email)을 'user' 키로 저장
                localStorage.setItem('user', loggedInUser.email);

                alert('로그인 성공! 메인 페이지로 이동합니다.');
                navigate('/blogs/index');
            } else {
                alert('아이디 또는 비밀번호가 올바르지 않습니다.');
            }
        } catch (error) {
            console.error('로그인 실패:', error);
            alert('로그인 중 오류가 발생했습니다.');
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [id]: value
        }));
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 p-4 rounded shadow-sm" style={{ backgroundColor: '#e3f2fd' }}>
                    <h2 className="text-center mb-4">로그인</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">아이디:</label>
                            <input
                                type="text"
                                id="username"
                                value={form.username}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">비밀번호:</label>
                            <input
                                type="password"
                                id="password"
                                value={form.password}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100">
                            로그인
                        </button>
                    </form>


                    <p className="text-center mt-3">
                        계정이 없으신가요? <Link to="/signup">회원가입</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;