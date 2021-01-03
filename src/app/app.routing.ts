import { Routes, RouterModule } from '@angular/router';
import {AppHomeComponent } from './app-home/app-home.component';
import {AppPreprocessComponent} from './app-preprocess/app-preprocess.component';
import {AppMlmodelsComponent} from './app-mlmodels/app-mlmodels.component';

const appRoutes: Routes = [
  {
    path: 'home', component: AppHomeComponent
  },
  {
    path: 'preprocess', component: AppPreprocessComponent
  },
  {
    path: 'models', component: AppMlmodelsComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);

