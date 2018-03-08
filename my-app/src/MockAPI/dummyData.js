import { range } from "lodash";
import shortid from "shortid";

export const dummyHealthRequests = n => {
    return range(n).reduce((a, e, i) => {
      return a.concat({
                    id: shortid.generate(),
                    category: "Appeal",
                    title: "Appeal Title",
                    status: "Submitted",
                });
    }, []);
  };