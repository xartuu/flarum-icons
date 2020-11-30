import Component from 'flarum/Component';
import Button from 'flarum/components/Button';

export default class IconCreate extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.icon = app.store.createRecord('icons');

    this.id = 0;
    this.elementPath = '';
    this.originalIcon = 'fas fa-baby';
    this.modifiedIcon = 'fas fa-child';
  }

  view() {
    return m('form', [
      m('input.FormControl.Icons-elementPath', {
        type: 'text',
        value: this.elementPath,
        oninput: event => {
          this.elementPath = event.target.value;
        },
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.elementPath'),
      }),
      Button.component({
        type: 'button',
        className: 'Button Button--warning Icons-button',
        icon: 'fas fa-plus',
        loading: this.loading,
        onclick: this.create.bind(this),
      }, app.translator.trans('fajuu-icons.admin.edit_icon.create')),
      m('input.FormControl.Icons-originalIcon', {
        type: 'text',
        value: this.originalIcon,
        oninput: event => {
          this.originalIcon = event.target.value;
        },
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.originalIcon'),
      }),
      m('input.FormControl.Icons-modifiedIcon', {
        type: 'text',
        value: this.modifiedIcon,
        oninput: event => {
          this.modifiedIcon = event.target.value;
        },
        placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.modifiedIcon'),
      }),
      m('.Icons-demo', [m('i.icon.' + this.originalIcon + '#original' + this.id), m('i.icon.fas.fa-random#random' + this.id), m('i.icon.' + this.modifiedIcon + '#modified' + this.id)]),
    ]);
  }

  create() {
    this.loading = true;

    this.icon
      .save({
        elementPath: this.elementPath,
        originalIcon: this.originalIcon,
        modifiedIcon: this.modifiedIcon,
      })
      .then(() => {
        this.loading = false;
        this.id = 0;
        this.elementPath = null;
        this.originalIcon = 'fas fa-baby';
        this.modifiedIcon = 'fas fa-child';
        m.redraw();
      })
      .catch(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
