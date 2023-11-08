import handleCustom from './InitScreen';

function CustomizeButton({ handleCustomize }) {
    return (
        <div>
            <button type='button' onClick={handleCustomize}>골라 먹을래</button>
        </div>
    );
}

export default CustomizeButton