import axios from "axios";
import { URL } from "url";
// https://onedrive.live.com/redir?resid=A2776A75E88B2C08!3106&authkey=!ADkTPEx-xEb9AYw&ithint=file%2cpdf

// Request URL: https://api.onedrive.com/v1.0/drives/A2776A75E88B2C08/items/A2776A75E88B2C08!3106?select=id%2C%40content.downloadUrl&authkey=!ADkTPEx-xEb9AYw

export async function download(url: string) {
  //const url = "https://1drv.ms/b/s!Aggsi-h1aneimCI5EzxMfsRG_QGM";
  const resp = await axios.get(url); // expect a redirect

  // TODO: resp.request could be undefined
  const resourceUrl = new URL(resp.request.res.responseUrl);
  console.log(resourceUrl);

  const resid = resourceUrl.searchParams.get("resid") || "";
  const authkey = resourceUrl.searchParams.get("authkey");
  const driveId = resid.split("!")[0];

  const dlu = `https://api.onedrive.com/v1.0/drives/${driveId}/items/${resid}/content?authkey=${authkey}`;
  console.log("download try", dlu);
  const dl = await axios.get(
    `https://api.onedrive.com/v1.0/drives/${driveId}/items/${resid}/content?authkey=${authkey}`,
    { responseType: "blob" }
  );
  const file = dl.data;
  return Buffer.from(file).toString("base64");
}
