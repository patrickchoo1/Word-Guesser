import { WORDS } from "./wordle-list";

export const defaultBoard = [
["", "", "", "", ""], 
["", "", "", "", ""], 
["", "", "", "", ""], 
["", "", "", "", ""], 
["", "", "", "", ""], 
["", "", "", "", ""]]; 


export const generateCorrectWord = () => {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
}