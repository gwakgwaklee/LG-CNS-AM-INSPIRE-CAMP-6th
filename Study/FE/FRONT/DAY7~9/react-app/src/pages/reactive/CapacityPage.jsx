import Button from '../../components/styled/Button';
import { useState, useEffect } from 'react';

const CapacityPage = () => {

    // cnt = 변수, setCnt = 함수
    let [cnt, setCnt] = useState(0);
    let [full, setFull] = useState(false)
    let [empty, setEmpty] = useState(false);

    const capacity = 10;

    // console.log(`debug >>>> CapacityPage life cycle upmount `);
    //let cnt = 0;

    const upCntHandler = (e) => {
        setCnt(cnt => cnt + 1);
        // console.log(`debug >>>> CapacityPage load event `, cnt);
    }

    const downCntHandler = (e) => {
        setCnt(cnt => cnt - 1)
        // console.log(`debug >>>> CapacityPage load event `, cnt)
    }

    // side effect으로 렌더링 이후 작업이 필요한 경우 
    // useEffect() 함수를 이용해서 작업 할 수 있다.
    useEffect(() => {
        console.log("debug >>>> size effect rander mount!");
    }, []);

    useEffect(() => {
        console.log(`CapacityPage life cycle update`);
        console.log(`debug >>>> size effect rander cnt :  ${cnt}`);
        setFull(cnt >= capacity)
        setEmpty(cnt <= 0);
    }, [cnt]);
    /*
    - 입장 인원 10명
    - 입장, 퇴장 버튼을 만든다.
    - 입장 버튼을 클릭하면 인원수가 증가되고 입장인원이 꽉차면 버튼을 비활성화 시킨다.
    - 퇴장 버튼을 클릭하면 인원수가 감소되고 인원이 0이되면 버튼을 비활성화 시킨다.
    */
    // 함수 호출 시 매개 변수 전달 x 
    // 매개 변수(props) 필요시 => 형식으로 
    return (
        <div>
            <p>입장인원 : {cnt}</p>
            <Button
                title="입장"
                onClick={(e) => upCntHandler()}
                disabled={full}
            />

            <Button
                title="퇴장"
                onClick={(e) => downCntHandler()}
                disabled={empty}
            />
        </div>
    );

}

export default CapacityPage;