import "./blocks.css";
export default (editor, opt = {}) => {
  // const hasBlock = (name) => opt.blocks.indexOf(name) >= 0;
  let bm = editor.BlockManager;
  // hasBlock("title") &&
  bm.add("text-basic", {
    category: "Basic",
    label: "Text section",
    attributes: { class: "" },
    content: `<section class="t-section">
      <h1 class="t-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, exercitationem!</h1>
      <p class="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus odit asperiores tempora debitis, dicta nobis, dolore minus at quia eos exercitationem cum amet ab! Iusto a soluta accusantium non nisi sunt laborum mollitia neque vel dignissimos. Dignissimos vel ut natus error laudantium, sint dolorem dolor consequatur enim tempore dicta.</p>
      </section>`,
  });
};
