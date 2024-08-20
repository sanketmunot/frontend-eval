import React, { useContext } from 'react'
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { changeByValue } from '../counterSlice';

function StepperChild({ value }) {
    const dispatch = useDispatch();

    return (
        <button
        className={styles['stepper-button']}
        onClick={() => {
            dispatch(changeByValue(value))
        }}
        >
            {value}
        </button>
    )
}

export default StepperChild