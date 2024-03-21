const Modal = () => {
    return(
        <>
            <div className="modal">
                <div className="modal__inner">
                    <div>modal</div>
                    <button
                        type="button"
                        onClick={(e)=>{
                            alert(`${e.target.value} 클릭`)
                        }}
                        value="modal close"
                    >
                        modal close
                    </button>
                </div>
            </div>
        </>
    )
}

export default Modal