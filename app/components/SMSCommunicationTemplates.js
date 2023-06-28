import CommunicationTemplateTestpage from "./CommunicationTemplateTestpage";
import { communicationTypes } from "../constants/constants";
import { CoreDataTable, FORM_IDS } from "@wrappid/core";

export default function SMSCommunicationTemplates() {
  const query = { type: communicationTypes.SMS };

  return (
    <CoreDataTable
      entity={"CommunicationTemplate"}
      createFormID={FORM_IDS.__CREATE_SMS_COMMUNICATION_TEMPLATE}
      updateFormID={FORM_IDS.__UPDATE_SMS_COMMUNICATION_TEMPLATE}
      filterQuery={{ filter: query }}
      postRenderDetailsPaneComponent={CommunicationTemplateTestpage}
    />
  );
}
