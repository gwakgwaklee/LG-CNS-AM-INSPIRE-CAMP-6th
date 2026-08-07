import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import BlogList from '../blog/list/BlogList';
import Button from "../../components/styled/Button";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const WelcomeMessage = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #333;
`;

const LogoutButton = styled(Button)`
    background-color: #f44336;
    color: white;

    &:hover {
        background-color: #d32f2f;
    }
`;

// blog property - title, content, category, email(pk)
const BlogIndexPage = () => {
    const user = localStorage.getItem('user');
    const [blogs, setBlogs] = useState([]);

    /*
        Q)
        - Axios 통신 (get(blogs), paramas x)
        - 데이터를 reactive state 관리 state
        - 랜더링시점에 데이터 바인딩 effect
    */


    const loadData = async () => {
        await api.get(`/blogs`)
            .then(response => {
                if (response.status === 200) {
                    console.log(`debug >>>> response : `, response.data)
                    setBlogs(response.data);
                }
            }).catch(error => {
                console.log(`debug >>>> axios request error`, error);
            })

    }

    useEffect(() => {
        loadData();
    }, [])


    const moveUrl = useNavigate();
    // handler
    const writeHandler = (e) => {
        moveUrl("/blogs/write");

    }


    return (
        <Wrapper>
            <Container>
                {user && <WelcomeMessage>{user}님 환영합니다.</WelcomeMessage>}
                <Button title='글 작성하기'
                    onClick={(e) => writeHandler(e)}></Button>
                &nbsp;&nbsp;&nbsp;
                <Button title='로그아웃'></Button>
                &nbsp;&nbsp;&nbsp;
                <Button title='기상예보'></Button>

                <BlogList ary={blogs || []} />

            </Container>
        </Wrapper>
    )
}

export default BlogIndexPage;