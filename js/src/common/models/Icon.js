import Model from 'flarum/Model';

export default class Icon extends Model {
  elementPath = Model.attribute('elementPath');
  originalIcon = Model.attribute('originalIcon');
  modifiedIcon = Model.attribute('modifiedIcon');
  isActive = Model.attribute('isActive', Boolean);
}
