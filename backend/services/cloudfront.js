import { getSignedUrl } from "@aws-sdk/cloudfront-signer";

const privateKey = process.env.CLOUDFRONT_PRIVATE_KEY;
const keyPairId = "K8FR0XY601NDD";
const dateLessThan = new Date(Date.now() + 1000 * 60 * 60).toISOString(); // any Date constructor compatible
const distributionName = `https://d20mge949pa91b.cloudfront.net`;

export const createCloudFrontGetSignedUrl = ({
  key,
  download = false,
  filename,
}) => {
  const url = `${distributionName}/${key}?response-content-disposition=${encodeURIComponent(`${download ? "attachment" : "inline"}; filename=${filename}`)}`;
  const signedUrl = getSignedUrl({
    url,
    keyPairId,
    dateLessThan,
    privateKey,
  });
  return signedUrl;
};

// https://bibwild.wordpress.com/2024/06/18/cloudfront-in-front-of-s3-using-response-content-disposition/
