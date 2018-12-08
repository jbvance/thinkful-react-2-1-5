import * as actions from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    guessCount: 0
};

export const hotColdReducer = (state=initialState, action) => {
    if (action.type === actions.RESTART_GAME) {
        console.log('RESTARTING');
        return {...state, 
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: Math.floor(Math.random() * 100) + 1,
            guessCount: 0
        }
    }
    else if (action.type === actions.UPDATE_GUESSES) {        
        return {...state, guesses: [...state.guesses, action.guess], guessCount: state.guessCount + 1};
    }
    else if (action.type === actions.UPDATE_FEEDBACK) {
        return {...state, feedback: action.feedback }
    }
    else if (action.type === actions.UPDATE_AURAL_STATUS) {
        return {...state, auralStatus: action.payload }
    }
    else {
        return state;
    }
};