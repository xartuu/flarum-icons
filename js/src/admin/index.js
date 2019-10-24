import Icon from '../common/models/Icon';

import addIconsPane from './addIconsPane';

app.initializers.add('fajuu-icons', app => {
  app.store.models.icons = Icon;

  addIconsPane();
});

// Expose compat API
import iconsCompat from './compat';
import { compat } from '@flarum/core/admin';

Object.assign(compat, iconsCompat);
