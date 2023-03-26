// import ImageEditorComponent from '@toast-ui/react-image-editor';
import React from 'react';
// import ImageEditorComponent from './tui-image-editor/';
import ImageEditorComponent from './components/ImageEditorComponent';
import 'tui-image-editor/dist/tui-image-editor.css';
// import './App.css';
function App() {
  const myTheme = {
      // "header.display": "none",
      'menu.normalIcon.color': '#8a8a8a',
      'menu.activeIcon.color': '#555555',
      'menu.disabledIcon.color': '#434343',
      'menu.hoverIcon.color': '#e9e9e9',
      'submenu.normalIcon.color': '#8a8a8a',
      'submenu.activeIcon.color': '#e9e9e9',
   }
  return (
    <div className="App">
      <ImageEditorComponent
      
        includeUI={{
          loadImage: {
            path: '2023-02-26_22-12.png',
            name: 'SampleImage',
          },
          theme: myTheme,
          menu: ['draw','text','shape'],
          initMenu: 'draw',
          uiSize: {
            height: '98vh',
          },
          menuBarPosition: 'bottom',
        }}
        cssMaxHeight={720}
        cssMaxWidth={980}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={false}
      />

    </div>
  );
}

export default App;
