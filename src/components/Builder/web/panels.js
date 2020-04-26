import {
  IMPORT,
  CLEAR,
  EXPORT,
  VISIBILITY,
  PREVIEW,
  LOAD,
  STORE,
} from "./consts";

export default (editor, config) => {
  const panelManager = editor.Panels;
  const eConfig = editor.getConfig();
  console.log(config.isTemplate);
  panelManager.addPanel({
    id: "actions",
    el: config.panelRef,
  });

  config.isTemplate &&
    panelManager.addButton("actions", {
      id: VISIBILITY,
      active: true,
      label: "",
      classes: ["fa fa-square-o"],
      attributes: { title: "View Components", class: "fa fa-square-o" },
      command: VISIBILITY,
      context: VISIBILITY,
    });
  config.isTemplate &&
    panelManager.addButton("actions", {
      id: PREVIEW,
      context: PREVIEW,
      command: (e) => e.runCommand(PREVIEW),
      className: "fa fa-eye",
    });

  // panelManager.addButton("actions", {
  //   id: IMPORT,
  //   className: "fa fa-download",
  //   command: (e) => e.runCommand(IMPORT),
  // });

  config.isTemplate &&
    panelManager.addButton("actions", {
      id: CLEAR,
      className: "fa fa-trash",
      command: (e) => e.runCommand(CLEAR),
    });

  config.isTemplate &&
    panelManager.addButton("actions", {
      id: EXPORT,
      className: "fa fa-code",
      command: (e) => e.runCommand(EXPORT),
    });

  config.isTemplate &&
    panelManager.addButton("actions", {
      id: STORE,
      className: "fa fa-save",
      command: (e) => e.runCommand(STORE),
    });

  !config.isTemplate &&
    panelManager.addButton("actions", {
      id: LOAD,
      className: "fa fa-file",
      command: (e) => e.runCommand(LOAD),
    });
};
