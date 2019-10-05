import Page from 'flarum/components/Page';
import Button from 'flarum/components/Button';

import IconCreate from './IconCreate';
import IconItem from './IconItem';
import IconSettingsModal from './IconSettingsModal';
import IconsExportModal from './IconsExportModal';
import IconsImportModal from './IconsImportModal';

export default class IconsPage extends Page {

  config() {
    if (!window.FontAwesomeKitConfig)
      setTimeout(function () {
        return app.modal.show(new IconSettingsModal())
      }, 500);
  }

  view() {
    return m('.IconsPage', [
      m('.IconsPage-header', [
        m('.container', [
          m('p', app.translator.trans('fajuu-icons.admin.icons.about_icons_text', {
            a: < a href = "https://fontawesome.com"
            target = "_blank" / >
          })),
          Button.component({
            className: 'Button Button--primary',
            icon: 'fas fa-list-ul',
            children: app.translator.trans('fajuu-icons.admin.icons.list_icons_button'),
            onclick: () => window.open("https://fontawesome.com/icons", '_blank'),
          }),
          Button.component({
            className: 'Button',
            icon: 'fas fa-upload',
            children: app.translator.trans('fajuu-icons.admin.icons.import_icons_button'),
            onclick: () => app.modal.show(new IconsImportModal()),
          }),
          Button.component({
            className: 'Button',
            icon: 'fas fa-download',
            children: app.translator.trans('fajuu-icons.admin.icons.export_icons_button'),
            onclick: () => app.modal.show(new IconsExportModal()),
          }),
        ]),
      ]),
      m('.IconsPage-main', [
        m('.container', [
          m('.IconCreate', IconCreate.component()),
          m('.IconList', app.store.all('icons').map(icon => {
            return m(".IconItem", {
              key: icon.id(),
              'data-id': icon.id(),
            }, IconItem.component({
              icon
            }));
          })),
        ]),
      ]),
    ]);
  }
}