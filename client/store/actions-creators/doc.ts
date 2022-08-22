import {Dispatch} from "react";
import {DocAction, DocActionTypes} from "../../types/doc";
import axios from "axios";


export const fetchDocs = () => {
    return async (dispatch: Dispatch<DocAction>) => {
        try {
            const response = await axios.get ('http://server:5000/document')
            dispatch ({type: DocActionTypes.FETCH_DOCS, payload: response.data})
        } catch (e) {
            dispatch ({type: DocActionTypes.FETCH_DOCS_ERROR, payload: 'Произошла ошибка при загрузке документов'})
        }
    }
}