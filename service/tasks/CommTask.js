const {
  communicate,
  // eslint-disable-next-line no-unused-vars
  configProvider,
  coreConstant,
  databaseActions,
  databaseProvider,
} = require("@wrappid/service-core");
// eslint-disable-next-line no-unused-vars
const otpGenerator = require("otp-generator");

const COMMUNICATION_EMAIL = coreConstant.commType.EMAIL;
let pendingComms;


module.exports = {
  prePerform: async () => {
    console.log(`Communication prePerform Task is initated @ ${new Date().getTime()}`);
    pendingComms = await databaseActions.findAll("application", "CommunicationHistories", {
      where: { status: {[databaseProvider.application.Sequelize.Op.notIn]:["success"]} },
      // where: {status: "faild"}
    });
    /**
     * @todo
     * 1. get pending communication from db
     */
  },
  perform: async () => {
    let commData = {};
    let commType = COMMUNICATION_EMAIL;
    let templateID = "test_email";
    console.log(
      `Communication task perform is running in every minute @ ${new Date().getTime()}`
    );
    pendingComms?.forEach(async comms => {
      // console.log(comms);
      // let genetatedOTP = otpGenerator.generate(
      //   configProvider.wrappid.otpLength,
      //   {
      //     specialChars: false,
      //     lowerCaseAlphabets: false,
      //     upperCaseAlphabets: false,
      //   }
      // );

      // if (genetatedOTP) {
      //   commData.otp = genetatedOTP;
      // }
      commData.sub = comms.sub; 
      let commResult = await communicate({
        commType,
        commRecipients: {
          to: [comms.to],
        },
        commData,
        commTemplateID: templateID,
        directFlag: true,
        errorFlag: true,
      });

      if (commResult) {
        console.log(`OTP ${commType} sent successfully.`);
        await databaseActions.update("application","CommunicationHistories",{status: "success"},{where:{id:comms.id}});
      } else {
        await databaseActions.update("application","CommunicationHistories",{status: "faild"},{where:{id:comms.id}});
        console.log("OTP sent faild.");
      }
    });

    /**
     * @todo
     * for each communication
     *    a. process communication through different communication engine
     *       based on comm type (SMS,EMAIL,WHATSAPP,// not needed PUSH NOTIFICATION as of now)
     *    b. update communication status in db
     */
  },
  postPerform: async () => {
    console.log(`Communication Task postPerform is completed @ ${new Date().getTime()}`);
  },
  handleError: () => {},
};
