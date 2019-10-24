import Component from 'flarum/Component';
import Button from 'flarum/components/Button';

import IconDemo from '../helpers/IconDemo';

export default class IconCreate extends Component {
  init() {
    super.init();

    this.icon = app.store.createRecord('icons');

    this.id = m.prop(0);
    this.elementPath = m.prop('');
    this.originalIcon = m.prop('fas fa-baby');
    this.modifiedIcon = m.prop('fas fa-child');
  }

  view() {
    return m('form', [
      m('input.FormControl.Icons-elementPath', {
        type: 'text',
        value: this.elementPath(),
        oninput: m.withAttr('value', this.elementPath),
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.elementPath'),
      }),
      Button.component({
        type: 'button',
        className: 'Button Button--warning Icons-button',
        children: app.translator.trans('fajuu-icons.admin.edit_icon.create'),
        icon: 'fas fa-plus',
        loading: this.loading,
        onclick: this.create.bind(this),
      }),
      m('input.FormControl.Icons-originalIcon', {
        type: 'text',
        value: this.originalIcon(),
        oninput: m.withAttr('value', this.originalIcon, IconDemo('original', this)),
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.originalIcon'),
      }),
      m('input.FormControl.Icons-modifiedIcon', {
        type: 'text',
        value: this.modifiedIcon(),
        oninput: m.withAttr('value', this.modifiedIcon, IconDemo('modified', this)),
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.modifiedIcon'),
      }),
      m('.Icons-demo', [m('i.icon.' + this.originalIcon() + '#original' + this.id()), m('i.icon.fas.fa-random#random' + this.id()), m('i.icon.' + this.modifiedIcon() + '#modified' + this.id())]),
    ]);
  }

  create() {
    this.loading = true;

    this.icon
      .save({
        elementPath: this.elementPath(),
        originalIcon: this.originalIcon(),
        modifiedIcon: this.modifiedIcon(),
      })
      .then(() => {
        this.loading = false;
        this.id(0);
        this.elementPath(null);
        this.originalIcon('fas fa-baby');
        this.modifiedIcon('fas fa-child');
        m.redraw();
      })
      .catch(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
