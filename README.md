# Credentials Setup

## How to run

1. Create a `.env.local` file with:
   - `AUTH_SECRET` as per authjs docs.
   - `MONGODB_CONNECTION_STRING` with your own mongodb instance.
2. Run with `npm run dev`.

## Walkthrough

1. Get started with `create-next-app@latest`.
2. Follows the steps [here](https://authjs.dev/getting-started/installation) for the `next-auth` scaffolding. 
3. Set up MongoDB connection (`utils/dbConnect.js`).
4. Create the user model (`models/user.js`).
5. Create the register API route (`app/api/register/route.js`).
6. Update `app/layout.js` to include `SessionProvider`.
6. Create the register page (`app/register/page.js`) and validate registrations on your Mongo database.
7. Create the login page (`app/login/page.js`) that calls `next-auth` `signIn` method.
8. Create a navbar to navigate between pages and show session state (`components/nav`).
   - Must leverage `SessionProvider` from `next-auth`.
9. Set up the credentials provider (`auth.js`) and test sign in.
10. Extend navbar to invoke `logout`.