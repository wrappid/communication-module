/* eslint-disable no-unused-vars */
// asyncSelect and formSubmitSanitization

import { __EntityStatus } from "@wrappid/core";

export const FunctionsRegistry = {
  DefaultLangEditDel: (data) => {
    // -- console.log("SANITING", apiMeta.endpoint, others);
    return data.locale !== 1;
  },
      
  SanCreateCommunicationTemplate: (formData, apiMeta, state, others) => {
    return {
      endpoint: apiMeta.endpoint,
      values  : {
        ...formData,
        _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
      },
    };
  },
      
  SanEditCommunicationTemplate: (formData, apiMeta, state, others) => {
    return {
      endpoint: apiMeta?.endpoint.replace(":id", apiMeta?.values?.id),
      values  : {
        ...formData,
        _status: formData?._status ? formData?._status : __EntityStatus.DRAFT,
      },
    };
  },
      
  SanTestCommunicationTemplate: (formData, apiMeta, state, others) => {
    const obj = {
      endpoint: apiMeta?.endpoint.replace(":name", formData.name),
      values  : { ...formData },
    };
      
    return obj;
  },
};