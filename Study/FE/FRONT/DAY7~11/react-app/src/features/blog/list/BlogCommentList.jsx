import BlogCommentItem from "../item/BlogCommentItem";
import styled from "styled-components"

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

const BlogCommentList = ({ comments, handler, updateHandler }) => {
    return (
        <Wrapper>
            {
                comments.map((comment, idx) => {
                    return <BlogCommentItem
                        key={idx}
                        comment={comment}
                        handler={handler}
                        updateHandler={updateHandler}
                    />
                })
            }
        </Wrapper>
    );
}

export default BlogCommentList;