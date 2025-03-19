
import {
  CoreCustomTabs,
  CoreLayoutItem,
  AppContainerLayout
} from "@wrappid/core";

import { communicationTypes } from "../constants/constants";

export default function CommunicationHistories() {

  const tabsContent = [
    {
      comp : "CommunicationHistoryData",
      id   : "EmailCommunicationHistoryData",
      label: "Email",
      props: { createEntityButtonText: "Email History", type: communicationTypes.EMAIL },
    },
    {
      comp : "CommunicationHistoryData",
      id   : "SMSCommunicationHistoryData",
      label: "SMS",
      props: { createEntityButtonText: "SMS History", type: communicationTypes.SMS },

    },
    {
      comp : "CommunicationHistoryData",
      id   : "WhatsappCommunicationHistoryData",
      label: "whatsapp",
      props: { createEntityButtonText: "Whatsapp History", type: communicationTypes.WHATSAPP }
    }
  ];

  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <CoreCustomTabs tabsContent={tabsContent} />
      </CoreLayoutItem>
    </>
  );
}
