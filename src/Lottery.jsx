import { useState } from "react";
import "./Lottery.css";
import { generateNum, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n, winCondition}) {
    let [ticket, setTicket] = useState(generateNum(n));
    let isWinning = winCondition(ticket);  

    let buyTicket = () =>{
        setTicket(generateNum(n));
    }

    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>New Ticket</button>
            <h2>{isWinning && "Congratulations, you won!"}</h2>
        </div>
    );
}