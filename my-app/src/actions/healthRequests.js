import mockFetch from "../MockAPI/mockFetch";
import { healthRequestTypes } from "./types";
const {
    REQUEST_YOUR_HEALTH_REQUESTS,
    RECEIVE_YOUR_HEALTH_REQUESTS
} = healthRequestTypes;

export const requestYourHealthRequests = () => {
    return {
        type: REQUEST_YOUR_HEALTH_REQUESTS
    };
};

export const receiveYourHealthRequests = (healthRequests) => {
    return {
        type: RECEIVE_YOUR_HEALTH_REQUESTS,
        payload: healthRequests
    };
};

