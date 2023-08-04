import { __EntityStatus } from "@wrappid/core";

export function DefaultLangEditDel(data) {
  // -- console.log("SANITING", apiMeta.endpoint, others);
  return data.locale !== 1;
}

export function SanCreateCommunicationTemplate(
  formData,
  apiMeta,
  state,
  others
) {
  return {
    endpoint: apiMeta.endpoint,
    values  : {
      ...formData,
      _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
    },
  };
}
  
export function SanEditCommunicationTemplate(formData, apiMeta, state, others) {
  return {
    endpoint: apiMeta?.endpoint.replace(":id", apiMeta?.values?.id),
    values  : {
      ...formData,
      _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
    },
  };
}
  
export function SanTestCommunicationTemplate(formData, apiMeta, state, others) {
  const obj = {
    endpoint: apiMeta?.endpoint.replace(":name", formData.name),
    values  : { ...formData },
  };

  return obj;
}
  