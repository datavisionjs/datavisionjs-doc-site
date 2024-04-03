import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript'; 
import 'ace-builds/src-noconflict/theme-twilight'; // Change theme to a light theme 

function Editor({ value }) {
    const [code, setCode] = useState(value);
    const [editorHeight, setEditorHeight] = useState('600px');

    useEffect(() => {
        setEditorHeight(`${code.split('\n').length * 19}px`); // Adjust 16 to your desired line height
    }, [code]);

    const onChange = (newValue) => {
        setCode(newValue);
    };

    return (
        <div className="ace-container">
            <AceEditor
                mode="javascript"
                theme="github" // Change theme to a light theme
                onChange={onChange}
                value={code}
                readOnly
                name="editor"
                editorProps={{ $blockScrolling: true }}
                style={{ fontSize: '19px', height: editorHeight, width: "100%" }} // Adjust fontSize as needed
            />
        </div>
    );
}

export default Editor;
