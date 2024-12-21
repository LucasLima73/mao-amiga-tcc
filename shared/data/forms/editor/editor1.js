import dynamic from 'next/dynamic';
import React from 'react'
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
import 'suneditor/dist/css/suneditor.min.css';

const EditorComponent = () => {
  const defaultContent1 = `
  <h4><b class="ql-size-large">Quill Bubble</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
  <ol>
	  <li class="ql-size-normal">Write text, select, and edit with multiple options.</li>
	  <li class="">This is quill snow editor.</li>
	  <li class="">Easy to customize and flexible.</li>
  </ol>
  <h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>
`;

  const sortedFontOptions = [
    "Arial",
    "Logical",
    "Salesforce Sans",
    "Garamond",
    "Sans-Serif",
    "Serif",
    "Times New Roman",
    "Helvetica",
    "Comic Sans MS",
    "Courier New",
    "Impact",
    "Georgia",
    "Tahoma",
    "Trebuchet MS",
    "Verdana"
  ].sort();

  return (
    <>
      <SunEditor  defaultValue={defaultContent1}
        height="200px" 
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript"
            ],
            ["fontColor", "hiliteColor"],
            ["align", "list", "lineHeight"],
            ["outdent", "indent"],
            ["table", "link", "image", "video"],
            ["preview", "print"],
            ["removeFormat"]
          ], 
          defaultTag: "div",
          minHeight: "300px",
          showPathLabel: false,
          font: sortedFontOptions,
          defaultStyle: 'font-family: Arial; font-size: 16px;',
        }}
        
        
      />
    </>
  )
}

export default EditorComponent