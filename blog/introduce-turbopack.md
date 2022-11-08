---
title: 'Introducing Turbopack:Rust-based successor to Webpack'
date: '2022-01-01'
slug: 'introduce-turbopack'
tags: ['fronted bundle]
---

The mission of Vercel is to provide the speed and reliability innovators need to create at the moment of inspiration.
On the last year,we focused on speeding up the way Next.js bundles your apps.

Each time we moved from a JavaScript-based tool to a Rust-based one,we saw enormous improvements.We migrated away 
from Babel,which resulted in 6x faster minification to reduce load times and bandwidth usage.

There was one hurdle left:Webpack.Webpack has been download over 3 billion times.It's become an integral part of 
building the Web,but it's time to go faster and scale without limits.

Today,we're launching **Turbopack**:our successor to Webpack.

Led by the creator of Webpack,Tobias Koppers,Turbopack will be the Web's next-generation bundle.We're building it 
with high-performance bare-metal tooling-open source today,for all framework in the future.

Try out the alpha of Turbopack in Next.js 13 today with `next dev --turbo`.

## How fast is Turbopack

Turbopack is build on a new incremental architecture for the faster possible development experience.On large 
applications,it shows updates 10x faster than Vite and 700x faster than Webpack.On even larger applications,the 
difference is greater--often 20x faster than Vite.

Turbopack only bundles the minimum assets required in development.so startup time is extremely fast.On application 
with 300 modules,Turbopack takes 1.8 seconds to boot up,while Vite takes 11.4 second.

To lean more,read the [docs](https://turbo.build/pack/docs/core-concepts) on how Turbopack bundles and view the 
benchmarks.

## Why is Turbopack so fast

The architecture of Turbopack takes the lessons learned form tools like Turbopack and Google's Bazel,both of which 
focus on using caches to never do the same work twice.

Turbopack is build on Turbo:an open-source,incremental memoization framework for Rust.Turbo can cache the result of 
any function in the program.When the program is run again,functions won't re-run unless their inputs have changed.
This granular architecture enables your program to skip large amounts of work,at the level of the function.

An incremental reactive system with the speed of Rust?Turbopack is unstoppable.

To learn more,check out our [explainer on Turbo](https://turbo.build/pack/docs/core-concepts)

## The future of Turbo

To start, Turbopack will be used for the Next.js 13 development server.It will power lighting-fast HMR,and it will 
support React Server Components natively,as well as TypeScript,JSX,CSS,and more.

Turbopack will eventually also power Next.js production builds.both locally and in the cloud.We'll be able to share 
Turbo's cache across your entire team,using Vercel Remote Caching.

Webpack's users can also expect **an incremental migration path** into the Rust-based future with Turbopack.

We couldn't be more excited about the future of the Turbo ecosystem,as we push to help you iterate faster and create 
at the moment of inspiration.