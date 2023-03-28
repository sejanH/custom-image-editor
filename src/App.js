import React from 'react';
import ImageEditorComponent from './components/ImageEditorComponent';
import 'tui-image-editor/dist/tui-image-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import './App.css';

function App() {
  const myTheme = {
    'common.backgroundColor': '#fff',
    'submenu.backgroundColor': '#6e6e6e',
  }
  return (
    <div className="App" style={{"width":"auto","overflowX":"auto"}}>
      <ImageEditorComponent

        includeUI={{
          loadImage: {
            path: '2023-02-26_22-12.png',
            name: 'SampleImage',
          },
          theme: myTheme,
          menu: ['draw', 'text', 'shape'],
          initMenu: 'draw',
          uiSize: {
            height: '99vh',
          },
          menuBarPosition: 'bottom',
        }}
        cssMaxHeight={760}
        // cssMaxWidth={980}
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
