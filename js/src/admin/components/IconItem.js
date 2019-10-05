import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import Switch from 'flarum/components/Switch';

import IconDemo from '../helpers/IconDemo';

export default class IconItem extends Component {

  init() {
    super.init();

    this.icon = this.props.icon;

    this.id = m.prop(this.icon.id());
    this.elementPath = m.prop(this.icon.elementPath());
    this.originalIcon = m.prop(this.icon.originalIcon());
    this.modifiedIcon = m.prop(this.icon.modifiedIcon());
    this.isActive = m.prop(this.icon.isActive());
  }

  view() {
    return m('form', [
      Switch.component({
        className: 'Icons-isActive',
        state: this.isActive() > 0,
        onchange: this.update('isActive'),
      }),
      m('input.FormControl.Icons-elementPath', {
        type: 'text',
        value: this.elementPath(),
        oninput: m.withAttr('value', this.update('elementPath')),
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.elementPath'),
      }),
      m('input.FormControl.Icons-originalIcon', {
        type: 'text',
        value: this.originalIcon(),
        oninput: m.withAttr('value', this.update('originalIcon'), IconDemo('o', this)),
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.originalIcon'),
      }),
      m('input.FormControl.Icons-modifiedIcon', {
        type: 'text',
        value: this.modifiedIcon(),
        oninput: m.withAttr('value', this.update('modifiedIcon'), IconDemo('m', this)),
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.modifiedIcon'),
      }),
      Button.component({
        type: 'button',
        className: 'Button Button--warning Icons-button',
        children: app.translator.trans('fajuu-icons.admin.edit_icon.delete'),
        loading: this.loading,
        icon: 'far fa-trash-alt',
        onclick: this.delete.bind(this),
      }),
      m('span', {
        style: 'margin-left: 10px;',
      }),
      m('icon#o' + this.id(), [
        m('i.Icons-demo.' + this.originalIcon()),
      ]),
      m('icon#r' + this.id(), [
        m('i.Icons-random.fas.fa-random'),
      ]),
      m('icon#m' + this.id(), [
        m('i.Icons-demo.' + this.modifiedIcon()),
      ]),
    ]);
  }

  update(field) {
    return value => {
      this[field](value);

      return this.icon
        .save({
          [field]: value,
        })
        .then(() => {
          m.lazyRedraw();
        });
    };
  }

  delete() {
    this.loading = true;

    this.icon.delete().then(() => {
      this.loading = false;
      m.lazyRedraw();
    });
  }

}