import CommunicationTemplateTestpage from "./CommunicationTemplateTestpage";
import { communicationTypes } from "../constants/constants";
import { CoreDataTable, FORM_IDS } from "@wrappid/core";

export default function MailCommunicationTemplates() {
  const query = { type: communicationTypes.MAIL };

  return (
    <CoreDataTable
      entity={"CommunicationTemplate"}
      createFormID={FORM_IDS.__CREATE_MAIL_COMMUNICATION_TEMPLATE}
      updateFormID={FORM_IDS.__UPDATE_MAIL_COMMUNICATION_TEMPLATE}
      filterQuery={{ filter: query }}
      postRenderDetailsPaneComponent={CommunicationTemplateTestpage}
    />
  );
}
