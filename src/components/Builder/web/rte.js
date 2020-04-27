import Quill from "./quill";

export default (editor, config = {}) => {
  editor.setCustomRte({
    enable(el, rte) {
      el.contentEditable = true;

      let rteToolbar = editor.RichTextEditor.getToolbarEl();
      [].forEach.call(rteToolbar.children, (child) => {
        child.style.display = "none";
      });

      rte = new Quill(el);

      console.log(rte);

      // rte.on("contentDom", () => {
      //   var editable = rte.editable();
      //   editable.attachListener(editable, "click", () => {
      //     el.click();
      //   });
      // });
      // rte.on("instanceReady", (e) => {
      //   var toolbar = rteToolbar.querySelector("#cke_" + rte.name);
      //   if (toolbar) {
      //     toolbar.style.display = "block";
      //   }
      //   editor.trigger("canvasScroll");
      // });
      return rte;
    },

    disable(el, rte) {
      console.log(el);
      el.contentEditable = false;
      if (rte && rte.focusManager) rte.focusManager.blur(true);
    },
  });
};
