import Book from '../../components/sample/Book';

const Librarypage = () => {
    /*
    jsx = script + html
    */

    //Script
    const books = [
        { category: 'it', bookName: 'java', price: '10,000원' },
        { category: 'it', bookName: 'java', price: '15,000원' },
        { category: 'lang', bookName: 'KOR', price: '20,000원' },
        { category: 'lang', bookName: 'ENG', price: '25,000원' },
        { category: 'essay', bookName: 'XXXX', price: '30,000원' },
        { category: 'essay', bookName: 'XXXX', price: '35,000원' },
    ];


    // UI Template
    // html에서 스크립트 변수를 {} 를 이용하여 자유롭게 사용 가능
    return (
        <div>
            {
                books.filter(book => book.category === 'lang')
                    .map((book, idx) => {
                        return <Book
                            key={idx}
                            // bookName={book.bookName}
                            // price={book.price}
                            book={book} />
                    })
            }
        </div>
    )
}


export default Librarypage;