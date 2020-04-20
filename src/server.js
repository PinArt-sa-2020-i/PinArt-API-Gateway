module.exports = {
  //Data server de ExampleAPI
  example_url:
    process.env.EXAMPLE_URL ||
    "http://ec2-54-158-114-74.compute-1.amazonaws.com/",
  example_port: process.env.EXAMPLE_PORT || "4000",
  example_entryPoint: process.env.EXAMPLE_ENTRY || "sa-auth-ms/resources/",

  //Profile API
  profile_url: process.env.PROFILE_URL || "3.227.65.124",
  profile_port: process.env.PROFILE_PORT || "8080",
  profile_entryPoint: process.env.PROFILE_ENTRY || "api/",

  //Auth API
  auth_url: process.env.AUTH_URL || "3.227.65.124",
  auth_port: process.env.AUTH_PORT || "4000",
  auth_entryPoint: process.env.AUTH_ENTRY || "users/",
};
