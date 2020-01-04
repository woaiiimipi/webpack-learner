# webpack-learner
## webpack install
```
npm init
npm i webpack webpack-cli -D
```
## package
- create *src*
- create *src/index.js*
-     npx webpack

default package path: **dist/main.js**
## config webpack
- create webpack.config.js
``` js
module.exports = {
  entry: 
}
```
## custom webpack file name
- add script *"build": "webpack --config webpack.config.dev.js"*

## add dev server
```
npm i webpack-dev-server
```
-     npx webpack-dev-server // will pack a virtual build in rom and start a server
- config devServer