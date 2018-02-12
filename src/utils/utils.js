export function truncateString(string, maxLength) {
  if (string.length <= maxLength) {
    return string;
  }

  return `${string.substring(0, maxLength - 4)} ...`;
}

export const monthGroups = [
  ["January", "February", "March"],
  ["April", "May", "June"],
  ["July", "August", "September"],
  ["October", "November", "December"]
];

export const months = [].concat(...monthGroups);
