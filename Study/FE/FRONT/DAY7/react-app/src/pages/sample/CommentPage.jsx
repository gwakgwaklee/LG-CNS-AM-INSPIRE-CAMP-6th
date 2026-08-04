import api from '../../api/axios';
import Comment from '../../components/sample/Comment';

const CommentPage = () => {
    console.log(`debug >>>> CommentPage load event `);

    // 1. 더미 데이터 구조 수정 (객체 배열 형태로 변경)
    let comments = [
        {
            "writer": "임정섭",
            "comment": "강사님과 함께하는 즐거운 React..."
        },
        {
            "writer": "차현준",
            "comment": "강사님과 함께하는 재미없는 React..."
        },
        {
            "writer": "박선아",
            "comment": "강사님과 함께하는 재미있는 React..."
        }
    ];

    // ui
    return (
        <div>
            {
                comments.map((comment, idx) => {
                    return <Comment key={idx} data={comment} />
                })
            }
        </div>
    );
}

export default CommentPage;