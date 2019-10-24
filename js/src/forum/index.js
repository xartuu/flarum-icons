import app from 'flarum/app';
import { extend } from 'flarum/extend';
import Page from 'flarum/components/Page';

import Icon from '../common/models/Icon';

app.initializers.add('fajuu-icons', app => {
  app.store.models.icons = Icon;

  if (window.FontAwesomeKitConfig)
    extend(Page.prototype, 'config', function(isInitialized) {
      if (isInitialized) return;

      app.store.all('icons').map(icon => {
        if (icon.isActive()) {
          document.querySelectorAll(icon.elementPath()).forEach(e => {
            var regex = new RegExp(icon.originalIcon(), 'g');
            if (e) e.setAttribute('class', e.getAttribute('class').replace(regex, icon.modifiedIcon()));
          });
        }
      });
    });
});
