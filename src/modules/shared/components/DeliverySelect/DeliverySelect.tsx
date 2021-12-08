import "./DeliverySelect.css";

import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Chevron from "../Chevron";
import Clock from "../Clock";

type DeliverySelectProps = {
  currentDeliveryOption: string;
  deliveryOptions: string[];
  handleSelectDeliveryOption: (deliveryOption: string) => void;
};

const DeliverySelect = ({
  currentDeliveryOption,
  deliveryOptions,
  handleSelectDeliveryOption,
}: DeliverySelectProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLDivElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (deliveryOption: string) => {
    setAnchorEl(null);
    handleSelectDeliveryOption(deliveryOption);
  };

  return (
    <>
      <div className="delivery-select-container" onClick={handleClick}>
        <Clock fill="white" className="delivery-select-clock" />
        <span>Delivery: </span>
        <span>{currentDeliveryOption}</span>
        <Chevron className="delivery-select-chevron" fill="white" />
      </div>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {deliveryOptions.map((deliveryOption) => (
          <MenuItem
            onClick={() => handleClose(deliveryOption)}
            key={deliveryOption}
            selected={deliveryOption === currentDeliveryOption}
          >
            {deliveryOption}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default DeliverySelect;
