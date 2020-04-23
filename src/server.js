module.exports = {
    //Data server de ExampleAPI
    example_url:process.env.EXAMPLE_URL || 'http://ec2-54-158-114-74.compute-1.amazonaws.com/',
    example_port:process.env.EXAMPLE_PORT || '4000',

    
    example_entryPoint:process.env.EXAMPLE_ENTRY || 'sa-auth-ms/resources/',
    favoriteBoard_url:process.env.FAVORITEBOARD_URL|| 'ec2-18-211-104-18.compute-1.amazonaws.com',
    favoriteBoard_port:process.env.FAVORITEBOARD_PORT|| '8087',
    //favoriteBoard_entryPoint:process.env.FAVORITEBOARD_ENTRY|| 'sa-auth-ms/resources/'
}
