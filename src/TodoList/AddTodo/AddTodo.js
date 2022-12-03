import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { callApiAddJob } from "../../Redux/actions";

export default function AddTodo() {
    const [valueInput, setValueInput] = useState("");
    const dispatch = useDispatch()
    const refInput = useRef();
    const handleForm = (e) => {
        e.preventDefault();
        if (valueInput !== '') {
            const jobNew = {
                id: uuidv4(),
                content: valueInput,
                isChecked: false
            }
            dispatch(callApiAddJob(jobNew))
            refInput.current.focus();
            setValueInput("");
        } else {
            alert('Bạn chưa nhập công việc !')
        }
    };
    return (
        <div className="w-50">
            <h2>TodoList</h2>
            <form onSubmit={handleForm}>
                <div className="d-flex">
                    <input
                        type="text"
                        className="form-control mx-3"
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        ref={refInput}
                    />
                    <button type="submit" className="btn btn-primary">
                        Thêm
                    </button>
                </div>
            </form>
        </div>
    );
}
