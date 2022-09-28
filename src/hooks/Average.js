import React,{useState, useRef, useCallback, useMemo} from 'react'

const getAverage = lists => {
    console.log('평균값 계산중..');
    if (lists.length === 0) return 0;
    const sum = lists.reduce((a,b) => a + b);
    return sum / lists.length;
}

function Average() {
    const[lists,setLists] = useState([]);
    const[number, setNumber] = useState('');

    const inputEl = useRef(null);

    const onChange = useCallback (e => {
        console.log('컴포넌트가 처음 렌더링 될 때만 함수 생성..');
        setNumber(e.target.value);
    },[]); // [] 비어있으면 컴포넌트가 처음 렌더링 될 때만 함수 생성 // 렌더링 최적화할때 사용 //함수재사용 할때 사용

    const onInsert = useCallback(e => {
        console.log('number 혹은 list가 바뀌었을 때만 함수 생성');
        const nextLists = lists.concat(parseInt(number));
        setLists(nextLists);
        setNumber('');
        inputEl.current.focus();
    },[number,lists]); // number 혹은 list 가 바뀌었을때만 함수 생성
    // 리액트에서 함수 만들때는 useCallback으로 한번 감싸줌

    const avg = useMemo(() => getAverage(lists)
    ,[lists]);

    return (
        <div>
            <div>Average</div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {lists.map((list,index) => (
                    <li key={index}>{list}</li>
                ))}
            </ul>
            <div> <b>평균값:</b> {avg} </div>
        </div>
    )
}

export default Average;