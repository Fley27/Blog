import Form from "./forms/form";
import Attachment from "./forms/attachement";
import Editor from "./forms/editor";
import styles from "../../../styles/modal.module.css"

const Modal = ({state, setState, pagination, handlePagination, handleToggle}) => {
    return(
        <div className = {styles.container}>
            <div className = {styles.modal}>
                <div className = {styles.title}>Create a New Post</div>
                {
                    !pagination ? (
                        <Form
                            state = {state}
                            setState =  {setState}
                            pagination = {pagination}
                            handlePagination = {handlePagination}
                        />
                    ): pagination === 1 ? (
                        <Attachment
                            state = {state}
                            setState =  {setState}
                            pagination = {pagination}
                            handlePagination = {handlePagination}
                        />
                    ) : (
                        <div className = {styles.editor}>
                            <Editor
                                state = {state}
                                setState = {setState}
                                pagination = {pagination}
                                handlePagination = {handlePagination}
                            />
                        </div>
                    )
                }
            </div>
            <div onClick = {()=> {
                handleToggle(false);
                handlePagination(0);
            }} className = {styles.overlay}></div>
        </div>
    )
}

export default Modal;