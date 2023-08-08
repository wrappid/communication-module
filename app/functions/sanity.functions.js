/* eslint-disable no-unused-vars */
import { __EntityStatus } from "@wrappid/core";

export const DefaultLangEditDel = (data) => {
  // -- console.log("SANITING", apiMeta.endpoint, others);
  return data.locale !== 1;
};
      
export const SanCreateCommunicationTemplate = (formData, apiMeta, state, others) => {
  return {
    endpoint: apiMeta.endpoint,
    values  : {
      ...formData,
      _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
    },
  };
};
      
export const SanEditCommunicationTemplate = (formData, apiMeta, state, others) => {
  return {
    endpoint: apiMeta?.endpoint.replace(":id", apiMeta?.values?.id),
    values  : {
      ...formData,
      _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
    },
  };
};
      
export const SanTestCommunicationTemplate = (formData, apiMeta, state, others) => {
  const obj = {
    endpoint: apiMeta?.endpoint.replace(":name", formData.name),
    values  : { ...formData },
  };
      
  return obj;
};