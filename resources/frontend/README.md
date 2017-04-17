# scam-alert
> An open source scam registration platform.

## Documentation
This application is based on the Vue Webpack template.
More information about this template can be found [here](http://vuejs-templates.github.io/webpack/).

## Technologies used ##
This following technologies are used in this example:
 - [Vue](https://github.com/vuejs/vue)
 - [Vue Loader](https://github.com/vuejs/vue-loader)
 - [Vue Router](https://github.com/vuejs/vue-router)
 - [Vuex](https://github.com/vuejs/vuex)
 - [Vue i18n](https://github.com/kazupon/vue-i18n)
 - [Axios](https://github.com/mzabriskie/axios)
 - [Laravel Echo](https://github.com/laravel/echo)

## Configuration ##
For the configuration of the application, you need to make sure that 
the correct environment settings are being used.

### Config-files ###
Inside the `config/*.env.js`-files, you can configure your environment variables.
Out of the box the applications comes bundled with AJAX- and Pusher-support.
The only thing you need to do is change the following environment variables to your settings:
 - `API_LOCATION`
 - `PUSHER_KEY`
 - `PUSHER_CLUSTER`

## Getting up and running ##

### Install the dependencies ###
Make sure the dependencies are correctly installed by running
```bash
$ npm install
```
or if you are using Yarn, run:
```bash
$ yarn
```

### Building the application ###
You can start the build process by simply typing
```bash
$ npm run build
```
or again if you are using Yarn, run:
```bash
$ yarn run build
```

### Developing the application ###
You can start the development server by simply typing
```bash
$ npm run dev
```
or again if you are using Yarn, run:
```bash
$ yarn run dev
```
 
## Project Structure ##
``` bash
.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── App.vue                 # main app component
│   ├── bootstrap.js            # bootstraps the modules used
│   ├── main.js                 # app entry file
│   ├── components/             # ui components
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
│   └── layouts/                # layout used for sharing components
│       └── ...
│   └── locale/                 # localization for the application
│       └── ...
│   └── mixins/                 # mixins used to extend custom Vue components
│       └── ...
│   └── models/                 # models used to add computed properties
│       └── ...
│   └── pages/                  # pages being used by the application
│       └── ...
│   └── proxies/                # proxies used to perform AJAX-requests
│       └── ...
│   └── routes/                 # routes being used by the application
│       └── ...
│   └── store/                  # Vuex store being used by the application
│       └── ...
│   └── transformers/           # transfomers to transform the incomming and outgoing data
│       └── ...
│   └── utils/                  # utilities to expand behaviour of JavaScript files
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .editorconfig               # editor config
├── .eslintrc.js                # eslint config
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies
```

## License ##
The MIT License (MIT)

Copyright (c) 2017 Peter van Meijgaard

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
