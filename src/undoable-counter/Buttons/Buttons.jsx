import React from 'react'
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { redo, undo } from '../counterSlice';
function Buttons() {
    const dispatch = useDispatch();
    const disableUndo = useSelector((state) => state.counter.disableUndo);
    const disableRedo = useSelector((state) => state.counter.disableRedo);

    return (
        <div className={styles['button-container']}>
            <button disabled={disableUndo}
                className={styles.buttons}
                onClick={() => dispatch(undo())}
            >
                Undo
            </button>

            <button disabled={disableRedo} className={styles.buttons}
                onClick={() => dispatch(redo())}
            >
                Redo
            </button>
        </div>
    )
}

export default Buttons