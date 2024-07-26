# Vite + React Starter Pack

## It's a perfect starter, easy to understand, and everything is sorted. You just need to roam around a bit!


**Following are the packages/libraries that are needed for some basic application having Form, Backend API Handling, Router, SEO, unit tests, and stuff.**

**Make sure to update them and add as many more as you like.**


| Package Name        | Description                                     |
|---------------------|-------------------------------------------------|
| `yup`               | Schema builder for value parsing and validation |
| `jest`              | JavaScript Testing Framework                    |
| `react`             | JavaScript library for building user interfaces |
| `axios`             | Promise based HTTP client for the browser       |
| `formik`            | Form library for React                          |
| `react-dom`         | Entry point to the DOM and server renderers for React |
| `babel-jest`        | Jest plugin for Babel                           |
| `react-icons`       | SVG react icons of popular icon packs           |
| `react-toastify`    | React notification library                      |
| `react-router-dom`  | DOM bindings for React Router                   |
| `styled-components` | Visual primitives for the component age         |
| `react-helmet-async`| A document head manager for React               |
| `vite-plugin-sitemap` | Generate sitemap.xml using Vite               |



### Framework basics

**Paths are set in configs for the ease of use**

Example outside of this system:

```
import SomeComponent from '../path_directory/filename.ext'
```

In here we use like:

```
import SomeComponent from '@/path_directory/filename'
```


**You do not have to specify any extensions "suffix" to any file.**
**For example if you want to import a module or component from assets folder**

Example outside of this system:

```
import Logo from './assets/filename.svg'
```

In here we use like:

```
import Logo from '@assets/filename'
```

without the extention


### Get started

To get started, run: 

```
npm i
```
To start the server, run:

```
npm run dev 
```


**Check the port assigned to you! It will by default be** 

```
http://localhost:5173/
```


**Do not forget to build when you are ready for the production**

```
npm run build
```