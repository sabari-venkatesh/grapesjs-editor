export default (editor, config) => {
  const sm = editor.StyleManager;
  const csm = config.customStyleManager;

  sm.getSectors().reset(
    csm && csm.length
      ? csm
      : [
          {
            name: "General",
            open: false,
            buildProps: ["float", "display"],
          },
        ]
  );
};
