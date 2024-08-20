import React from 'react'
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { redo, undo } from '../counterSlice';

function CustomButton({ text, onClick, disabled }) {
    return (
        <button disabled={disabled}
            className={styles.buttons}
            onClick={onClick}>
            {text}
        </button>
    )
}
function Buttons() {
    const dispatch = useDispatch();
    const disableUndo = useSelector((state) => state.counter.disableUndo);
    const disableRedo = useSelector((state) => state.counter.disableRedo);

    return (
        <div className={styles['button-container']}>
            <CustomButton text={"Undo"} disabled={disableUndo} onClick={() => dispatch(undo())} />
            <CustomButton text={"Redo"} disabled={disableRedo} onClick={() => dispatch(redo())} />
        </div>
    )
}

export default Buttons