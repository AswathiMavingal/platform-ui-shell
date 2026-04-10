// import('./bootstrap').catch((err) => console.error(err));

import {loadManifest } from '@angular-architects/module-federation';

loadManifest('/mf.manifest.json')
  .then(() => import('./bootstrap'))
  .catch((err) => console.error('Error loading remote entry', err));
