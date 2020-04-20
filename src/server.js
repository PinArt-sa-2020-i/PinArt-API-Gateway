module.exports = {
    //Data server de ExampleAPI
    example_url:process.env.EXAMPLE_URL || 'http://ec2-54-158-114-74.compute-1.amazonaws.com/',
    example_port:process.env.EXAMPLE_PORT || '4000',
    example_entryPoint:process.env.EXAMPLE_ENTRY || 'sa-auth-ms/resources/',
    //Data server de Multimedia Feed
    multimedia_ms_url: process.env.MULTIMEDIA_URL || 'http://ec2-52-201-216-123.compute-1.amazonaws.com',
    multimedia_ms_port: process.env.MULTIMEDIA_PORT || '3001',

}