import { IconBox } from "components/FieldPassword";
import { useEffect } from "react";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import { v4 } from "uuid";

interface TooltipProps {
  content: string;
  children: JSX.Element;
}

export function Tooltip(props: TooltipProps) {
  const { content, children } = props;

  const id = `myButton-${v4()}`;

  useEffect(() => {
    tippy(`#${id}`, {
      content: content,
    });
  }, [content, id]);

  return <IconBox id={id}>{children}</IconBox>;
}
