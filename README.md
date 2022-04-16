This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


##################################################

## NETFLIX CLONE USING NEXT/REACT


Steps:

1) import movies database from TMDB.org database

https://developers.themoviedb.org/3/getting-started/introduction

key: fbebdab96fb21b739942d1a592853f3e
url base: https://api.themoviedb.org/3


useful tolls:
Test API  --> https://resttesttest.com/
Format json --> http://jsonviewer.stack.hu/


import infos from external service(API TMDB):

-Netflix originals
-Trending 
-Top Rated
-Action
-Comedy
-Horror
-Romance
-Documentary

create a Fetch function for import movie infos from API Database

2) creation of react components
    -database
    -header
    -featured
    -lists
    -movieRow
    -footer






            <div className="movieRow--listarea">
                {items.results.length > 0 && items.results.map((item, key) => (
                    
                    <img src= {`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                    
                )
                
                )}
            </div>
