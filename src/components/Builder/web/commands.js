// import openImport from "./openImport";
import { CLEAR, LOAD, STORE } from "./consts";

export default (editor, { txtConfirm }) => {
  const cm = editor.Commands;
  // cm.add(cmdImport, openImport(editor, config));
  cm.add(
    CLEAR,
    (e) => window.confirm(txtConfirm) && e.runCommand("core:canvas-clear")
  );

  cm.add(LOAD, (e) => {
    e.load((res) => console.log("load callback", res));
  });
  cm.add(STORE, (e) =>
    console.log(e.store((res) => console.log("Store callback", res)))
  );
};
