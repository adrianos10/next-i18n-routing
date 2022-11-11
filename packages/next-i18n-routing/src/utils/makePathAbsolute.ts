const makePathAbsolute = (path: string) =>
  /^\//.test(path) ? path : `/${path}`;

export { makePathAbsolute };
