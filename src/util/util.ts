import Jimp = require('jimp');

/**
 * decode, filter, and encode image
 * @param imputImage image buffer
 * @returns jpeg encoded image buffer
 */
export async function filterImage(inputImage: Buffer): Promise<Buffer> {
    const outputImage = await Jimp.read(inputImage);
    outputImage.resize(256, 256);
    outputImage.quality(60);
    outputImage.greyscale();
    return outputImage.getBufferAsync(Jimp.MIME_JPEG);
}
