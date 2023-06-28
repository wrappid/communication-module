import CommunicationTemplates from './components/CommunicationTemplates';
import CommunicationTemplateTestpage from './components/CommunicationTemplateTestpage';
import MailCommunicationTemplates from './components/MailCommunicationTemplates';
import SMSCommunicationTemplates from './components/SMSCommunicationTemplates';
import WhatsappCommunicationTemplates from './components/WhatsappCommunicationTemplates';

export const ComponentRegistry = {
  CommunicationTemplates      : { comp: CommunicationTemplates },
  CommunicationTemplateTestpage      : { comp: CommunicationTemplateTestpage },
  MailCommunicationTemplates      : { comp: MailCommunicationTemplates },
  SMSCommunicationTemplates      : { comp: SMSCommunicationTemplates },
  WhatsappCommunicationTemplates      : { comp: WhatsappCommunicationTemplates },
};