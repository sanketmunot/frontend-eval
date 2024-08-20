import React, { createContext, useRef, useState } from 'react'
import styles from './styles.module.scss';
import Buttons from './Buttons/Buttons';
import Stepper from './Stepper/Stepper';
import History from './History/History';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
    return (
        <div className='container'>
            <div>
                <h1>Undoable Counter</h1>
                <div>
                    <Provider store={store}>
                        <Buttons />
                        <Stepper />
                        <History />
                    </Provider>
                </div>
            </div>
        </div>
    )
}

export default App