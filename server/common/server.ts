import express from 'express';
import { Application } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import os from 'os';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

export default class ExpressServer {
  app = express();

  constructor() {
    const root = path.normalize(__dirname + '/../..');
    this.app.set('appPath', root + 'client');
    this.app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    this.app.use(bodyParser.urlencoded({ extended: true, limit: process.env.REQUEST_LIMIT || '100kb' }));
    this.app.use(express.static(`${root}/public`));
    const swaggerDocument = YAML.load(`${root}/server/common/api.yml`);
    var options = {
      swaggerOptions: {
        validatorUrl: null
      }
    };
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
  }

  router(routes: (app: Application) => void): ExpressServer {
    routes(this.app)
    return this;
  }

  listen(p: string | number = process.env.PORT): Application {
    const welcome = port => () => console.log(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname() } on port: ${port}}`);
    http.createServer(this.app).listen(p, welcome(p));
    return this.app;
  }
}
