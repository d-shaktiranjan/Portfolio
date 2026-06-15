// fetch content from web & return
export const getContentFromWeb = async (fileLink, getInJsonFormat = true) => {
  const data = await fetch(fileLink);
  if (!data.ok) {
    throw new Error(`Failed to fetch blog content: ${data.status}`);
  }

  if (getInJsonFormat) return await data.json();
  return await data.text();
};
