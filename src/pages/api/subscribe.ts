import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

export const post: APIRoute = async ({ request }) => {
  const supabase = createClient(
    "https://yvnrxcydcswsobiipksy.supabase.co",
    import.meta.env.SUPABASE_KEY
  );

  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const { error } = await supabase
      .from("Interests")
      .insert({ emailid: body.email });

    if (!error)
      return {
        body: JSON.stringify({
          STATUS: "SUCCESS",
        }),
      };
  }

  return {
    body: JSON.stringify({
      STATUS: "FAILURE",
    }),
  };
};
