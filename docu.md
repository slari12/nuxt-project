# NUXT.JS

This contains auto-imported components, composables, middlewares, and other plugins are found in .nuxt directory. 

## Pages and Routing 

- NuxtLink (auto routing in app file) name of routes depends on the filename used. Must not forget to add on app.vue.

- NuxtPage must also be added on app.vue page before using the files under page directory

- [id] file name for dynamic routing

## Components

- Nested child components to parent components (such as naming the desired inner child component from parent folder in importing components)

## Layouts

- must not forget to add NuxtLayouts on app.vue page

- before adding it on the pages <NuxtLayout> must first be defined on the app.vue file (without it, the other layouts cannot be used)

- learned how to use <slot/> in layouts directory (it can be useful in creating reusable components that are customizable)

- definePageMeta - helps define another layout from the default meta layout in a certain component or page. This can only be defined on the pages directory

## Images and Assets

- public folder - public folder is for files that does not need to be processed by a webpack or server. Examples of files that you might put in the public folder include images, fonts, and other assets that don't require any processing.

- assets folder - is for files that needed to be processed by a webpack or server. Some of its examples are stylesheets, images and files that needed to be transformed in some in some manner before using on the app.

- efficient SVG usage - by going to icones.js.org, you can just create an Icon folder in components > icons > SVGComponentName.vue (optional tip, might not apply to every projects)

## Composables 

- This will help us to prevent different declarations. These are usually named with “use” on the beginning of their filenames. It also allows us to encapsulate and to reuse the logic within our application. (VueUse is a useful library that has alot of basic built in methods that can be used in any projects, works with installation and copy paste)


## Middlewares

- When ‘global’ is added on the filename (ex. “auth.global.ts”), the middleware function will be applicable to all of the files in pages directory…if its not (ex. “auth.ts”) then definePageMeta({middleware: “auth”}) must be added on the target page file.

## Plugins

- plugins - (additional specific functionalities)They are usually designed to work with a specific application and cannot be used independently.

- inject - property allows values, data, and functions be available in both the Vue components including lifecycle hooks, templates and methods, as well as in the Nuxt context, which can be accessed in other places such as the asyncData hook within pages, or within additional plugins.

## Modules

- it is a self-contained unit of code that can be used in different applications or systems. These are designed to provide specific set of functionalities and services that can be added on other applications.

## State Management

- which is better? Pinia or useState? useState is better for small and simple apps, while Pinia is good with big and complex apps for wide-variety of features

- methods can be specified by adding it on the file name (ex. app.get.ts, app.post.ts, etc.)


## Server
- the server directory is where nuxt.js allows developers to customize and optimize the server-side rendering process to fit specific requirements 

## SSR and CSR

- SSR is much better for SEO 

- CSR has poor performance and is only known for its JavaScript generated page/application

- hybrid rendering - can use both ssr and csr for better performance and better user experience

## useFetch and useLazyFetch

- **useFetch** (can be used on both ssr and csr) immediately displays the data from the server on the page (which means the data is available as soon the data is rendered), while **useLazyFetch** displays a loader that delays the fetching of data until a certain event occurs or before displaying the data itself when it is needed

## SEO and Meta

- **useHead** - can be used on different pages so that all of then can contain different meta tags. Just ensure to add:
```
<script lang=ts> 
```
- definePageMeta can also be used in defining meta tags and meta titles, but useHead are most usually used

## Lifecycle Hooks

- these allows the developers to run code in some specific points of the components creation, update and destruction.

- some of its examples are create, mounted, updated, and destroyed

- these are usually to perform initialized data, fetching API, or even cleaning up the resources



## CACHE LEVERAGING IN NUXT.JS

This significantly improve the performance of the nuxt application by caching frequently accessed data, such as API responses or computed properties. This can avoid making unnecessary requests, improve the overall speed and responsiveness of the application.

## How Set() object are used in preventing duplicated data in an API



## How to fetch only one [id] inside an API

