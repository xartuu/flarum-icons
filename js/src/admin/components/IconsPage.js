import Page from 'flarum/components/Page';
import Button from 'flarum/components/Button';

import IconCreate from './IconCreate';
import IconItem from './IconItem';
import IconSettingsModal from './IconSettingsModal';
import IconsExportModal from './IconsExportModal';
import IconsImportModal from './IconsImportModal';

export default class IconsPage extends Page {
  oncreate(vnode) {
    super.oncreate(vnode);

    if (!window.FontAwesomeKitConfig)
      setTimeout(function() {
        return app.modal.show(IconSettingsModal);
      }, 500);
  }

  view() {
    return m('.IconsPage', [
      m('.IconsPage-header', [
        m('.container', [
          m(
            'p',
            app.translator.trans('fajuu-icons.admin.icons.about_icons_text', {
              a: <a href="https://fontawesome.com" target="_blank" />,
            })
          ),
          Button.component({
            className: 'Button Button--primary',
            icon: 'fas fa-list-ul',
            onclick: () => window.open('https://fontawesome.com/icons', '_blank'),
          }, app.translator.trans('fajuu-icons.admin.icons.list_icons_button')),
          Button.component({
            className: 'Button',
            icon: 'fas fa-upload',
            onclick: () => app.modal.show(IconsImportModal),
          }, app.translator.trans('fajuu-icons.admin.icons.import_icons_button')),
          Button.component({
            className: 'Button',
            icon: 'fas fa-download',
            onclick: () => app.modal.show(IconsExportModal),
          }, app.translator.trans('fajuu-icons.admin.icons.export_icons_button')),
        ]),
      ]),
      m('.IconsPage-main', [
        m('.container', [
          m('.IconCreate', IconCreate.component()),
          m(
            '.IconList',
            app.store.all('icons').map(icon => {
              return m(
                '.IconItem',
                {
                  key: icon.id(),
                  'data-id': icon.id(),
                },
                IconItem.component({
                  icon,
                })
              );
            })
          ),
        ]),
      ]),
    ]);
  }
}
