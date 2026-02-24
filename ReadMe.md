## This the webpack react based project

##### i have use some command terminal
React + Webpack Notes (Simple Version step for creation )
1️⃣ Create Project
mkdir react-webpack-project
cd react-webpack-project
npm init -y

Creates folder and package.json.

2️⃣ Install React
npm install react react-dom

Adds React library and DOM rendering.

3️⃣ Install Webpack + Babel
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react

Webpack bundles code.

Babel compiles JSX + modern JS.

4️⃣ Install HTML Plugin
npm install --save-dev html-webpack-plugin

Generates HTML with bundled JS automatically.

5️⃣ Project Structure
/src
  index.js
  App.js
/public
  index.html
webpack.config.js
.babelrc
package.json
6️⃣ Babel Config (.babelrc)
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

Converts JSX → JS

Converts modern JS → browser JS.

7️⃣ Webpack Config (webpack.config.js)

Entry point: src/index.js

Output: dist/bundle.js

Loader: babel-loader for .js/.jsx

Plugins: HtmlWebpackPlugin

DevServer: runs localhost:3000 with hot reload

8️⃣ HTML Template (public/index.html)
<div id="root"></div>

React mounts here.

9️⃣ React Components

src/App.js:

const App = () => <h1>Hello React!</h1>
export default App;

src/index.js:

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
🔟 NPM Scripts
"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode production"
}

npm start → dev server

npm run build → production build

## Here is the bash that contains all step 

```bash
  run `npm fund` for details

found 0 vulnerabilities
PS D:\newCodeRelated\react-webpack-project> npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react

added 131 packages, and audited 470 packages in 27s

86 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS D:\newCodeRelated\react-webpack-project> npm install --save-dev html-webpack-plugin

added 30 packages, and audited 500 packages in 25s

96 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS D:\newCodeRelated\react-webpack-project> npm start

> 
PS D:\newCodeRelated\react-webpack-project> 
```bash