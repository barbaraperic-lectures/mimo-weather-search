import moment from "moment";

const initMoment = (utc) => {
	const today = moment();
	return today
		.utcOffset(Number(utc) / 3600)
		.format("dddd, MMMM Do YYYY, h:mm:ss a");
};

export { initMoment };
