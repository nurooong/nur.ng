export function encodeNumberToBase62(num: number): string {
  const BASE62_CHARS = "xgjBEdIJG3Ntlz54h6Qou8p2LfvbUWcSVn0DyZ7HwOkMaTr9i1eqYKFXCRmsPA";
  const base = BASE62_CHARS.length;

  if (num < 0) {
    throw new Error("Input number cannot be negative for base62 encoding.");
  }

  if (num === 0) {
    return BASE62_CHARS[0];
  }

  let encoded = "";
  let currentNum = num;

  while (currentNum > 0) {
    const remainder = currentNum % base;
    encoded = BASE62_CHARS[remainder] + encoded;
    currentNum = Math.floor(currentNum / base);
  }

  return encoded;
}