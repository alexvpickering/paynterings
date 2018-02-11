export function truncateString(string, maxLength) {
  if (string.length <= maxLength) {
    return string;
  }

  return `${string.substring(0, maxLength - 4)} ...`;
}
