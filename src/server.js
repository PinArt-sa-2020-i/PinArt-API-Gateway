module.exports = {
    //Data server de ExampleAPI
    example_url:process.env.EXAMPLE_URL || 'http://ec2-54-158-114-74.compute-1.amazonaws.com/',
    example_port:process.env.EXAMPLE_PORT || '4000',
    example_entryPoint:process.env.EXAMPLE_ENTRY || 'sa-auth-ms/resources/',

    //Data server de Multimedia Feed
    feed_url: process.env.MULTIMEDIA_URL || '18.214.200.193',
    feed_port: process.env.MULTIMEDIA_PORT || '3001',
    feed_entryPoint: process.env.MULTIMEDIA_ENTRY || '',

    //Data server de MultimediaAPI
    multimedia_url: process.env.MULTIMEDIA_URL || '18.214.200.193',
    multimedia_port: process.env.MULTIMEDIA_PORT || '3000',
    multimedia_entryPoint: process.env.MULTIMEDIA_ENTRY || '',
    
    //ConfigAccount API
    configAccount_url: process.env.CONFIG_ACCOUNT_URL || "54.162.90.113",
    configAccount_port: process.env.CONFIG_ACCOUNT_PORT || "8000",
    configAccount_entryPoint: process.env.CONFIG_ACCOUNT_ENTRY || "Configuracion/",
    
    //Profile API
    profile_url: process.env.PROFILE_URL || "3.227.65.124",
    profile_port: process.env.PROFILE_PORT || "8080",
    profile_entryPoint: process.env.PROFILE_ENTRY || "api/",
  
    //Auth API
    auth_url: process.env.AUTH_URL || "3.227.65.124",
    auth_port: process.env.AUTH_PORT || "4000",
    auth_entryPoint: process.env.AUTH_ENTRY || "users/",
};

