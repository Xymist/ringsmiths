// @flow

export const imageUrl = (key: string) => {
  return "/wp-content/uploads/2020/08/" + key + ".jpg";
};

export const progressUrl = (stage: Number) => {
  return (
    "/wp-content/uploads/2020/09/progress-bar-stage" + stage.toString() + ".png"
  );
};
