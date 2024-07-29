# Credentials example

## How to run

1. Create a `.env.local` file with:
   - `API` pointing to `http://localhost:3000/api` for local development.
   - `AUTH_SECRET` as per authjs docs.
   - `MONGODB_CONNECTION_STRING` with your own mongodb instance.
2. Run with `npm run dev`.

## TODO

- Disable access to login and signup if authenticated.
- Make a dummy /dashboard page protected by auth and roles.
- Protect a dummy API call with auth and roles.