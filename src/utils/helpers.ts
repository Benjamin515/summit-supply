export const slugify = (text: string): string =>
  text.toLowerCase().replace(/\s+/g, "-");

export const createSlug = (input: string): string => {
  return input
    .toLowerCase() // Convert the input to lowercase
    .replace(/\s+/g, "-") // Replace all spaces (one or more) with hyphens
    .replace(/[^a-z0-9\-]/g, ""); // Optionally remove non-alphanumeric characters except hyphens
};

export const reverseSlug = (slug: string): string => {
  return slug
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
};

export const getInitials = (name: string) => {
  const nameParts = name.split(" ");
  const initials = nameParts.map((part) => part[0].toUpperCase()).join("");
  return initials;
};

// Function to generate a unique class name based on the user's name
export const generateAvatarClassFromName = (name: string): string => {
  // Hash the name to get a unique number
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate an HSL color based on the hash and create a class name
  const hue = Math.abs(hash % 360); // Hue value between 0 and 360 degrees
  const saturation = 60 + Math.abs(hash % 20); // Saturation between 60 and 80%
  const lightness = 40 + Math.abs(hash % 20); // Lightness between 40 and 60%

  // Constructing the class name and including the background color in HSL format
  return `avatar-bg-${hue}-${saturation}-${lightness}`;
};

export const generateColorFromName = (name: string): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  const saturation = 60 + Math.abs(hash % 20);
  const lightness = 40 + Math.abs(hash % 20);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
