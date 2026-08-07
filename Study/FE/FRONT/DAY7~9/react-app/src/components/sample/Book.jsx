import Librarypage from "../../pages/sample/LibrayPage";
import '../../styles/book.css'
import placeholder from '../../img/placeholder.png';
const Book = (props) => {
    return (
        <div className='wrapper'>

            <div>
                <img src={placeholder}
                    className='image'></img>
            </div>
            <div>
                <span>책 이름 : {props}</span> <p />
                <span>책 가격 : {props.price}</span>
            </div>
        </div >
    );
}

export default Book;