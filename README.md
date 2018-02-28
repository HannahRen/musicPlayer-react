# react-music-player
music player build with React

### how to run

**start**
```shell
npm start
```

**build**
```shell
npm run build
```


modify `entry` in `webpack.config.js`

take `Router` as an example
```javascript
entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, 'app/router/index.js')
],
```
