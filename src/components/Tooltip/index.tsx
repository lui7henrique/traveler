import { IconBox } from "components/FieldPassword";
import { useEffect } from "react";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

interface TooltipProps {
  content: string;
  children: JSX.Element;
}

export function Tooltip(props: TooltipProps) {
  const { content, children } = props;

  useEffect(() => {
    tippy("#myButton", {
      content: content,
    });
  }, []);

  return <IconBox id="myButton">{children}</IconBox>;
}
