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
          loading: this.loading,
          onclick: () => this.hide(),
        }),
        Button.component({
          className: 'Button',
          style: 'float: right;',
          children: app.translator.trans('fajuu-icons.admin.icon_export.copy_button'),
          icon: 'fas fa-copy',
          onclick: () => {
            this.loading = true;

            var copyTextarea = document.querySelector('textarea#iconExport');
            copyTextarea.focus();
            copyTextarea.select();
            try {
              document.execCommand('copy');
              this.loading = false;
              this.alert = Alert.component({
                type: 'success',
                children: app.translator.trans('fajuu-icons.admin.icon_export.copy_success'),
              });
            } catch (err) {
              this.loading = false;
              this.alert = Alert.component({
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