const communicationFunctions = require("./functions/communication.functions");

const functionsRegistry = {

  /**
     * @todo Add bellow functions
     * 1.Create Communication entry in specific communication history table
     * 
    */   
  createCommunicationHistory : communicationFunctions.createCommunicationHistory
};

exports.functionsRegistry = functionsRegistry;
