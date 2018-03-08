import sendData from "./sendData";

export default endpoint => {
  switch (endpoint) {
     case "/api/yourHealthRequests":
      return sendData({
        errorRate: 0.05,
        waitTime: Math.random() * 2000,
        numberOfHealthRequests: 5
      });
    default:
      return new Promise();
  }
};
