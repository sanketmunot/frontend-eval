import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

function StepperValue() {
    const value = useSelector((state) => state.counter.value);
    return (
        <div className={styles["current-value"]}>{value}</div>
    )
}

export default StepperValue