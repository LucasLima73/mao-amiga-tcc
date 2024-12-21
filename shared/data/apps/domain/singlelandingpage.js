
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
			<div className="d-flex mb-5 gap-2 justify-content-between flex-lg-nowrap flex-wrap">
				<div className="card custom-card text-default align-items-center justify-content-between mb-0">
                    <div className="flex-fill text-center card-body p-4">
                        <h6 className="mb-1 lh-1 fs-11 text-muted fw-medium">Days</h6>
                        <h4 className="mb-0 lh-1 mt-2 d-block text-default">{days}</h4>              
                    </div>
                </div>
				<div className="card custom-card text-default align-items-center justify-content-between mb-0">
                    <div className="flex-fill text-center card-body p-4">
                        <h6 className="mb-1 lh-1 fs-11 text-muted fw-medium">Hours</h6>
                        <h4 className="mb-0 lh-1 mt-2 d-block text-default">{hours}</h4>
                    </div>
                </div>
				<div className="card custom-card text-default align-items-center justify-content-between mb-0">
                    <div className="flex-fill text-center card-body p-4">
                        <h6 className="mb-1 lh-1 fs-11 text-muted fw-medium">Minutes</h6>
                        <h4 className="mb-0 lh-1 mt-2 d-block text-default">{minutes}</h4>
                    </div>
                </div>
				<div className="card custom-card text-default align-items-center justify-content-between mb-0">
                    <div className="flex-fill text-center card-body p-4">
                        <h6 className="mb-1 lh-1 fs-11 text-muted fw-medium">Seconds</h6>
                        <h4 className="mb-0 lh-1 mt-2 d-block text-default">{seconds}</h4>
                    </div>
                </div>
			</div>
		);
	}
};

export function SinglepageTimer() {
	return (<Countdown date={Date.now() + 13876899990} renderer={rendering} />);
}
