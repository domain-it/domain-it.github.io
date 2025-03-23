export const copyToClipboard = async (text: string): Promise<boolean> => {
  return await navigator.clipboard.writeText(text).then(() => true);
};
