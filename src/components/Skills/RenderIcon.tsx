import React from "react";
import { IconType } from "react-icons/lib";

const RenderIcon = ({ icon: Icon }: { icon: IconType }) => {
  return <Icon size={80} />;
};

export default RenderIcon;
