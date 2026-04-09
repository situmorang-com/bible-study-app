# Bible Study App

SvelteKit app for guided Bible lessons, quizzes, progress tracking, and a local SQLite database.

## Local development

```sh
npm install
npm run dev
```

The SQLite database is stored in `data/bible-study.db`. You can initialize it manually with:

```sh
npm run db:migrate
```

The app also auto-creates the database and tables on startup if they do not exist.

## Production container

This repo includes a `Dockerfile` for Coolify or any Docker-based deployment.

```sh
docker build -t bible-study-app .
docker run --rm -p 3000:3000 -e DATA_DIR=/app/data -v "$(pwd)/data:/app/data" bible-study-app
```

Important runtime settings:

- `PORT`: HTTP port for the Node server. Defaults to `3000`.
- `HOST`: Bind address. Defaults to `0.0.0.0`.
- `DATA_DIR`: Directory containing `bible-study.db`. Defaults to `/app/data` in production if you mount that path.
- `ORIGIN`: Optional public URL such as `https://bible.example.com`.

## Coolify deployment

1. Push this repository to GitHub, GitLab, or another Git provider connected to Coolify.
2. In Coolify, create a new Application from the repository.
3. Change the build pack from `Nixpacks` to `Dockerfile`.
4. Set the base directory to `/` and keep the exposed port at `3000`.
5. Add a persistent storage mount to `/app/data`.
6. Add `DATA_DIR=/app/data` in the environment variables.
7. Add your domain in Coolify and deploy.

Recommended:

- Keep health checks enabled. The image exposes `/health` and includes a Docker `HEALTHCHECK`.
- Set `ORIGIN` to your public HTTPS URL if you want the app to know its canonical external domain.

If you already have production data, copy your existing `bible-study.db`, `bible-study.db-wal`, and `bible-study.db-shm` files into the mounted `/app/data` volume before starting the new container.
