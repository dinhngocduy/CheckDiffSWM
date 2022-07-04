function generateSummaryString(content: string, maxCharacters: number): string {
    if(content) {
        return content.substring(0, maxCharacters) + ((content.length > maxCharacters) ? "..." : "");
    }

    return "";
}

export default generateSummaryString;
