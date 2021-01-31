import {PLAY_GAME,TOGGLE_BET,PLAY_AGAIN} from '../constants/constants';
export const PlayGame=()=>{
    return {
        type:PLAY_GAME,
    }
}

export const Toggle_Bet=(ma,toggle)=>{
    return{
        type:TOGGLE_BET,
        payload:{ma,toggle}
    }
}

export const PlayAgain=()=>{
    return{
        type:PLAY_AGAIN
    }
}