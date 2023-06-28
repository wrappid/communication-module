import { CoreForm, FORM_EDIT_MODE, FORM_IDS } from "@wrappid/core";

export default function CommunicationTemplateTestpage(props) {
  const { data } = props || {};
  const { name } = data || {};

  const initData = { name: name };

  return (
    <CoreForm
      initData={initData}
      formId={FORM_IDS.__TEST_COMMUNICATION_TEMPLATE}
      mode={FORM_EDIT_MODE}
    />
  );
}
