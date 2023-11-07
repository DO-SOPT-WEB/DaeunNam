import handleRandom from '../App';

function RandomButton({ handleRandom }) {
    return (
        <>
            <button type="button" onClick={handleRandom}>아무거나 먹을래</button>
        </>
    )
}

export default RandomButton;
