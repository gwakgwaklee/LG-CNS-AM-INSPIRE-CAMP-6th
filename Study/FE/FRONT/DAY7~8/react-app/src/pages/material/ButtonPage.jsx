import MaterialButton from "../../components/material/MaterialButton";

const ButtonPage = () => {
    const saveHandle = () => {
        console.log(`debug >>>> save button click`)
    }
    const listHandler = () => {
        console.log(`debug >>>> list button click`)
    }
    return (
        <div>
            <MaterialButton
                title='글 작성하기'
                onClick={(e) => saveHandle()}
            />

            <MaterialButton
                title='글 목록보기'
                onClick={(e) => listHandler()}
            />

        </div>
    )
}

export default ButtonPage; 