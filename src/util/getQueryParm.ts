function getQueryParam(search: string, target: string) {
  const sp = search.slice(1).split("&");
  const obj: {
    [index: string]: string;
  } = {};

  sp.forEach((s) => {
    if (!s.includes("=")) {
      return;
    }
    const [key, value] = s.split("=");
    obj[key] = value;
  });
  return obj[target];
}

export default getQueryParam;
