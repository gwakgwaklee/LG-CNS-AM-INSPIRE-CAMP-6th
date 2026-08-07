

// const BlogWritePage = () => {
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');
//     const navigate = useNavigate();
//     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//     const author = localStorage.getItem('username') || 'Anonymous'; // 로그인된 사용자 이름 가져오기

//     useEffect(() => {
//         if (!isLoggedIn) {
//             alert('로그인이 필요합니다.');
//             navigate('/users/signIn');
//         }
//     }, [isLoggedIn, navigate]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!title.trim() || !content.trim()) {
//             alert('제목과 내용을 모두 입력해주세요.');
//             return;
//         }
//         if (!isLoggedIn) {
//             alert('로그인 상태가 아닙니다. 다시 로그인해주세요.');
//             navigate('/users/signIn');
//             return;
//         }

//         try {
//             await api.post('/posts', {
//                 title,
//                 content,
//                 author,
//                 createdAt: new Date().toISOString(),
//                 comments: [] // 댓글 배열 초기화
//             });
//             alert('글이 성공적으로 작성되었습니다!');
//             navigate('/blogs/index');
//         } catch (err) {
//             console.error("Failed to write post:", err);
//             alert('글 작성에 실패했습니다.');
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-8 p-4 rounded shadow-sm" style={{ backgroundColor: '#e3f2fd' }}> {/* 배경색 및 스타일 수정: 시원한 연한 파란색 */}
//                     <h2 className="text-center mb-4">새 글 작성</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-3">
//                             <label htmlFor="title" className="form-label">제목:</label>
//                             <input
//                                 type="text"
//                                 id="title"
//                                 value={title}
//                                 onChange={(e) => setTitle(e.target.value)}
//                                 className="form-control"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="content" className="form-label">내용:</label>
//                             <textarea
//                                 id="content"
//                                 value={content}
//                                 onChange={(e) => setContent(e.target.value)}
//                                 className="form-control"
//                                 required
//                                 rows="10"
//                             ></textarea>
//                         </div>
//                         <button
//                             type="submit"
//                             className="btn btn-success w-100"
//                         >
//                             글 작성 완료
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogWritePage;

import styled from "styled-components";
import Button from "../../components/styled/Button";
import TextInput from "../../components/styled/TextInput";
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
const CategoryLabel = styled.div`
    font-size: 13px;
    font-weight: 600;
    color: #6b7280;
    margin-bottom: 8px;
`;

const CategoryWrapper = styled.div`
    /* Container의 margin-bottom 규칙과 충돌 없이 label + row 묶기 위한 wrapper */
`;

const CategoryRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    width: 100%;
`;
const CategoryChip = styled.button`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    white-space: nowrap;
    height: 36px;
    line-height: 1;
    type: button;

    border: 1.5px solid ${(props) => (props.$active ? "#6366f1" : "#e5e7eb")};
    background: ${(props) => (props.$active ? "#6366f1" : "#ffffff")};
    color: ${(props) => (props.$active ? "#ffffff" : "#4b5563")};
    font-size: 13px;
    font-weight: 600;
    padding: 0 18px;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.15s;
    outline: none;

    &:focus {
        outline: none;
        box-shadow: none;
    }

    &:hover {
        border-color: #6366f1;
    }
`;
const BlogWritePage = () => {
    const user = localStorage.getItem('user');
    const CATEGORIES = ["전체", "개발", "생활", "취미", "일상"];

    const moveUrl = useNavigate();


    return (

        <Wrapper>
            <Container>
                {user && <WelcomeMessage>{user}님 환영합니다.</WelcomeMessage>}

                <TextInput height={20} />

                {/* category 선택*/}
                <CategoryWrapper>
                    <CategoryLabel>카테고리</CategoryLabel>
                    <CategoryRow>
                        {
                            CATEGORIES.map((category, idx) => {
                                return <CategoryChip
                                    key={idx}
                                    type='button'>

                                    {category}
                                </CategoryChip>

                            })
                        }
                    </CategoryRow>
                </CategoryWrapper>
                {/* title */}
                <TextInput height={20} />

                {/* content */}
                <TextInput height={20} />

                {/* Button */}
                <TextInput title='이전'
                    onClick={() => {
                        moveUrl('/blogs/index')
                    }} />


            </Container>
        </Wrapper>
    )
}


export default BlogWritePage;