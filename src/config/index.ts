const config = {
  client: {
    id: process.env.REACT_APP_CLIENT_ID as string,
    secret: process.env.REACT_APP_CLIENT_SECRET as string,
  },
  api: {
    base: process.env.REACT_APP_API_BASE as string,
  },
};

function check(obj: object) {
  Object.keys(obj).forEach((key) => {
    const val = obj[key as keyof typeof obj];
    if (typeof val === "object") {
      check(val);
    } else if (typeof val !== "string") {
      throw new Error(`${key} is not defined`);
    }
  });
}

check(config);
export default config;
