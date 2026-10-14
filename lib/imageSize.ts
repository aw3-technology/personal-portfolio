import { readFileSync } from "node:fs";
import path from "node:path";

export type ImageSize = { width: number; height: number };

// Read the intrinsic pixel size of a /public image from its file header
// (PNG, JPEG, WebP). Server-only — lets layouts reserve the exact aspect
// ratio up front instead of cropping or shifting once the image loads.
export function getImageSize(src: string): ImageSize | undefined {
  let buf: Buffer;
  try {
    buf = readFileSync(path.join(process.cwd(), "public", src));
  } catch {
    return undefined;
  }

  // PNG: IHDR chunk follows the 8-byte signature.
  if (buf.toString("ascii", 1, 4) === "PNG") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // WebP: RIFF container with a VP8 / VP8L / VP8X chunk.
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const chunk = buf.toString("ascii", 12, 16);
    if (chunk === "VP8 ") {
      return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    }
    if (chunk === "VP8L") {
      const bits = buf.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (chunk === "VP8X") {
      return { width: buf.readUIntLE(24, 3) + 1, height: buf.readUIntLE(27, 3) + 1 };
    }
    return undefined;
  }

  // JPEG: walk segments until a start-of-frame marker.
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < buf.length) {
      if (buf[offset] !== 0xff) {
        offset++;
        continue;
      }
      const marker = buf[offset + 1];
      const isSOF = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
      if (isSOF) {
        return { width: buf.readUInt16BE(offset + 7), height: buf.readUInt16BE(offset + 5) };
      }
      offset += 2 + buf.readUInt16BE(offset + 2);
    }
  }

  return undefined;
}
