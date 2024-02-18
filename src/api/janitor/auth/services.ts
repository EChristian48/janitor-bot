import { apiAuth } from "../../instances";
import { OptionsSignIn, ResponseSignIn } from "./types";

const signIn = ({ body }: OptionsSignIn) => {
  return apiAuth<ResponseSignIn>("/token", {
    body: {
      ...body,
      gotrue_meta_security: {},
    },
    params: { grant_type: "password" },
    method: "POST",
  });
};

export const auth = {
  signIn,
};
