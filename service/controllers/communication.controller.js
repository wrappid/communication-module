
// eslint-disable-next-line no-unused-vars
const testFunctions = require("../functions/test.functions");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.sendTemplates = async (req, res) => {
  try {
    // eslint-disable-next-line no-unused-vars, no-undef
    const result = await db.sequelize.transaction(async (transaction) => {
      // eslint-disable-next-line no-undef
      const person = await db.Persons.findOne({
        where: { userId: req.user.userId },
        transaction: transaction,
      });

      // eslint-disable-next-line no-undef
      let comRes = await communicateTest(
        person,
        req.body.receipents,
        req.params.name,
        transaction
      );

      if (comRes.success) {
        console.log("Template sent successfully");
        res.status(200).json({ message: "Template sent successfully" });
      } else {
        throw "Error to sent template";
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err?.message });
  }
}; 
