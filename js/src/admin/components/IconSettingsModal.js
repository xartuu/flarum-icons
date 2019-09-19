import SettingsModal from 'flarum/components/SettingsModal';

export default class IconSettingsModal extends SettingsModal {

  isDismissible() {
    return false;
  }

  onhide() {
    window.location.reload(true);
  }

  className() {
    return 'IconSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('fajuu-icons.admin.icon_settings.title');
  }

  form() {
    return m('.Modal-body', [
      m('.Form-group', [
        m('label', app.translator.trans('fajuu-icons.admin.icon_settings.key_heading')),
        m('.helpText', app.translator.trans('fajuu-icons.admin.icon_settings.key_text', {
          a: <a href = "https://fontawesome.com/start"
          target = "_blank" />
        })),
        m('input.FormControl', {
          required: true,
          type: 'text',
          minlength: '10',
          maxlength: '10',
          bidi: this.setting('fajuu-icons.key')
        }),
      ])
    ]);
  }
}