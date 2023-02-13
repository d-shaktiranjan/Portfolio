// fetch content from web & return
export const getContentFromWeb = async (fileLink) => {
    const data = await fetch(fileLink);
    return data;
}