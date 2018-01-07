// Clean a URL
export default function clean(title) {
    // Remove all characters except alphabets, numbers, hyphens, and underscores
    title = title.replace(/ /g, "_");

    return title.replace(/[^a-zA-Z0-9-_]/g, "");
}
