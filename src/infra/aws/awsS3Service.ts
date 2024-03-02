import {GetObjectCommand, S3Client} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";


const credentials = {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || "",
};

console.log(credentials);


const S3 = new S3Client({region: "us-east-1",credentials: credentials});

const bucketName = "david-balbino-portifolio-bucket";
const dirPath = "post-images/"

const getImageFromS3 = async (imageKey: string) => {
    try {
        const params = {
            Bucket: bucketName,
            Key: dirPath + imageKey,
        };

        const signedUrl = await getSignedUrl(S3, new GetObjectCommand(params), { expiresIn: 3600 });
        return signedUrl;
    } catch (error) {
        console.error('Error getting image from Amazon S3:', error);
        return undefined;
    }
}

export default getImageFromS3;