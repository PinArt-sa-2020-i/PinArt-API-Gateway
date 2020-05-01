module.exports = {
    //Data server de ExampleAPI
    example_url:process.env.EXAMPLE_URL || 'http://ec2-54-158-114-74.compute-1.amazonaws.com/',
    example_port:process.env.EXAMPLE_PORT || '4000',
    example_entryPoint:process.env.EXAMPLE_ENTRY || 'sa-auth-ms/resources/',

    // Data server of LabelsAPI
    labels_url:process.env.LABELS_URL || 'ec2-52-20-104-224.compute-1.amazonaws.com',
    labels_port:process.env.LABELS_PORT || '8080',
    labels_entryPoint:process.env.LABELS_ENTRY || 'label/',


    favoriteBoard_url:process.env.FAVORITEBOARD_URL|| 'ec2-18-211-104-18.compute-1.amazonaws.com',
    favoriteBoard_port:process.env.FAVORITEBOARD_PORT|| '8087',

    example_entryPoint:process.env.EXAMPLE_ENTRY || 'sa-auth-ms/resources/',

    //Data server de Multimedia Feed
    feed_url: process.env.FEED_URL || '18.214.200.193',
    feed_port: process.env.FEED_PORT || '3001',
    feed_entryPoint: process.env.FEED_ENTRY || '',

    //Data server de MultimediaAPI
    multimedia_url: process.env.MULTIMEDIA_URL || '18.214.200.193',
    multimedia_port: process.env.MULTIMEDIA_PORT || '3000',
    multimedia_entryPoint: process.env.MULTIMEDIA_ENTRY || '',
    
    //ConfigAccount API
    configAccount_url: process.env.CONFIG_ACCOUNT_URL || "52.54.55.167",
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

    //Bucket API
    bucket_url: process.env.AUTH_URL || "3.227.65.124",
    bucket_port: process.env.AUTH_PORT || "8081",
    bucket_entryPoint: process.env.AUTH_ENTRY || "api/S3Bucket/",
};


