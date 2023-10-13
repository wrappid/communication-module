const CommunicationHistories = require("./models/CommunicationHistory.model");
const modelsRegistry = {
    CommunicationHistories: {
        database: "application",
        model: CommunicationHistories,
      },
};

exports.modelsRegistry = modelsRegistry;