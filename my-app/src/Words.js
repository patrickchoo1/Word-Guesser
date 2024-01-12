import { WORDS } from "./wordle-list";

export const defaultBoard = [
["W", "O", "R", "D", "S"], 
["", "", "", "", ""], 
["", "", "", "", ""], 
["", "", "", "", ""], 
["", "", "", "", ""], 
["", "", "", "", ""]]; 


export const generateCorrectWord = () => {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
}