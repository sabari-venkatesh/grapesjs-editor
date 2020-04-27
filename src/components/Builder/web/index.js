import grapesjs from "grapesjs";
import loadBlocks from "./blocks";
import loadComponents from "./components";
import loadPanels from "./panels";
import loadCommands from "./commands";
import loadStyles from "./styles";
import loadRTE from "./rte";
export default grapesjs.plugins.add("webpage", (editor, opts = {}) => {
  let config = opts;
  let defaults = {
    title: "Hello world in GrapeJS",
    txtConfirm: "Are you sure you want to clear the canvas? ",
  };

  for (let name in defaults) {
    if (!(name in config)) config[name] = defaults[name];
  }

  loadComponents(editor, config);
  loadBlocks(editor, config);
  loadCommands(editor, config);
  loadPanels(editor, config);
  loadStyles(editor, config);
  // loadRTE(editor, config);
});
