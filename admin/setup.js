const bcrypt = require('bcryptjs');
const AdminBro = require("admin-bro");
const mongooseAdminBro = require('@admin-bro/mongoose');
const expressAdminBro = require('@admin-bro/express');
const { AdminModel } = require('../api/modules/admin');
const {TaskModel} = require('../api/modules/task/schema');
const { UserModel } = require('../api/modules/user/schema');

// mysql
AdminBro.registerAdapter(mongooseAdminBro);

const appAdmin = new AdminBro({
  resources: [
    {resource: TaskModel},
    {resource: UserModel},
  ],
  branding: {
    companyName: "Indus",
    softwareBrothers: false,
    logo: false
  },
  locale: {
    translations:{
      labels: {
        loginWelcome: "Indus admin"
      },
      messages: {
        loginWelcome: "Amazing admin application, Please use your admin email and password to login."
      }
    }
  },
  rootPath: '/admin',
  logoutPath: "/admin/logout",
  loginPath: "/admin/login"
});

// authentication;
const adminAuthenticator = async (email, password) => {
  const user = await AdminModel.findOne({ email, isDeleted: false });
  if (user) {
    const matchPassword = await bcrypt.compare(password, user.encryptedPassword);
    if (matchPassword) {
      return user;
    }
  }
  return false;
}

const adminRouter = expressAdminBro.buildAuthenticatedRouter(appAdmin, {
  authenticate: adminAuthenticator,
  cookieName: "admin-cookier",
  cookiePassword: process.env.ADMIN_COOKIE_PASSWORD
}, null, {
  resave: false,
  saveUninitialized: true
})

module.exports = { appAdmin, adminRouter };
