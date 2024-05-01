const userProfile = require("./userProfile/userProfile.service.js");
const users = require("./users/users.service.js");
const userProfiles = require("./userProfiles/userProfiles.service.js");
const roles = require("./roles/roles.service.js");
const refPositions = require("./refPositions/refPositions.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
    app.configure(userProfile);
  app.configure(userProfiles);
  app.configure(roles);
  app.configure(refPositions);
    // ~cb-add-configure-service-name~
};
