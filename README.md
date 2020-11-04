This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started with Docksal

### Prepare

1. Install [https://docksal.io](Docksal).
2. Run `fin init` command to initialize Docker stack.

### Working

* Run `fin dev` command to start application in dev mode, then open [http://dcswebsite.docksal](dcswebsite.docksal) page. 
* Run `fin yarn` to execute yarn command inside Docker
* Run `fin start` to start containers
* Run `fin stop` to stop containers
* Run `fin project remove` to remove Docker stack


## Getting Started without Docksal

###

Create `.env` file. See example at `.docksal/services/cli/.env` location.


### Working

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
