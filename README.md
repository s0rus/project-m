# PROJECT M

## What is it?

Project M is an app that lets you watch videos from different platforms (youtube, streamable etc.) in sync with other users. Videos are kept in a playlist and so every logged in user can add a video in advance. Users with administrator capabilities can skip, pause/play and rewind videos - that too will happen in sync with others. Also, when user joins and video is playing already, video time is going to adjust based on leader's player state.

## Techstack

The app has been boostrapped with [Create T3 App](https://create.t3.gg/) that provides a really cool, not opinionated boilerplate to start a monorepo project.

It uses the following technologies:

- [Typescript](https://www.typescriptlang.org/) - obviously... Typescript is a must have
- [Next.js](https://nextjs.org/) - handles a lot of things for us like SSR, image optimization and routing
- [tRPC](https://trpc.io/) - lets us create end-to-end typesafe API's without any code generation and bloat
- [Prisma](https://www.prisma.io/) - Prisma is an ORM for TypeScript, that allows you to define your database schema and models and then generate a type-safe client that can be used to interact with your database from your backend
- [NextAuth](https://next-auth.js.org/) - handles the authorization, sessions etc. of users

Please, refer to [Create T3 App](https://create.t3.gg/) docs to read more about the file structure and how that exactly works.

Besides, **Project M** is using following technologies:

- [Planetscale](https://planetscale.com/) - our database that holds user and playlist information

- [socket.io](https://socket.io/) (with socket.io-client) - handles the communication between server and clients to sync them

- [zustand](https://zustand-demo.pmnd.rs/) - handles global state of the app

- [react-player](https://www.npmjs.com/package/react-player) - handles parsing urls and displaying proper video players

- [MUI](https://mui.com/) - handles theming and gives us a variety of prebuilt components that are highly customizable

- [zod](https://github.com/colinhacks/zod) - typescript first schema validator

- [dayjs](https://day.js.org/) - utility library to handle dates

- [react-toastify](https://www.npmjs.com/package/react-toastify) - handles the popup messages in the corner of the app

- [simplebar](https://github.com/Grsmto/simplebar) (with simplebar-react) - handles the scrollbars to ensure the compatibility across all browsers

## Setup

To run **Project M** you have to do following things:

- setup `.env`:

  Create `.env` file and copy content from `.env.sample` to it.

  You have to setup following variables:

  - `DATABASE_URL`  
    As we are using `Planetscale` for our database, you should create a database there, then click `connect` and choose `Prisma` as you way of connecting. Planetscale will provide you with a link that you paste in place of `DATABASE_URL`.

  That url tough is for production, for local development you should connect to DB using [`connect`](https://planetscale.com/docs/reference/connect) command (in this case it would look like this: `pscale connect {YOUR-DATABASE-NAME} {BRANCH} --port 3309`) and provide the `.env` file with `mysql://root@127.0.0.1:3309/{YOUR-DATABASE-NAME}`

  To setup **Planetscale CLI** refer to the docs [here](https://planetscale.com/docs/concepts/planetscale-environment-setup).

  - `NEXTAUTH_SECRET`  
    This value can be whatever in local developement, in production however you should provide a random key (I recommend using `openssl rand -base64 32` command in your terminal and paste in the generated key).

  - `NEXTAUTH_URL`  
    For local developement the value should be `http://localhost:{PORT}`, when you move to production you provide it with your domain url. **PORT** is set to `3000` by default.

  - `TWITCH_CLIENT_ID` and `TWITCH_CLIENT_SECRET`
    Because we use Twitch Auth API for authorization, you have to create an app in [Twitch console](https://dev.twitch.tv/console/apps), which will give you the ability to generate both of these values. Just paste them in accordingly.

  - `SKIP_ENV_VALIDATION` (set to `false` by default)  
    Set to `true` is useful when you want to dockerize the app.

- run `npm install` command to install dependencies

- run `npx prisma db push` - to sync the schema between client and database

- run `npm run dev` to startup local server

You can also use `npx prisma studio` command that gives you ability to see and make changes in your database on `http://localhost:5555`

When you have your database connection and local server running you can start to make changes!

**Keep in mind!**  
You can change the database and auth provider for whatever you like, then edit the `.env` file accordingly.

## Leader flow

The whole synchronization is based on so called **leader**. This concrete entity serves as the source of thruth when it comes to the state of video player.

The flow works as follows:

When there is noone on the page, first user that joins is set as the leader automatically.  
When there is already a user on the page (that means this user is the leader), and someone joins, we send the request to the leader to provide current time of the video for the joining user.

When user is a leader and he leaves the page couple of things are checked:  
First we check if there are any users with **admin privileges**, if so random one from the list of administators is selected as the new leader.  
If there are no administrators on the page, random user **without** admin privilages is selected.  
Administrators can see the current leader, and can become one (there is no difference if current leader is regular user or admin).

## Translations

This app uses `i18n` as a translation solution, so all of the page text is represented as keys which correspond to certain translation. We hold both `english` and `polish` translations in `translations` folder.

## Local storage thingies

We save users currently selected volume of the player, and the value of the chat (if it's toggled on or off) in the local storage, so that we can restore the values when user joins the next time.
