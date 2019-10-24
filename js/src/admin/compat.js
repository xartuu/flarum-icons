import compat from '../common/compat';

import IconCreate from './components/IconCreate';
import IconItem from './components/IconItem';
import IconSettingsModal from './components/IconSettingsModal';
import IconsExportModal from './components/IconsExportModal';
import IconsImportModal from './components/IconsImportModal';
import IconsPage from './components/IconsPage';
import IconDemo from './helpers/IconDemo';
import addIconsPane from './addIconsPane';

export default Object.assign(compat, {
  'icons/components/IconCreate': IconCreate,
  'icons/components/IconItem': IconItem,
  'icons/components/IconSettingsModal': IconSettingsModal,
  'icons/components/IconsExportModal': IconsExportModal,
  'icons/components/IconsImportModal': IconsImportModal,
  'icons/components/IconsPage': IconsPage,
  'icons/helpers/IconDemo': IconDemo,
  'icons/addIconsPane': addIconsPane,
});
