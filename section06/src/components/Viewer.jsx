import Modal from "./Modal";

const Viewer = ({count}) => {

    return (
        <div>
            <div>현재 카운트 : </div>
            <h1>{count}</h1>
            <Modal />
        </div>
    )
}

export default Viewer;