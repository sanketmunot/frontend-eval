import StepperChild from './StepperChild'
import styles from './styles.module.scss';
import StepperValue from './StepperValue';


function Stepper() {
    
    return (
        <div className={styles['stepper-container']}>
            <StepperChild value={-100} />
            <StepperChild value={-10} />
            <StepperChild value={-1} />
            <StepperValue />
            <StepperChild value={+1} />
            <StepperChild value={+10} />
            <StepperChild value={+100} />
        </div>
    )
}

export default Stepper