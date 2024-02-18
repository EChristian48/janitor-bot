import { auth } from "@/api/janitor";
import { minutesInMs } from "@/utils/time";

export const janitor = {
  token: "",
};

const DURATION = minutesInMs(9);

const updateToken = async () => {
  if (janitor.token) console.log(`Previous token found, refreshing token...`);
  else console.log(`Logging in as ${import.meta.env.VITE_JANITOR_EMAIL}...`);

  try {
    const response = await auth.signIn({
      body: {
        email: import.meta.env.VITE_JANITOR_EMAIL,
        password: import.meta.env.VITE_JANITOR_PASSWORD,
      },
    });

    janitor.token = response.access_token;
    console.log(`Login success! Token updated.`);
    console.log(`Updating token every ${DURATION}ms...`);
  } catch (e) {
    console.log(`Failed to login, ${e}`);
  }
};

await updateToken();

setInterval(async () => {
  await updateToken();
}, DURATION);
