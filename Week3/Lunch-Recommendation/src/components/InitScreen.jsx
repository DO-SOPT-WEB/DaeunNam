import Customize from './Customize';
import Random from './Random';

const InitScreen = () => {

    return (
        <>
            <h2>원하는 추천 방식을 골라줘!</h2>
            <Customize />
            <Random />
        </>
    );
};

export default InitScreen;