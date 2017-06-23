import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.dev';

import mongoose from 'mongoose';

import User from './models/User';
import Paper from './models/Paper';

import auth from './api/auth';
import papers from './api/papers';

const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackHotMiddleware(compiler));

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

// app.use(webpackMiddleware(compiler));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/conference');

mongoose.connection.once('open', function(){
    console.log('MongoDB Connected');
}).on('error', function(error){
    console.log('MongoDB Connection error:', error);
});

// const user = new User({username: 'pattine', password: 'puscapatina'});
// user.save().then(function() {
//   console.log('Saved a user in db.');
// })

// const paper = new Paper({firstGrader: 'gigi', secondGrader: 'oroboro', firstGrade: 7, secondGrade: 8})
// paper.save().then(() => {
//     console.log("saved paper in db!");
// })
// app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const router = express.Router();

app.use('/api/auth', auth);
app.use('/api/papers', papers);

router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html')); 
});
app.use(router);


module.exports = app;
