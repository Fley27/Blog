import Form from "../blog/post/forms/form";
import Attachment from "../blog/post/forms/attachement";
import Editor from "../blog/post/forms/editor";
import Edit_Approved from "../blog/post/forms/edit-approved"
import styles from "../../styles/modal.module.css"

const Modal = ({state, setState, pagination, handlePagination, handleToggle, action, approvedArticle, token, id}) => {
    return(
        <div className = {styles.container}>
            <div className = {styles.modal}>
                <div className = {styles.title}>Article edition</div>
                {
                    action === "approved" ? (
                        <Edit_Approved
                            state = {state}
                            setState =  {setState}
                            pagination = {pagination}
                            id = {id}
                            approvedArticle = {approvedArticle}
                            token = {token}
                        />
                    ):(
                        <>
                            {
                                pagination === 0 ? (
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
                                ): pagination === 2 ?  (
                                    <div className = {styles.editor}>
                                        <Editor
                                            state = {state}
                                            setState = {setState}
                                            pagination = {pagination}
                                            handlePagination = {handlePagination}
                                        />
                                    </div>
                                ): null
                            }
                        </>
                    )
                }
            </div>
            <div onClick = {()=> {
                handleToggle(false);
            }} className = {styles.overlay}></div>
        </div>
    )
}

export default Modal;