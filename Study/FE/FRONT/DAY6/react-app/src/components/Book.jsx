import Librarypage from "../pages/sample/LibrayPage";

const Book = (props) => {
    return (
        <div>
            <div>
                <span>책 이름 : {props.bookName}</span>
            </div>
        </div>
    );
}

export default Book;