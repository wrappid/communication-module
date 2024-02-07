import { CommunicationHistories } from "./models/CommunicationHistory.model";
import { CommunicationTemplates } from "./models/CommunicationTemplates.model";
import { MailComms } from "./models/MailComms.model";
import { Otps } from "./models/Otp.model";
import { SmsComms } from "./models/SmsComms.model";
import { WhatsAppComms } from "./models/WhatsAppComms.model";

const ModelsRegistry = {
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

export default ModelsRegistry;
