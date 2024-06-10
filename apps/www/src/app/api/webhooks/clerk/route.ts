import { Webhook } from "svix";
import { headers } from "next/headers";
import { type WebhookEvent } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { users } from "~/server/db/schema";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local",
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  if (evt.type === "user.created") {
    console.log(`🔵 received webhook [user.created]`);

    const primaryEmail = evt.data.email_addresses.find(
      (em) => em.id === evt.data.primary_email_address_id,
    );
    const fallbackEmail = evt.data.email_addresses[0]?.email_address || "";

    const userObj = {
      id: evt.data.id,
      email: primaryEmail ? primaryEmail.email_address : fallbackEmail,
      username: evt.data.username,
      image: evt.data.image_url,
    };

    try {
      await db.insert(users).values(userObj);
      console.log(`🟢 successfully created new user to database`);
    } catch (error) {
      console.log(`🔴 failed to create new user to database`);
      console.log("🔴 ~ POST ~ error:", error);
    }
  }
  if (evt.type === "user.updated") {
    console.log(`🔵 received webhook [user.updated]`);

    const primaryEmail = evt.data.email_addresses.find(
      (em) => em.id === evt.data.primary_email_address_id,
    );
    const fallbackEmail = evt.data.email_addresses[0]?.email_address;

    const userObj = {
      email: primaryEmail ? primaryEmail.email_address : fallbackEmail,
      username: evt.data.username,
      image: evt.data.image_url,
    };

    try {
      await db.update(users).set(userObj);
      console.log(`🟢 successfully updated new user to database`);
    } catch (error) {
      console.log(`🔴 failed to update new user to database`);
      console.log("🔴 ~ POST ~ error:", error);
    }
  }

  return new Response("", { status: 200 });
}

export async function GET() {
  return new Response("Clerk webhook", { status: 200 });
}
