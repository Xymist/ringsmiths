// @flow

import fields from "../../data/product_chooser_fields.json";

const imageData = (props, selectedOptions) => {
  const selections = {
    style:
      props.choice === "style"
        ? props.option.value
        : selectedOptions.style || "court",
    metal:
      props.choice === "metal"
        ? props.option.value
        : selectedOptions.metal || "yellow-gold",
    width:
      props.choice === "width"
        ? props.option.value
        : selectedOptions.width || "4mm",
    carat:
      props.choice === "carat"
        ? props.option.value
        : selectedOptions.carat || "9ct",
  };

  let relevantOpts = [];
  fields
    .find((f) => {
      return f.choice === props.choice;
    })
    .image_opts.forEach((opt_name) => {
      relevantOpts.push(selections[opt_name]);
    });

  return relevantOpts.join("-");
};

export const imageUrl = (props: any, selectedOptions: any) => {
  const key = imageData(props, selectedOptions);
  return "/wp-content/uploads/" + key + ".jpg";
};

export const progressUrl = (stage: Number) => {
  return (
    "/wp-content/uploads/2020/09/progress-bar-stage" + stage.toString() + ".png"
  );
};
