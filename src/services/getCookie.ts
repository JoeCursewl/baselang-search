export const getCookie = (name: string): string | undefined => {
    const cookieString = document.cookie;
    if (!cookieString) return undefined;
  
    const cookiePairs = cookieString.split(';');
    for (const pair of cookiePairs) {
      const [key, value] = pair.split('=');
      const trimmedKey = key.trim();
      if (trimmedKey === name) {
        return decodeURIComponent(value);
      }
    }
  
    return undefined;
  }
  