import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    history: [],
    disableUndo: true,
    disableRedo: true,
    undoArray: []
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeByValue: (state, { payload }) => {
            const prevVal = state.value;
            const newVal = prevVal + payload;
            state.value = newVal;
            state.history = ([
                {
                    prevVal,
                    newVal,
                    step: payload
                },
                ...state.history
            ]);

            state.disableUndo = state.history.length < 1;
        },

        undo: (state) => {
            const [last, ...rest] = state.history;
            state.value = last.prevVal;
            state.undoArray = [last, ...state.undoArray];
            state.history = rest;
            state.disableUndo = state.history.length < 1;
            state.disableRedo = state.undoArray < 1;
        },

        redo: (state) => {
            const [first, ...rest] = state.undoArray;
            state.value = first.newVal;
            state.history = [first, ...state.history];
            state.undoArray = rest;
            state.disableUndo = state.history.length < 1;
            state.disableRedo = state.undoArray < 1
        }
    },
})

export const { changeByValue, pushToHistory, undo, redo } = counterSlice.actions

export default counterSlice.reducer