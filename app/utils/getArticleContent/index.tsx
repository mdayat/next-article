import React from "react";

const getArticleContent = (
  index?: number,
  text?: any,
  obj?: any,
  type?: any
) => {
  let modifiedText = text;

  if (obj.bold) {
    modifiedText = <b key={index}>{text}</b>;
  } else if (obj.italic) {
    modifiedText = <em key={index}>{text}</em>;
  } else if (obj.underline) {
    modifiedText = <u key={index}>{text}</u>;
  }

  switch (type) {
    case "paragraph":
      return (
        <p key={index} className="mb-4 last:mb-0">
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </p>
      );

    default:
      return modifiedText;
  }
};
export { getArticleContent };
