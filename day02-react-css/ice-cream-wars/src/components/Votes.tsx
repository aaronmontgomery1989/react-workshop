import { useState } from "react";
import "./Votes.css";

const Votes = () => {
    const [chocolateVotes, setChocolateVotes] = useState(0);
    const [vanillaVotes, setVanillaVotes] = useState(0);
    const [strawberryVotes, setStrawberryVotes] = useState(0);
    let totalVotes: number = chocolateVotes + strawberryVotes + vanillaVotes;
    
    const formatPercentage = (flavorVotes: number): string => {
        return totalVotes ? `${((chocolateVotes/totalVotes) * 100).toFixed(0)}%` : "0%";
    };

    return (
        <section className="Votes">
            
            <h2>Vote Here</h2>
            <div>
                <button onClick={() => setChocolateVotes(chocolateVotes + 1)}>Chocolate</button>
                <button onClick={() => setVanillaVotes((prev) => prev + 1)}>Vanilla</button>
                <button onClick={() => setStrawberryVotes((prev) => prev + 1)}>Strawberry</button>
            </div>

            {totalVotes === 0 ?
            <div>No votes yet.</div> :
            <></>}

            {chocolateVotes === 0 ? <></> :
            <>
            <p className="vote-info">Chocolate: {chocolateVotes} {formatPercentage(chocolateVotes)}</p>
            <div>
                <div
                    className="chocolate bar"
                    style={{width: chocolateVotes + "px"}}>
                </div>
            </div>
            </>
            }

            {vanillaVotes === 0 ? <></> :
            <>
            <p className="vote-info">Vanilla: {vanillaVotes} {formatPercentage(vanillaVotes)}</p>
            <div>
                <div
                    className="vanilla bar"
                    style={{width: vanillaVotes + "px"}}>
                </div>
            </div>
            </>}

            {strawberryVotes === 0 ? <></> :
            <>
            <p className="vote-info">Strawberry: {strawberryVotes} {formatPercentage(strawberryVotes)}</p>
            <div>
                <div
                    className="strawberry bar"
                    style={{width: strawberryVotes + "px"}}>
                </div>
            </div>
            </>}

        </section>
    );
};

export default Votes;
