export default async function getCroppedImg(imageSrc, crop) {
    const image = new Image();
    image.src = imageSrc;
  
    return new Promise((resolve, reject) => {
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
  
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = "high";
  
        const { x, y, width, height } = crop;
        ctx.drawImage(
          image,
          x,
          y,
          width,
          height,
          0,
          0,
          canvas.width,
          canvas.height
        );
  
        const croppedImageDataUrl = canvas.toDataURL("image/jpeg");
        resolve(croppedImageDataUrl);
      };
  
      image.onerror = () => {
        reject(new Error("Failed to load image"));
      };
    });
  }
  