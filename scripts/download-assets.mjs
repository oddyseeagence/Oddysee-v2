import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const IMAGES = [
  "https://framerusercontent.com/images/0FL3IvBRuxie9tdokLm0rAbr3E.svg",
  "https://framerusercontent.com/images/J0IawS3pcycOS8pQJWCRUmvV8.png",
  "https://framerusercontent.com/images/wsdjftbdgo7jaFV4j3GK0u3yWx0.png",
  "https://framerusercontent.com/images/Is1zQc6s9oNVBeX2GJ8qrdim7r8.png",
  "https://framerusercontent.com/images/rbGVkaqGfuvnJi18DsLFsGGaYo.png",
  "https://framerusercontent.com/images/ABhlxK1vte0l8Q5mPRGKLRYNC84.png",
  "https://framerusercontent.com/images/q2Ei9bnj5x5iw4K5TqivExQeaao.png",
  "https://framerusercontent.com/images/wnL8dDUAUigDLFpgHrXsrWfdOsc.png",
  "https://framerusercontent.com/images/AcpgxBNwwWChmjiux5QqPlDX0.svg",
  "https://framerusercontent.com/images/Iolq2WRgZIFWmdR721uB0jMRwPk.svg",
  "https://framerusercontent.com/images/AKwtmRqnVBTlkeZZKLDUSwRLA.svg",
  "https://framerusercontent.com/images/S62ivhNP0bNdY8iFuVU51OmRWhA.png",
  "https://framerusercontent.com/images/th0iLwfNy4GC3lETawQhJYrM.png",
  "https://framerusercontent.com/images/XGpOxv5lnuHffpehV7PCZKFuF4.png",
  "https://framerusercontent.com/images/YOfUb89TSitMPYY1tvvRE4VGe0.svg",
  "https://framerusercontent.com/images/aiLTjYPkgfqyzApAFEHC4C2uDg.png",
  "https://framerusercontent.com/images/m9iGbTvzSU0X8EmaayVuOMIRork.png",
  "https://framerusercontent.com/images/TzNUKQ3nV4fZNTQVsrtY5HZdZQg.png",
  "https://framerusercontent.com/images/1JwMgKBC5NLItnIkj4lQUhGmN9k.png",
  "https://framerusercontent.com/images/U6Npa7O4X2OlLqe9caPvFM1fQ.png",
  "https://framerusercontent.com/images/DeY32bDwEuzZ6HcYmlxZqgyMQ.png",
  "https://framerusercontent.com/images/SDZauHxn0fY54tA8kHIfP6zJ9aU.png",
  "https://framerusercontent.com/images/e4BWmAGi1BLgfp8ovDBTi284Ec.png",
  "https://framerusercontent.com/images/Ve4xe8fe2mEHspmmkKz2EDVx0A4.png",
  "https://framerusercontent.com/images/KC3Kuv2mmVfyLTTg0k3nlV2IAO8.png",
  "https://framerusercontent.com/images/JfJAfR6lq1p2gtGDdu4qauSo5k.png",
  "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
  "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
  "https://framerusercontent.com/images/PTrOdXdJAOGMtfCb7ccLalR0o.png",
  "https://framerusercontent.com/images/AJqFBTpotUc0ji5w7bB9Y4dQ7hM.png",
  "https://framerusercontent.com/images/4bk7BRxDDKxeAdxLYsjHmyTbc2Q.png",
  "https://framerusercontent.com/images/vunfas145xHTrOUHKMUMLF8dwrc.png",
  "https://framerusercontent.com/images/NAN4JcQW30UTt7UOD3Dew6CMl8.png",
  "https://framerusercontent.com/images/ZLfjupIzIYXJw7hzRvT4aWylANA.png",
];

const VIDEOS = [
  "https://framerusercontent.com/assets/yUs2qy6Ep8clfnPQOCNP7F2Xk0.mp4",
  "https://framerusercontent.com/assets/WKG3JrKuuXHmdKCS9p58DUa42A4.mp4",
  "https://framerusercontent.com/assets/kjNviig7qZAohzpKx0FT3cjbFBE.mp4",
  "https://framerusercontent.com/assets/dnMDtOp3yMQXoZ2VqGsQLUcgw.mp4",
];

const SEO = ["https://framerusercontent.com/images/wMP2HzLEsQgbfcotq51H63FRjs.svg"];

const ROOT = path.resolve(import.meta.dirname, "..");

async function downloadOne(url, destDir) {
  const filename = decodeURIComponent(new URL(url).pathname.split("/").pop());
  const dest = path.join(destDir, filename);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${url}: ${res.status}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`OK ${filename} (${buf.length} bytes)`);
}

async function downloadBatch(urls, destDir, batchSize = 4) {
  await mkdir(destDir, { recursive: true });
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    await Promise.all(batch.map((u) => downloadOne(u, destDir)));
  }
}

await downloadBatch(IMAGES, path.join(ROOT, "public", "images"));
await downloadBatch(VIDEOS, path.join(ROOT, "public", "videos"));
await downloadBatch(SEO, path.join(ROOT, "public", "seo"));

console.log("Done.");
