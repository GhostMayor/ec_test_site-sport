import React from "react";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
//   const updatedAttributes = { ...props };
//   if (updatedAttributes.onClick && props.onClick) {
//     updatedAttributes.onClick(
//       (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         event.preventDefault();
//         event.stopPropagation();
//         props?.onClick(event);
//       }
//     );
//   }
  return <button type="button"></button>;
}
