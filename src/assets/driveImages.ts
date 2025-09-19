// Centralized Google Drive image mapping and helpers

export type DriveImageKey =
  | "commercial/20161031_112320.jpg"
  | "commercial/20161031_112338.jpg"
  | "commercial/IMG_3014.JPG"
  | "commercial/IMG_3043.JPG"
  | "commercial/IMG_3051.JPG"
  | "commercial/IMG_3084 (1).JPG"
  | "commercial/IMG_3111.JPG"
  | "commercial/IMG_20240130_105105.jpg"
  | "commercial/IMG-20170330-WA0121.jpg"
  | "commercial/IMG-20170330-WA0123.jpg"
  | "commercial/IMG-20171030-WA0036.jpg"
  | "commercial/WhatsApp Image 2025-08-28 at 14.56.41_df7d8b12.jpg"
  | "commercial/WhatsApp Image 2025-08-28 at 14.56.42_07db464f.jpg"
  | "commercial/WhatsApp Image 2025-08-28 at 14.56.42_9ce5311d.jpg"
  | "commercial/WhatsApp Image 2025-08-28 at 14.56.43_8979c9e4.jpg";
 
// Paste your Google Drive FILE_IDs below. Keep keys exactly matching filenames used in the app.
// How to get a FILE_ID from a Drive link:
// https://drive.google.com/file/d/FILE_ID/view?usp=sharing → take the string after /d/ and before /view

export const driveImageIds: Partial<Record<DriveImageKey, string>> = {
  "commercial/20161031_112338.jpg": "1AbCdEfGhIjKlMnOpQrStUvWxYz123456",
  "commercial/IMG_3014.JPG": "1AbCdEfGhIjKlMnOpQrStUvWxYz123456",
  "commercial/IMG_3043.JPG": "1AbCdEfGhIjKlMnOpQrStUvWxYz123456",
  "commercial/IMG_3051.JPG": "1AbCdEfGhIjKlMnOpQrStUvWxYz123456",
  "commercial/IMG_3084 (1).JPG": "1AbCdEfGhIjKlMnOpQrStUvWxYz123456",
  "commercial/IMG_3111.JPG": "1AbCdEfGhIjKlMnOpQrStUvWxYz123456",
  // Example:
  // "commercial/20161031_112320.jpg": "<FILE_ID>",
  // Fill these with your actual IDs from the shared Commercial folder
};

export function getDriveImageUrl(key: DriveImageKey): string {
  const id = driveImageIds[key];
  if (!id) {
    // Fall back to local asset path if ID not provided yet
    const localPath = "/" + key.replace(/^commercial\//, "Commercial/");
    return localPath;
  }
  return `https://drive.google.com/uc?export=view&id=${id}`;
}



