import { useEffect } from "react";

const Even = () => {
    useEffect(()=>{
        // 언마운트
        // 클린업, 정리함수
        return () => {
            console.log("unmount")
            console.log("클린업, 정리함수")
        }
    }, [])
    return(
        <div>짝수</div>
    )
}

export default Even;