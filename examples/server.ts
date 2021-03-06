import express from 'express';
import webpack from 'webpack';
import WebpackConfig from './webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import  webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const compiler = webpack(WebpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/'
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.use(router);

const port = process.env.PORT || 9000;
const server = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`);
});

export default server;
