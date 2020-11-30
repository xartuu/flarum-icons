import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import Switch from 'flarum/components/Switch';

export default class IconItem extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.icon = this.attrs.icon;

    this.elementPath = this.icon.elementPath();
    this.originalIcon = this.icon.originalIcon();
    this.modifiedIcon =this.icon.modifiedIcon();
    this.isActive = this.icon.isActive();
  }

  view() {
    return m('form', [
      Switch.component({
        className: 'Icons-isActive',
        state: this.isActive > 0,
        onchange: this.update('isActive'),
      }),
      m('input.FormControl.Icons-elementPath', {
        type: 'text',
        value: this.elementPath,
        oninput: event => {
          this.update('elementPath')(event.target.value);
        },
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.elementPath'),
      }),
      m('input.FormControl.Icons-originalIcon', {
        type: 'text',
        value: this.originalIcon,
        oninput: event => {
          this.update('originalIcon')(event.target.value);
        },
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.originalIcon'),
      }),
      m('input.FormControl.Icons-modifiedIcon', {
        type: 'text',
        value: this.modifiedIcon,
        oninput: event => {
          this.update('modifiedIcon')(event.target.value);
        },
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.modifiedIcon'),
      }),
      Button.component({
        type: 'button',
        className: 'Button Button--warning Icons-button',
        loading: this.loading,
        icon: 'far fa-trash-alt',
        onclick: this.delete.bind(this),
      }, app.translator.trans('fajuu-icons.admin.edit_icon.delete')),
      m('.Icons-demo', [m('i.icon.' + this.originalIcon + '#original' + this.icon.id()), m('i.icon.fas.fa-random#random' + this.icon.id()), m('i.icon.' + this.modifiedIcon + '#modified' + this.icon.id())]),
    ]);
  }

  update(field) {
    return value => {
      this[field] = value;

      return this.icon
        .save({
          [field]: value,
        })
        .then(() => {
          m.redraw();
        });
    };
  }

  delete() {
    this.loading = true;

    this.icon.delete().then(() => {
      this.loading = false;
      m.redraw();
    });
  }
}
