1. Create folder SCSS
2. Create main.scss 
3. Install package.json - npm init
4. Intsall Sass - npm i node-sass 
5. Add this in package.json file:
"scripts": {
    "RunSass": "node-sass -w scss/ -o dist/css/ --recursive"
  },
6. npm run RunSass