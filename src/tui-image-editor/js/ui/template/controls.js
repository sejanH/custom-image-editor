import { getHelpMenuBarPosition } from '../../../js/util';
const controls = ({ locale, biImage, loadButtonStyle, downloadButtonStyle, menuBarPosition }) => `
<ul class="tui-image-editor-help-menu ${getHelpMenuBarPosition(menuBarPosition)}"></ul>
<div class="tui-image-editor-controls">
    
    <ul class="tui-image-editor-menu"></ul>

    <div class="tui-image-editor-controls-buttons">
        <div style="${loadButtonStyle}">
            ${locale.localize('Load')}
            <input type="file" class="tui-image-editor-load-btn" />
        </div>
        <button class="tui-image-editor-download-btn" style="${downloadButtonStyle}">
            ${locale.localize('Download')}
        </button>
    </div>
</div>
`;
export default controls;
