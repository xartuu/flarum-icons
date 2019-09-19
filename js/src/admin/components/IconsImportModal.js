import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import Alert from 'flarum/components/Alert';

import {
  default as icons
} from '../../../../resources/icons.json';

export default class IconsImportModal extends Modal {

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++)
      if ((new Date().getTime() - start) > milliseconds)
        break;
  }

  isJson(text) {
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

  constructor() {
    super();
    this.icons = m.prop(null);

    this.alert = new Alert({
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
          className: 'Button Button--primary',
          children: app.translator.trans('fajuu-icons.admin.icon_import.import_button'),
          onclick: () => {
            if (this.isJson(this.icons())) {
              app.store.all('icons').map(icon => {
                icon.delete();
              });
              this.sleep(2000);
              JSON.parse(this.icons()).map(icon => {
                app.store.createRecord('icons').save(icon);
              });
              this.sleep(2000);
              window.location.reload(true);
            } else {
              this.alert = new Alert({
                type: 'error',
                children: app.translator.trans('fajuu-icons.admin.icon_import.not_json'),
              });
            }
          },
        }),
        Button.component({
          className: 'Button',
          icon: 'fas fa-trash-restore',
          style: 'float: right;',
          children: app.translator.trans('fajuu-icons.admin.icon_import.restore_button'),
          onclick: () => {
            app.store.all('icons').map(icon => {
              icon.delete();
            });
            this.sleep(1000);
            icons.map(icon => {
              app.store.createRecord('icons').save(icon);
            });
            this.sleep(1000);
            window.location.reload(true);
          },
        }),
      ]),
    ]);
  }
}