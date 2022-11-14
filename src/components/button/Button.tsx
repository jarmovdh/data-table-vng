import React from "react";
import * as Styled from "./Button.styled";

import BinIcon from "../../../public/assets/icons/bin.svg";
import LockCloseIcon from "../../../public/assets/icons/lockclose.svg";
import UnlockIcon from "../../../public/assets/icons/unlock.svg";
import WriteIcon from "../../../public/assets/icons/write.svg";
import SettingsIcon from "../../../public/assets/icons/settings.svg";

interface ButtonProps {
  icon: string | string[];
}

export const Button = ({ icon }: ButtonProps) => {
  const getIcon = () => {
    if (icon === "bin") return <BinIcon />;
    if (icon === "lock") return <LockCloseIcon />;
    if (icon === "unlock") return <UnlockIcon />;
    if (icon === "write") return <WriteIcon />;
    if (icon === "setting") return <SettingsIcon />;
  };

  return <Styled.Button>{getIcon()}</Styled.Button>;
};
