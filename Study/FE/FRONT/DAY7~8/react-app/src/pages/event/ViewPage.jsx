// pathVariable 형태의 데이터를 얻어올 때
import { useParams } from "react-router-dom";

const ViewPage = () => {
    // pathVariable 가능 
    const { id } = useParams();
    console.log(`debug >>>> viewPage userParams id : ${id}`);
}

export default ViewPage;