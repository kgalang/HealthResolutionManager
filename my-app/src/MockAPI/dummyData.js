import shortid from "shortid";

export const dummyHealthRequests = amount => {
    let healthRequests = [];
    let i = 0;
    while (i < amount) {
        healthRequest = {
            id: shortid.generate(),
            category: "Appeal",
            title: "Appeal Title",
            status: "Submitted",
        };
        healthRequests.push(healthRequest);
        i++;
    }
}