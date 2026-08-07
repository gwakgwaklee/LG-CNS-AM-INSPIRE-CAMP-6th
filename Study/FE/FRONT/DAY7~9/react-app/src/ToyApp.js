import { BrowserRouter, Routes, Route } from "react-router-dom";

// 기존 코드 (주석 처리)
// import SignUpPage from "./features/user/page/SignUpPage"
// import SignInPage from "./features/user/page/SignInPage"; // Assuming SignInPage exists in its own file
// import BlogWritePage from "./features/page/BlogWritePage";
// import BlogIndexPage from "./features/page/blogIndexPage"; // Added import for BlogIndexPage
// import BlogReadPage from "./features/page/BlogReadPage"; // Added import for BlogReadPage, if it will be used

// 새로운 코드
import SignUpPage from "./features/user/page/SignUpPage.jsx"; // 기존 코드
import SignInPage from "./features/user/page/SignInPage.jsx"; // 기존 코드
import BlogWritePage from "./features/page/BlogWritePage";
import BlogIndexPage from './features/page/BlogIndexPage';
import BlogReadPage from "./features/page/BlogReadPage";

const ToyApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                {/* user */}
                <Route path="/" element={<SignUpPage />} /> {/* 회원가입이 LANDING PAGE */}
                <Route path="/users/signIn" element={<SignInPage />} /> {/* 로그인 페이지 */}


                {/* blog */}
                <Route path="/blogs/index" element={<BlogIndexPage />} />
                <Route path="/blogs/write" element={<BlogWritePage />} />
                <Route path="/blog/read/:blogId" element={<BlogReadPage />} />


                {/* blog - comment */}
            </Routes>

        </BrowserRouter>
    )
}

export default ToyApp;