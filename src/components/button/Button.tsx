import React from "react";
import BinIcon from "../../../public/assets/icons/bin.svg";
import LockCloseIcon from "../../../public/assets/icons/lockclose.svg";
import UnlockIcon from "../../../public/assets/icons/unlock.svg";
import WriteIcon from "../../../public/assets/icons/write.svg";
import SettingsIcon from "../../../public/assets/icons/settings.svg";

interface ButtonProps {
  binIcon?: boolean;
  lockCloseIcon?: boolean;
  unlockIcon?: boolean;
  writeIcon?: boolean;
  settingsIcon?: boolean;
}

export const Button = ({
  binIcon,
  lockCloseIcon,
  unlockIcon,
  writeIcon,
  settingsIcon,
}: ButtonProps) => {
  return (
    <button>
      {binIcon ? <BinIcon /> : null}
      {lockCloseIcon ? <LockCloseIcon /> : null}
      {unlockIcon ? <UnlockIcon /> : null}
      {writeIcon ? <WriteIcon /> : null}
      {settingsIcon ? <SettingsIcon /> : null}
    </button>
  );
};
