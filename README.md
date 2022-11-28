# PROJECT M

## What is it?

Project M is an app that lets you watch videos from different platforms (youtube, streamable etc.) in sync with other users. Videos are kept in a playlist and so every logged in user can add a video in advance. Users with administrator capabilities can skip, pause/play and rewind videos - that too will happen in sync with others. Also, when user joins and video is playing already, video time is going to adjust based on leaders time.

## Techstack

The app has been boostrapped with [Create T3 App](https://create.t3.gg/) that provides a really cool, not opinionated boilerplate to start a monorepo project.

It uses the following technologies:

- [Typescript](https://www.typescriptlang.org/) - obviously... Typescript is a must have
- [Next.js](https://nextjs.org/) - handles a lot of things for us like SSR, image optimization and routing
- [tRPC](https://trpc.io/) - lets us create end-to-end typesafe API's without any code generation and bloat
- [Prisma](https://www.prisma.io/) - Prisma is an ORM for TypeScript, that allows you to define your database schema and models and then generate a type-safe client that can be used to interact with your database from your backend
- [NextAuth](https://next-auth.js.org/) - handles the authorization, sessions etc. of users based on providers (there are a lot of them)

Please, refer to [Create T3 App](https://create.t3.gg/) docs to read more about the file structure and how that exactly works.

Besides, **Project M** is using following technologies:

- [Planetscale](https://planetscale.com/) - our database that holds user and playlist info

- [socket.io](https://socket.io/) (with socket.io-client) - handles the communication between server and clients to sync them

- [zustand](https://zustand-demo.pmnd.rs/) - handles global state of the app

- [react-player](https://www.npmjs.com/package/react-player) - handles parsing urls and displaying proper video players

- [MUI](https://mui.com/) - handles theming and gives us a variety of prebuilt components that are highly customizable

- [zod](https://github.com/colinhacks/zod) - typescript first schema validator

- [dayjs](https://day.js.org/) - utility library to handle dates

- [react-toastify](https://www.npmjs.com/package/react-toastify) - handles the popup messages in the corner of the app

- [simplebar](https://github.com/Grsmto/simplebar) (with simplebar-react) - handles the scrollbars to ensure the compatibility across all browsers

## Setup

To run **Project M** locally you have to do following things:

- `.env` setup:

  As we are using `Planetscale` as our database, you should create a database there, then click `connect` and choose `Prisma` as you way of connecting. Planetscale will provide you with a link that you paste in place of `DATABASE_URL`. That url tough is for production, for local development you should connect to DB using [`connect`](https://planetscale.com/docs/reference/connect) command (in this case it would look like this: `pscale connect {YOUR-DATABASE-NAME} {BRANCH} --port 3309`) and provide the `.env` file with `mysql://root@127.0.0.1:3309/{YOUR-DATABASE-NAME}`

  The next thing to fill is `NEXTAUTH_SECRET`, which in local development can be whatever, but in production I recommend using `openssl rand -base64 32` command in your terminal to generate random key and fill it in

  In local development `NEXTAUTH_URL` should be filled with `http://localhost:3000`, when you move to production you should provide it with your domain url

  As our app uses twitch to authorize users, you have to create an app in [Twitch console](https://dev.twitch.tv/console/apps) to get two things: `CLIENT_ID` and `CLIENT_SECRET`, fill it in `.env` file accordingly

  `SKIP_ENV_VALIDATION` set to `true` is useful when you want to dockerize the app

- run `npm install` command the install all dependencies

- run `npx prisma db push` - to sync the schema between client and database

- run `npm run dev` to startup local server

You can also use `npx prisma studio` command that gives you ability to see and make changes in your database on `http://localhost:5555`

When you have your DB connection and local server running you can start to make changes!

**Keep in mind!**  
You can change the database and auth provider for whatever you like, then edit the `.env` file accordingly.
