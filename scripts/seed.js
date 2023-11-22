require('dotenv').config();

const mongoose = require('mongoose');
const { hash } = require('bcryptjs');

const { LOGGER } = require('../api/common/logger');
const { AdminModel } = require('../api/modules/admin');

(async function seed(){
  try {
    // application seeding.
    LOGGER.info("Starting application seeding.");
    await mongoose.connect(process.env.MONGO_URI);
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    if(!email || !password) {
      throw new Error("Missing environment variables.")
    }
    const encryptedPassword = await hash(password, 10);
    await AdminModel.findOneAndDelete({email: email});
    const admin = AdminModel({
      name: "admin",
      email,
      encryptedPassword
    })
    await admin.save();
    LOGGER.info("Completed application seeding, Follow next steps in README.md");
    process.exit(0);
  } catch (error) {
    LOGGER.error(error)
    process.exit(1)
  }
})();
