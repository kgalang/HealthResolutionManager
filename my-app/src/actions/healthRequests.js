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

//Action Creators

export const fetchYourHealthRequests = () => {
    return function(dispatch) {
        dispatch(requestYourHealthRequests());
        return mockFetch("/api/yourHealthRequests")
            .then(
                results => {
                    return results.json();
                },
                error => console.log("an error occurred...", error)
            ).then(json => dispatch(receiveYourHealthRequests(json)));
    };
};

