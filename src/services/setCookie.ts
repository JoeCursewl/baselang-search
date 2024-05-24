export const setCookie = (name: string, value: string, options?: {
    path?: string,
    maxAge?: number,
    domain?: string,
    secure?: boolean,
    httpOnly?: boolean
  }): void => {
    let cookieString = `${name}=${encodeURIComponent(value)}`;
  
    if (options) {
      if (options.path) {
        cookieString += `;path=${options.path}`;
      }
  
      if (options.maxAge) {
        cookieString += `;max-age=${options.maxAge}`;
      }
  
      if (options.domain) {
        cookieString += `;domain=${options.domain}`;
      }
  
      if (options.secure) {
        cookieString += `;secure`;
      }
  
      if (options.httpOnly) {
        cookieString += `;httpOnly`;
      }
    }
  
    document.cookie = cookieString;
  }
  