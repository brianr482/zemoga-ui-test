# zemoga-ui-test
## Live demo
I deployed the application on Firebase Hosting, so you can check it [here](https://layout-test-zemoga.web.app)

## Structure
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

**Note**: I used a live server that compiled my sass files into a css file. So that's the reason you're going to find a global css files in the styles
