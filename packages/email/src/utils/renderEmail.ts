import { render } from "@react-email/render";
import { ReactElement } from "react";

export const renderEmail = (component: ReactElement) => {
  return render(component); 
};