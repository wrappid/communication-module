import { CoreCustomTabs } from "@wrappid/core";

export default function CommunicationTemplates() {
  const tabsContent = [
    {
      comp: "SMSCommunicationTemplates",
      id: "smsCommunicationTemplate",
      label: "SMS Templates",
    },
    {
      comp: "MailCommunicationTemplates",
      id: "mailCommunicationTemplate",
      label: "Mail Templates",
    },
    {
      comp: "WhatsappCommunicationTemplates",
      id: "whatsappCommunicationTemplate",
      label: "Whatsapp Templates",
    },
  ];

  return <CoreCustomTabs tabsContent={tabsContent} />;
}
