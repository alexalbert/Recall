import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import AppRouterConfig from 'app_router_config';
import HttpClientConfig from 'paulvanbladel/aurelia-auth/app.httpClient.config';
@inject(Router,HttpClientConfig,AppRouterConfig )
export class App {

  constructor(router, httpClientConfig, appRouterConfig){
    this.router = router;
    this.httpClientConfig = httpClientConfig;
    this.appRouterConfig = appRouterConfig;
  }

  activate(){

    this.httpClientConfig.configure();
    this.appRouterConfig.configure();
  }
}
