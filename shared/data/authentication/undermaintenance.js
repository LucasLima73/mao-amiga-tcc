
import Countdown from "react-countdown";

const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		// Render a complete state
		return <AfterComplete />;
	} else {
		// Render a countdown
		return (
			<div className="d-flex gap-3 flex-wrap mt-4 mb-0 gy-xxl-0 gy-3 justify-content-center">
				<div>
                    <div className="">
                        <h6 className="mb-1 fs-12 text-fixed-white">Days</h6>
                        <h3 className="mb-0 avatar d-block bg-white-transparent avatar-xxl mt-2 backdrop-blur">{days}</h3>              
                    </div>
                </div>
				<div>
                    <div className="">
                        <h6 className="mb-1 fs-12 text-fixed-white">Hours</h6>
                        <h3 className="mb-0 avatar d-block bg-white-transparent avatar-xxl mt-2 backdrop-blur">{hours}</h3>
                    </div>
                </div>
				<div>
                    <div className="">
                        <h6 className="mb-1 fs-12 text-fixed-white">Minutes</h6>
                        <h3 className="mb-0 avatar d-block bg-white-transparent avatar-xxl mt-2 backdrop-blur">{minutes}</h3>
                    </div>
                </div>
				<div>
                    <div className="">
                        <h6 className="mb-1 fs-12 text-fixed-white">Seconds</h6>
                        <h3 className="mb-0 avatar d-block bg-white-transparent avatar-xxl mt-2 backdrop-blur">{seconds}</h3>
                    </div>
                </div>
			</div>
		);
	}
};

export function DayCounter() {
	return (<Countdown date={Date.now() + 15599999990} renderer={rendering} />);
}
