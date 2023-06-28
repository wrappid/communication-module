import CommunicationTemplateTestpage from "./CommunicationTemplateTestpage";
import { communicationTypes } from "../constants/constants";
import { CoreDataTable, FORM_IDS } from "@wrappid/core";

export default function WhatsappCommunicationTemplates() {
  const query = { type: communicationTypes.WHATSAPP };

  return (
    <CoreDataTable
      entity={"CommunicationTemplate"}
      createFormID={FORM_IDS.__CREATE_WHATSAPP_COMMUNICATION_TEMPLATE}
      updateFormID={FORM_IDS.__UPDATE_WHATSAPP_COMMUNICATION_TEMPLATE}
      filterQuery={{ filter: query }}
      postRenderDetailsPaneComponent={CommunicationTemplateTestpage}
    />
  );
}
