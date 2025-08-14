## Solace Candidate Assignment

# Release Notes
- [PR #1](https://github.com/JonSchwartz93/solace-health-jon-schwartz/pull/1)
  - Resolve console errors/bugs
  - Update search input to use React state
- [PR #2](https://github.com/JonSchwartz93/solace-health-jon-schwartz/pull/2)
  - Debounce search input every 300ms to avoid requesting advocates every keystroke
  - Update UI/layout of table using TailwindCSS

<img width="1000" height="980" alt="Screenshot 2025-08-14 at 4 02 19 PM" src="https://github.com/user-attachments/assets/727a2f67-5cce-4a3c-956b-0e7f3006b1be" />

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install dependencies

```bash
npm i
```

Run the development server:

```bash
npm run dev
```

## Database set up

The app is configured to return a default list of advocates. This will allow you to get the app up and running without needing to configure a database. If you’d like to configure a database, you’re encouraged to do so. You can uncomment the url in `.env` and the line in `src/app/api/advocates/route.ts` to test retrieving advocates from the database.

1. Feel free to use whatever configuration of postgres you like. The project is set up to use docker-compose.yml to set up postgres. The url is in .env.

```bash
docker compose up -d
```

2. Create a `solaceassignment` database.

3. Push migration to the database

```bash
npx drizzle-kit push
```

4. Seed the database

```bash
curl -X POST http://localhost:3000/api/seed
```
