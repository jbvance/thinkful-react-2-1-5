export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
    type: RESTART_GAME 
});

export const UPDATE_GUESSES = 'UPDATE_GUESSES';
export const updateGuesses = (guess) => ({
    type: UPDATE_GUESSES,
    guess
});

export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
export const updateFeedback = feedback => ({
    type: UPDATE_FEEDBACK,
    feedback
});

export const UPDATE_AURAL_STATUS = 'UPDATE_AURAL_STATUS';
export const updateAuralStatus = auralStatus => ({
    type: UPDATE_AURAL_STATUS,
    payload: auralStatus
});