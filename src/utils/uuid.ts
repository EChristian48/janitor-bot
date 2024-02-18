import uuid from "uuid";

export const uuidWithoutDashes = () => {
  return uuid.v4().replace(/-/g, "");
};
