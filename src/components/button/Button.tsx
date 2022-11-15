import React from "react";
import * as Styled from "./Button.styled";

import BinIcon from "../../../public/assets/icons/bin.svg";
import LockCloseIcon from "../../../public/assets/icons/lockclose.svg";
import UnlockIcon from "../../../public/assets/icons/unlock.svg";
import WriteIcon from "../../../public/assets/icons/write.svg";
import SettingsIcon from "../../../public/assets/icons/settings.svg";

interface ButtonProps {
  icon: "bin" | "lock" | "unlock" | "write" | "setting" | string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ icon, onClick }: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick}>
      {icon === "bin" && <BinIcon />}
      {icon === "lock" && <LockCloseIcon />}
      {icon === "unlock" && <UnlockIcon />}
      {icon === "write" && <WriteIcon />}
      {icon === "setting" && <SettingsIcon />}
    </Styled.Button>
  );
};
