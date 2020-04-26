import React, { useEffect, useState, forwardRef, useRef } from "react";
import GrapesJS from "grapesjs";
// import grapesJSEditor from "grapesjs-plugin-ckeditor";
import "grapesjs/dist/css/grapes.min.css";
import "./web";
import "./styles.css";
const TemplateBuilder = forwardRef((props, ref) => {
  const { id, children, onInit, isTemplate } = props;
  const [builder, setTemplateBuilder] = useState(null);
  const blocks = useRef();
  const panel = useRef();
  const selectors = useRef();
  const styles = useRef();

  useEffect(() => {
    if (!builder) {
      const e = GrapesJS.init({
        container: `#${id}`,
        height: "100%",
        // stylePrefix: "builder-",
        fromElement: true,
        protectedCss: `.t-title { font-size: 2rem; color: red; } .t-description { font-size: 14px; margin: 0; } .t-link { color: red; }`,
        plugins: ["webpage"],
        pluginsOpts: {
          webpage: {
            panelRef: panel.current,
            isTemplate,
          },
        },
        canvasCss: `
          .builder-dashed {
            outline: 3px dashed red !important;
          }
          .builder-dashed *[data-highlightable] { 
            outline: 1px dashed red;
          }
        `,
        storageManager: {
          type: "local",
          autosave: false,
          autoload: false,
          stepsBeforeSave: 1,
        },
        panels: { defaults: [] },
        blockManager: isTemplate && {
          appendTo: blocks.current,
        },
        selectorManager: isTemplate && {
          appendTo: selectors.current,
        },
        styleManager: isTemplate && {
          appendTo: styles.current,
        },
      });

      setTemplateBuilder(e);
      if (onInit) {
        onInit(e);
      }
    }
  });

  return (
    <div className="builder">
      {isTemplate && (
        <div id="block-manager" ref={blocks} className="blocks"></div>
      )}
      <div id="panel-manager" ref={panel} className="panels"></div>
      <div id={id} ref={ref} className="canvas">
        {children}
      </div>
      {isTemplate && (
        <div id="styles-manager" className="styles">
          <div id="selectors" ref={selectors}></div>
          <div id="traits"></div>
          <div id="styles" ref={styles}></div>
        </div>
      )}
    </div>
  );
});

export default TemplateBuilder;
