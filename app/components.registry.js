import CommunicationTemplates from "./components/CommunicationTemplates";
import CommunicationTemplateTestpage from "./components/CommunicationTemplateTestpage";
import MailCommunicationTemplates from "./components/MailCommunicationTemplates";
import SMSCommunicationTemplates from "./components/SMSCommunicationTemplates";
import WhatsappCommunicationTemplates from "./components/WhatsappCommunicationTemplates";

export const ComponentsRegistry = {
  CommunicationTemplateTestpage : { comp: CommunicationTemplateTestpage },
  CommunicationTemplates        : { comp: CommunicationTemplates },
  MailCommunicationTemplates    : { comp: MailCommunicationTemplates },
  SMSCommunicationTemplates     : { comp: SMSCommunicationTemplates },
  WhatsappCommunicationTemplates: { comp: WhatsappCommunicationTemplates },
};