module.exports = {
    //Data server de ExampleAPI
    example_url:process.env.EXAMPLE_URL || 'http://ec2-54-158-114-74.compute-1.amazonaws.com/',
    example_port:process.env.EXAMPLE_PORT || '4000',
    example_entryPoint:process.env.EXAMPLE_ENTRY || 'sa-auth-ms/resources/',
    configAccount_url: process.env.CONFIG_ACCOUNT_URL || "54.162.90.113",
    configAccount_port: process.env.CONFIG_ACCOUNT_PORT || "8000",
    configAccount_entryPoint: process.env.CONFIG_ACCOUNT_ENTRY || "Configuracion/",
}