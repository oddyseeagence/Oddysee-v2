import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const downloads = [
  {
    path: "public/images/crevix-about/hero-glow.png",
    url: "https://framerusercontent.com/images/3BDVOsoTQfXgkEbAqXlgQecniJc.png?scale-down-to=2048&width=6400&height=2236",
  },
  {
    path: "public/images/crevix-about/team-ethan.png",
    url: "https://framerusercontent.com/images/V7XiYCiJacScacHEvYTxnxMEk5Q.png?width=416&height=417",
  },
  {
    path: "public/images/crevix-about/team-noah.png",
    url: "https://framerusercontent.com/images/H4BOT6DutnozPuJU6k1tIadJ1g.png?width=1664&height=1668",
  },
  {
    path: "public/images/crevix-about/team-olivia.png",
    url: "https://framerusercontent.com/images/mSwsJtCqPgCB0G3zUoKhFX8W1dw.png?width=1664&height=1668",
  },
  {
    path: "public/images/crevix-about/team-liam.png",
    url: "https://framerusercontent.com/images/0NAGGJlU8USKiSM3uQKYy8RQto.png?width=1664&height=1668",
  },
  {
    path: "public/images/crevix-about/team-ava.png",
    url: "https://framerusercontent.com/images/uYl2FdyqL2PnkiRNIKeyOruFYzA.png?width=1664&height=1668",
  },
  {
    path: "public/images/crevix-about/result-innovation.png",
    url: "https://framerusercontent.com/images/UTkBfGh7UbQ6LaW81AkG1zPKSk.png?scale-down-to=512&width=600&height=600",
  },
  {
    path: "public/images/crevix-about/result-video-poster.png",
    url: "https://framerusercontent.com/images/pe4DMzjO7VfIGR3hebqzasE1mA.png?width=1672&height=941",
  },
  {
    path: "public/fonts/crevix-about/lora-regular.woff2",
    url: "https://fonts.gstatic.com/s/lora/v37/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkq0.woff2",
  },
];

async function download({ path, url }) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }

  const outputPath = join(process.cwd(), path);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${path}`);
}

for (let index = 0; index < downloads.length; index += 4) {
  await Promise.all(downloads.slice(index, index + 4).map(download));
}
