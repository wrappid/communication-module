import * as yup from "yup";

const phone = yup
  .string()
  .trim()
  .matches(/^[0-9]{10}$/, "Phone number must contains 10 digits");
const email = yup
  .string()
  .trim()
  .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Invalid email");

export const ValidationRegistry = {
  createMailTemplateSchema: {
    contentType  : yup.mixed().required("Content type is required"),
    extraInfo    : yup.object().required("Extra Info is required"),
    message      : yup.string().required("Message is required"),
    name         : yup.string().required("Name is required"),
    sampleMessage: yup.string().nullable(),
    sampleSubject: yup.string().nullable(),
    subject      : yup.string().required("Subject is required"),
    type         : yup.mixed().required("Type is required"),
  },
      
  createSMSTemplateSchema: {
    extraInfo    : yup.object().required("Extra Info is required"),
    message      : yup.string().required("Message is required"),
    name         : yup.string().required("Name is required"),
    sampleMessage: yup.string().nullable(),
    type         : yup.mixed().required("Type is required"),
  },
      
  createWhatsappTemplateSchema: {
    config       : yup.object().required("Object is required"),
    extraInfo    : yup.object().required("Extra Info is required"),
    footer       : yup.string().nullable(),
    header       : yup.mixed().nullable(),
    message      : yup.string().required("Message is required"),
    name         : yup.string().required("Name is required"),
    sampleMessage: yup.string().nullable(),
    type         : yup.mixed().required("Type is required"),
  },
      
  mailCommunicationTemplateSchema: {
    body     : yup.string().required("Body is required"),
    bodyType : yup.mixed().required("Body Type is required"),
    extraInfo: yup.object(),
    name     : yup.string().required("Name is required"),
    subject  : yup.string().required("Subject is required"),
    type     : yup.mixed().required("Type is required"),
  },
      
  testMailCommunicationTemplateSchema: { sendTo: email.required("Email is required") },
      
  testSMSCommunicationTemplateSchema: { sendTo: phone.required("Phone is required") },
      
  updateMailTemplateSchema: {
    _status           : yup.string().required("Status is required"),
    contentType       : yup.mixed().required("Content type is required"),
    externalReason    : yup.string().nullable(),
    externalStatus    : yup.string().nullable(),
    externalTemplateId: yup.string().nullable(),
    extraInfo         : yup.object().required("Extra Info is required"),
    message           : yup.string().required("Message is required"),
    name              : yup.string().required("Name is required"),
    sampleMessage     : yup.string().nullable(),
    sampleSubject     : yup.string().nullable(),
    subject           : yup.string().required("Subject is required"),
    type              : yup.mixed().required("Type is required"),
  },
      
  updateSMSTemplateSchema: {
    _status           : yup.string().required("Status is required"),
    externalReason    : yup.string().nullable(),
    externalStatus    : yup.string().nullable(),
    externalTemplateId: yup.string().nullable(),
    extraInfo         : yup.object().required("Extra Info is required"),
    message           : yup.string().required("Message is required"),
    name              : yup.string().required("Name is required"),
    sampleMessage     : yup.string(),
    type              : yup.mixed().required("Type is required"),
  },
      
  updateWhatsappTemplateSchema: {
    _status           : yup.string().required("Status is required"),
    config            : yup.object().required("Object is required"),
    externalReason    : yup.string().nullable(),
    externalStatus    : yup.string().nullable(),
    externalTemplateId: yup.string().nullable(),
    extraInfo         : yup.object().required("Extra Info is required"),
    footer            : yup.string().nullable(),
    header            : yup.mixed().nullable(),
    message           : yup.string().required("Message is required"),
    name              : yup.string().required("Name is required"),
    sampleMessage     : yup.string().nullable(),
    type              : yup.mixed().required("Type is required"),
  },
      
  whatsappCommunicationTemplateSchema: {
    body     : yup.string().required("Body is required"),
    extraInfo: yup.object(),
    name     : yup.string().required("Name is required"),
    type     : yup.mixed().required("Type is required"),
  }
};