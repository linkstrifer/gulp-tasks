# Gulp-tasks

This is a group of common gulp tasks that i use in my projects. If you have other tasks or know how to improve this, let me know.

My twitter profile is [@LinkStrifer](https://twitter.com/LinkStrifer "Twitter") 

## Installation

Just clone and run `npm install`.

## Task list

- [Default task](#defaut-task)
- [Autoreload-gulp task](#autoreload-gulp)
- [Browser-sync task](#browser-sync)
- [Dev task](#dev)
- [Sass task](#sass)
- [HTML task](#html)

### Default task

For convienience, the default task run `autoreload-gulp`. For more details check [Autoreload-gulp](#autoreload-gulp) task documentation.

### Autoreload-gulp

This task will autoreload gulp on every change in the tasks files. It accept one parameter, the task name that you want to run with the flag -t or --task

i.e:

*If you want to run the dev task, you can do it typing this in the console:*

	gulp autoreload-gulp -t dev

*Or:*

	gulp autoreload-gulp --task dev

### Browser-sync

I'm a frontend developer, so i expend a lot of time testing in the browser, i have to reload the page every time i change a file (html, js or css) to test the new changes, [@LeonidasEsteban](https://twitter.com/leonidasesteban "Leonidas Esteban") show me LiveReload and my life change.

A while ago i found `browser-sync`, a library that does all that LiveReload do and more, its really amazing, specially for test in multiple devices.

Here is a list of Features that i love:

- Reload files in the browser after change them, is really usefull for develop a site without reload everytime, you will love it.
- Create a external url to access from other devices.
- Has ghost mode, you can open as many tabs you want of the site, if you do something in one, the others also do, scroll, clicks, submit formsor change inputs, everything will ghost.
- Also has remote debugging.
- And a UI with all these options, for default is in the port 3001, so run the task and check it out.

You can run the task with typing this in the console:

	gulp browser-sync:dev

And the magic happens. This would open localhost:3002 with the default browser.

##### Config

`browser-sync` has some config, here is the basic that is in `gulp/config.js`, you can check the documentation of [`browser-sync`](http://www.browsersync.io/docs/options/) for more information.

### Dev

This is the task that i use when i'm developing a site.

You can run this task alone or using autoreload-gulp.

*If you only want to run once, type this in the console*

	gulp dev

*If you want to use autoreload-gulp, just type this*

	gulp -t dev

*Or*

	gulp --task dev

Here is a list of the running tasks when you run dev:

- [Browser-sync](#browser-sync)
- [Sass](#sass)


Then, watch some files and run an appropiate task:

- Run `sass` task if the changed file extension is `.scss` in the folder `paths.base` in `gulp/config.js`.
- Run `html` task if the changed file extension is `.html` in the folder `paths.base` in `gulp/config.js`.

### Sass

If you use sass, this is for you, it get all the .scss files and compile using sass, then reload the browser with the new .css.

### Config

In the `gulp/config.js` file is the sass config.

The source files are in `paths.sass` in `gulp/config.js` and the destination folder is in `paths.styles` in `gulp/config/js`.

### HTML

This does not do much. Only reload the browser if a .html file has changed.