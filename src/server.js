module.exports = {
    //Data server de ExampleAPI
    example_url:process.env.EXAMPLE_URL || 'http://ec2-54-158-114-74.compute-1.amazonaws.com/',
    example_port:process.env.EXAMPLE_PORT || '4000',
    example_entryPoint:process.env.EXAMPLE_ENTRY || 'sa-auth-ms/resources/',
    labels_url:process.env.LABELS_URL || 'ec2-52-20-104-224.compute-1.amazonaws.com',
    labels_port:process.env.LABELS_PORT || '8080',
    labels_entryPoint:process.env.LABELS_ENTRY || 'label/'
};