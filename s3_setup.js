const s3 = new AWS.S3({
    credentials: {
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
    },
    region: 'us-west-2',
    });