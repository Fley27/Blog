import App from "../../../text-editor"

const Editor = ({state, setState, pagination, handlePagination}) => (
    <App 
        state = {state}
        setState = {setState}
        pagination = {pagination}
        handlePagination = {handlePagination}
    />
)

export default Editor;