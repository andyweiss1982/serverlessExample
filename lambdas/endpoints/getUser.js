const Responses = require("../common/API_Responses");

exports.handler = async (event) => {
  console.log("event", event);
  if (!event.pathParameters || !event.pathParameters.ID) {
    return Responses._400({ message: "Path Missing ID" });
  }

  let ID = event.pathParameters.ID;

  if (data[ID]) {
    return Responses._200(data[ID]);
  }

  return Responses._400({ message: "No ID in Data" });
};

const data = {
  1234: { name: "Anna Jones", age: 25, job: "journalist" },
  7893: { name: "Chris Smith", age: 52, job: "teacher" },
  5132: { name: "Tom Hague", age: 23, job: "plasterer" },
};
