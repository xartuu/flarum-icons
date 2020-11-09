import app from 'flarum/app';
import { extend } from 'flarum/extend';
import Page from 'flarum/components/Page';

import Icon from '../common/models/Icon';

function replaceIconsInDom() {
  app.store.all('icons').forEach(icon => {
    if (!icon.isActive()) {
      return;
    }

    document.querySelectorAll(icon.elementPath()).forEach(element => {
      if (!element || element.dataset.iconReplaced) {
        return;
      }

      // Because we run this code on every redraw, we will skip replacing the already-replaced icons
      element.dataset.iconReplaced = '1';

      const regex = new RegExp(icon.originalIcon(), 'g');
      element.setAttribute('class', element.getAttribute('class').replace(regex, icon.modifiedIcon()));
    });
  });
}

app.initializers.add('fajuu-icons', app => {
  app.store.models.icons = Icon;

  if (window.FontAwesomeKitConfig) {
    extend(Page.prototype, 'oncreate', replaceIconsInDom);

    // This solution is impacted by https://github.com/flarum/core/issues/2446
    extend(Page.prototype, 'onupdate', replaceIconsInDom);
  }
});
