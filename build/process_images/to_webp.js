//https://sharp.pixelplumbing.com/
const sharp = require("sharp");

async function processImages() {
  //const metadata = await sharp("assets/img/m-icon.png").metadata();
  //console.log(metadata);


  await sharp('assets/img/how-to-unload-1400.png')
    //.webp({ lossless: true })
    .resize({ width: 1200 })
    .webp({ quality: 85 })
    .toFile('assets/img/how-to-unload-1200.webp');

   /*

    const file = 'assets/img/how-to-unload-1400.png';
    const rename = 'assets/img/how-to-unload-1400';
    const quality = 80;

    await sharp(file)
      .webp({ quality: quality })
      .toFile(rename+'-3000.webp');

    await sharp(file)
      .resize({ width: 2000 })
      .webp({ quality: quality })
      .toFile(rename+'-2000.webp');

    await sharp(file)
      .resize({ width: 1000 })
      .webp({ quality: quality })
      .toFile(rename+'-1000.webp');

      */
}

processImages();
