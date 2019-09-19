import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import Alert from 'flarum/components/Alert';

export default class IconsExportModal extends Modal {

  isDismissible() {
    return false;
  }

  title() {
    return app.translator.trans('fajuu-icons.admin.icon_export.title');
  }

  content() {
    return m('.Modal-body', [
      m('.Form-group', [
        m('textarea.FormControl#iconExport', {
          readonly: true,
          rows: 15,
          value: JSON.stringify(app.store.all('icons').map(icon => {
            return icon.data.attributes;
          }))
        }),
      ]),
      m('.Form-group', [
        Button.component({
          className: 'Button Button--primary',
          children: app.translator.trans('fajuu-icons.admin.icon_export.close_button'),
          onclick: () => this.hide(),
        }),
        Button.component({
          className: 'Button',
          icon: 'fas fa-copy',
          style: 'float: right;',
          children: app.translator.trans('fajuu-icons.admin.icon_export.copy_button'),
          onclick: () => {
            var copyTextarea = document.querySelector('textarea#iconExport');
            copyTextarea.focus();
            copyTextarea.select();
            try {
              document.execCommand('copy');
              this.alert = new Alert({
                type: 'success',
                children: app.translator.trans('fajuu-icons.admin.icon_export.copy_success'),
              });
            } catch (err) {
              this.alert = new Alert({
                type: 'error',
                children: app.translator.trans('fajuu-icons.admin.icon_export.copy_error'),
              });
            }
          },
        }),
      ]),
    ]);
  }
}