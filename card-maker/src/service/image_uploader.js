class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "n6v1a4xb");
    const res = await fetch("http://api.cloudinary.com/v1_1/djawrpvux/upload", {
      method: "POST",
      body: data,
    });
    return await res.json();
  }
}

export default ImageUploader;
