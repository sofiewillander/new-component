import { Text } from "@nv/nv-ui";
import * as React from "react";
import { useTranslation } from "react-i18next";

export interface COMPONENT_NAMEProps {
  children: React.ReactNode;
}

const COMPONENT_NAME = ({}: COMPONENT_NAMEProps) => {
  const { t } = useTranslation();

  return <></>;
};

export default COMPONENT_NAME;
