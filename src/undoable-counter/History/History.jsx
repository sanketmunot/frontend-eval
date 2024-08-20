import React from 'react'
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

function History() {
    const history = useSelector((state) => state.counter.history);
    return (
        <div className={styles['history-container']}>
            <table>
                {
                    history.map((item, index) => (
                        <tr key={index} className='fle space-betwee'>
                            <td>{item.step}</td>
                            <td>{item.prevVal}{`->`}{item.newVal}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default History