import styles from "./blocks.module.css";
export default (editor, config = {}) => {
  const bm = editor.BlockManager;

  bm.add("link-block", {
    category: "Basic",
    label: "Link Block",
    attributes: { class: styles["block"] },
    content: {
      type: "link",
      classes: ["t-link"],
      content: "Link",
      attributes: { title: "hello" },
      editable: true,
      droppable: true,
      style: {},
    },
  });
};
