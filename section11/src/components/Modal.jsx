import './Modal.scss';

const Modal = ({show, setShow}) => {
    const content = show && (
        <div className='modal'>
            <div className='modalInner'>
                <button
                    type='button'
                    onClick={()=> {
                        setShow(false);
                    }}
                >x</button>
                <div className='modalContent'>
                    모달 팝업
                </div>
            </div>
        </div>
    )

    return content

}

export default Modal