# zemoga-ui-test
## Live demo
I deployed the application on Firebase Hosting, so you can check it [here](https://interactive-test-zemoga.web.app)

## Structure
## Core module

We should place here those services we are going to use in whole the application so we just need one instance of them. Also, interceptors and global should be here.

## Shared module

Place here components, directives, pipes and interfaces that we could use in whatever part of your application. This is in order to apply the DRY principle.

**Note**:
Creating interfaces help us to define the structure of the data you're going to be handling.

## Global aliases

I created some alias that we can use in whatever part of your application and will make your code more readable:
If you want import core module, refer to the src path or something there you just have to type @core and it will refer the top core folder. You can do the same with shared module.

**Note**:
I defined this in tsconfig file.

## Easily main sass files referencing

I defined src/styles as an extra path for sass imports checks so if we want to import some sass file of top styles folder we just have to type the path of the file relative to styles folder. For example, `@import "abstracts/variables";`.

## Demo server

Run `ng serve` and navigate to `http://localhost:4200/`.

The app will automatically reload if you change any of the source files.

## Production build
Run `ng build --prod`. You will get the compiled project in the following path: `project-folder/dist/zemoga-ui-test`.

**Note**:
If you are not going to deploy the project in root path `/`, you should consider adding the following flags:
  - `--base-href=your-path`
  - `--deploy-url=your-path`
  
### 7 - 1 Sass pattern
I implemented the 7 - 1 Sass pattern in order to make this project more scalable and easier to read. So you'll find this structure on `assets/styles` with the following partials:
- functions (Implement the functions here)
- helpers (Any util classes)
- mixins (Implement the mixins you're going to use)
- variables (Store all the main variables here)
- base (Settings about the base of the HTML)
- reset (Removing or updating some attributes of the main directives)
- typography (Load fonts here)
- And the components (Create the styles for the components of the project here)

### BEM - BLOCK ELEMENT MODIFIER
I used the BEM methodology in order to make the css maintanble and structured. You can found the guidelines (here)[http://getbem.com/naming/]

## Optimization
### Assets
- I used TinyPNG to optimize the JPG/PNG images
- I used ImageOptim to optimize the svg files

## Icons
I used Glyphter to create a font with the svg icons I'd use in the project. The goal was to make the use of this icons easier.

## Other
I loaded the fonts locally because there are some cases we need to use a font that is not hosted on Google servers, so we could need to host it on our own server

**Note**: I implemented a modular template for Angular projects that I usually use in complex projects and I used it here in order to share with you one of my contributions to the open source community. You can check the repo [here](https://github.com/brianr482/ng-modular-template/)

## To do
- Test: I probably handle this part of the project with Cypress and Percy. I think we can build a good tests with these tools together.
