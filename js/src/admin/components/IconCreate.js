import Component from 'flarum/Component';
import Button from 'flarum/components/Button';

import IconDemo from '../helpers/IconDemo';

export default class IconCreate extends Component {

  init() {
    this.newIcon = {
      id: m.prop(0),
      elementPath: m.prop(null),
      originalIcon: m.prop('fas fa-baby'),
      modifiedIcon: m.prop('fas fa-child'),
    };
  }

  view() {
    return m('.IconCreate', [
      m('input.FormControl.Icons-elementPath', {
        type: 'text',
        value: this.newIcon.elementPath(),
        oninput: m.withAttr('value', this.newIcon.elementPath),
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.elementPath'),
      }),
      Button.component({
        type: 'button',
        className: 'Button Button--warning Icons-button',
        icon: 'fa fa-plus',
        onclick: this.create.bind(this),
      }),
      m('input.FormControl.Icons-originalIcon', {
        type: 'text',
        value: this.newIcon.originalIcon(),
        oninput: m.withAttr('value', this.newIcon.originalIcon, IconDemo('o', this.newIcon)),
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.originalIcon'),
      }),
      m('input.FormControl.Icons-modifiedIcon', {
        type: 'text',
        value: this.newIcon.modifiedIcon(),
        oninput: m.withAttr('value', this.newIcon.modifiedIcon, IconDemo('m', this.newIcon)),
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.modifiedIcon'),
      }),
      m('span', {
        style: 'margin-left: 10px;',
      }),
      m('icon#o' + this.newIcon.id(), [
        m('i.Icons-demo.' + this.newIcon.originalIcon()),
      ]),
      m('icon#r' + this.newIcon.id(), [
        m('i.Icons-random.fas.fa-random'),
      ]),
      m('icon#m' + this.newIcon.id(), [
        m('i.Icons-demo.' + this.newIcon.modifiedIcon()),
      ]),
    ]);
  }


  create() {
    return app.store
      .createRecord('icons')
      .save({
        elementPath: this.newIcon.elementPath(),
        originalIcon: this.newIcon.originalIcon(),
        modifiedIcon: this.newIcon.modifiedIcon(),
      })
      .then(() => {
        this.newIcon.elementPath(null);
        this.newIcon.originalIcon('fas fa-baby');
        this.newIcon.modifiedIcon('fas fa-child');
        m.redraw();
      })
      .catch(() => {
        m.redraw();
      });
  }
}