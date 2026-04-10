import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
    path: 'products',
    // loadChildren: () =>
    //   loadRemoteModule({
    //     type: 'module',
    //     remoteEntry: 'http://localhost:4201/remoteEntry.js',
    //     exposedModule: './Routes',
    //   }).then(m => m.routes)
    //   .catch(err => {
    //     console.error('Error loading remote', err);
    // }),
    loadChildren: () => 
        loadRemoteModule({
            type: 'manifest',
            remoteName: 'products',
            exposedModule: './Routes'
        }).then(m => m.routes)
        .catch(err => {
            console.error('Error loading remote', err); 
        })
  }
];
