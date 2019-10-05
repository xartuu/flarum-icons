import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import Alert from 'flarum/components/Alert';

import {
  default as icons
} from '../../../../resources/icons.json';

export default class IconsImportModal extends Modal {

  import(i) {
    this.loading = true;

    if (!app.store.all('icons')[0]) {
      i.map(icon => {
        app.store.createRecord('icons').save(icon).then(() => m.redraw());
      });

      this.loading = false;
      this.hide();
    }

    app.store.all('icons').map(icon => {
      icon.delete().then(() => {
        m.redraw();
        if (!app.store.all('icons')[0]) {

          i.map(icon => {
            app.store.createRecord('icons').save(icon).then(() => m.redraw());
          });

          this.loading = false;
          this.hide();
        }
      });
    });
  }

  constructor() {
    super();
    this.icons = m.prop(null);

    this.alert = Alert.component({
      type: 'info',
      children: app.translator.trans('fajuu-icons.admin.icon_import.about'),
    });
  }

  title() {
    return app.translator.trans('fajuu-icons.admin.icon_import.title');
  }

  content() {
    return m('.Modal-body', [
      m('.Form-group', [
        m('textarea.FormControl', {
          required: true,
          type: 'text',
          rows: 15,
          oninput: m.withAttr('value', this.icons),
        }),
      ]),
      m('.Form-group', [
        Button.component({
          loading: this.loading,
          className: 'Button Button--primary',
          children: app.translator.trans('fajuu-icons.admin.icon_import.import_button'),
          onclick: () => {
            function isJson(text) {
              try {
                if (typeof text !== 'string') {
                  return false;
                } else {
                  JSON.parse(text);
                  return true;
                }
              } catch (error) {
                return false;
              }
            }

            if (isJson(this.icons())) this.import(JSON.parse(this.icons()));
            else this.alert = Alert.component({
              type: 'error',
              children: app.translator.trans('fajuu-icons.admin.icon_import.not_json'),
            });
          },
        }),
        Button.component({
          className: 'Button',
          style: 'float: right;',
          icon: 'fas fa-trash-restore',
          children: app.translator.trans('fajuu-icons.admin.icon_import.restore_button'),
          onclick: () => this.import(icons),
        }),
      ]),
    ]);
  }
}