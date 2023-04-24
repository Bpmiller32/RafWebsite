import { h } from "vue";

const TextContent = (props, context) => {
  return h(props.type, { class: "test" }, props.content);
};

export default TextContent;
