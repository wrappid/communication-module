const CommunicationHistories = require("./models/CommunicationHistory.model");
const CommunicationTemplates = require("./models/CommunicationTemplates.model");
const MailComms = require("./models/MailComms.model");
const Otps = require("./models/Otp.model");
const SmsComms = require("./models/SmsComms.model");
const WhatsAppComms = require("./models/WhatsAppComms.model");

const modelsRegistry = {
  CommunicationHistories: {
    database: "application",
    model: CommunicationHistories,
  },
  CommunicationTemplates: {
    database: "application",
    model: CommunicationTemplates,
  },
  MailComms: {
    database: "application",
    model: MailComms,
  },
  Otps: {
    database: "application",
    model: Otps,
  },
  SmsComms: {
    database: "application",
    model: SmsComms,
  },
  WhatsAppComms: {
    database: "application",
    model: WhatsAppComms,
  },
};

exports.modelsRegistry = modelsRegistry;
