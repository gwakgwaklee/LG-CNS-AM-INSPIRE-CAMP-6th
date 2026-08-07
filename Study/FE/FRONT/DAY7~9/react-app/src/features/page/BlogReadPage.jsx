// 기존 코드 (주석 처리)
// const BlogReadPage = () => {
// }
// export default BlogReadPage;

// 새로운 코드
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/axios';

const BlogReadPage = () => {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newComment, setNewComment] = useState('');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const currentUsername = localStorage.getItem('username') || 'Anonymous'; // 로그인된 사용자 이름 가져오기

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await api.get(`/posts/${blogId}`);
                setPost(response.data);
            } catch (err) {
                console.error("Failed to fetch post:", err);
                setError("블로그 글을 불러오는데 실패했습니다.");
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [blogId]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) {
            alert('댓글 내용을 입력해주세요.');
            return;
        }
        if (!isLoggedIn) {
            alert('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
            navigate('/users/signIn');
            return;
        }

        try {
            // JSON Server에서 댓글은 게시글 내부에 배열로 관리
            const updatedComments = post.comments ?
                [...post.comments, { id: Date.now(), author: currentUsername, text: newComment, createdAt: new Date().toISOString() }] :
                [{ id: Date.now(), author: currentUsername, text: newComment, createdAt: new Date().toISOString() }];
            await api.patch(`/posts/${blogId}`, { comments: updatedComments });
            setPost({ ...post, comments: updatedComments });
            setNewComment('');
            alert('댓글이 성공적으로 추가되었습니다!');
        } catch (err) {
            console.error("Failed to add comment:", err);
            alert('댓글 추가에 실패했습니다.');
        }
    };

    if (loading) {
        return <div className="container mt-5 text-center">로딩 중...</div>;
    }

    if (error) {
        return <div className="container mt-5 text-center text-danger">{error}</div>;
    }

    if (!post) {
        return <div className="container mt-5 text-center">글을 찾을 수 없습니다.</div>;
    }

    return (
        <div className="container mt-5">
            <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#e3f2fd' }}> {/* 배경색 및 스타일 수정: 시원한 연한 파란색 */}
                <button onClick={() => navigate('/blogs/index')} className="btn btn-secondary mb-3">
                    목록으로 돌아가기
                </button>
                <h2 className="mb-3 pb-2 border-bottom">{post.title}</h2>
                <p className="text-muted small mb-4">
                    작성자: {post.author || 'Unknown'} | 작성일: {new Date(post.createdAt).toLocaleString()}
                </p>
                <div className="lead mb-4" style={{ whiteSpace: 'pre-wrap' }}>
                    {post.content}
                </div>

                <div className="mt-5 pt-4 border-top">
                    <h3 className="mb-3">댓글</h3>
                    {post.comments && post.comments.length > 0 ? (
                        post.comments.map((comment) => (
                            <div className="card mb-3 shadow-sm" key={comment.id}>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-1 text-muted">{comment.author}</h6>
                                    <p className="card-text">{comment.text}</p>
                                    <p className="card-text small text-muted">{new Date(comment.createdAt).toLocaleString()}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-muted fst-italic">아직 댓글이 없습니다.</p>
                    )}
                </div>

                <form onSubmit={handleCommentSubmit} className="mt-4 pt-3 border-top">
                    <div className="mb-3">
                        <label htmlFor="commentContent" className="form-label">댓글 작성:</label>
                        <textarea
                            id="commentContent"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            rows="3"
                            placeholder="댓글을 입력하세요..."
                            className="form-control"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-info w-100">댓글 달기</button>
                </form>
            </div>
        </div>
    );
};

export default BlogReadPage;