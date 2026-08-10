import styled from "styled-components"
import Button from "../../../components/styled/Button"
import TextInput from "../../../components/styled/TextInput";
import { useEffect, useState } from "react";


const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const CommentText = styled.p`
    font-size: 20px;
    font-weight: bold ;
`;


const BlogCommentItem = ({ comment, handler, updateHandler }) => {



    const [isEdit, setIsEdit] = useState(false);
    const [mention, setMention] = useState('');
    //로그인 사용자 이메일
    const user = localStorage.getItem('user');


    const updateMentionHandler = (id, mention) => {
        if (!isEdit) {
            // 수정모드 ON
            setIsEdit(true);
        } else {
            /* 
            SQL
            - update table
                set column = vaule
                where commentId
                where id = ?;
            - 선택된 특정 댓글의 기본 키 값을 가지고 사용자가 입력한 값으로 수정
            - UI - 일부 리렌더링(댓글 목록만)
            - 당연히 json-server 수정이 되어야 함
            */
            // 수정완료모드 ON
            updateHandler(comment.id, mention); // ReadPage : commentUpdateHandler
            setIsEdit(false);
        }
    }
    useEffect(() => {
        if (comment?.comment) {
            setMention(comment.comment);
        }
    }, [comment.comment]);


    return (
        <Wrapper>
            {/*<CommentText>{comment.comment}</CommentText>*/}
            <TextInput
                height={16}
                value={mention}
                handler={(e) => setMention(e.target.value)}
                disabled={!isEdit}
            />
            {
                user === comment.email &&
                <div>
                    <Button title='삭제'
                        onClick={(e) => handler(e, comment.id)} />
                    <Button title={isEdit ? '수정완료' : '수정'}
                        onClick={(e) => updateMentionHandler(e)}
                    />
                </div>
            }

        </Wrapper>
    );
}

export default BlogCommentItem;