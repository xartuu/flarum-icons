import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';

import IconsPage from './components/IconsPage';

export default function() {
  app.routes.icons = {
    path: '/icons',
    component: IconsPage,
  };

  app.extensionSettings['fajuu-icons'] = () => m.route.set(app.route('icons'));

  extend(AdminNav.prototype, 'items', items => {
    items.add(
      'icons',
      AdminLinkButton.component({
        href: app.route('icons'),
        icon: 'fas fa-icons',
        description: app.translator.trans('fajuu-icons.admin.nav.icons_text'),
      }, app.translator.trans('fajuu-icons.admin.nav.icons_button'))
    );
  });
}
