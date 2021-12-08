import React from "react";

import DeliverySelect from "../../../shared/components/DeliverySelect";

const DeliveryContainer = () => {
  const deliveryOptions = ["hola", "mundo"];
  // if needed this could be retrieved and dispatched
  // to a global store
  const [currentDeliveryOption, setCurrentDeliveryOption] =
    React.useState<string>(deliveryOptions[0]);

  const handleSelectDeliveryOption = (deliveryOption: string) => {
    setCurrentDeliveryOption(deliveryOption);
  };

  return (
    <DeliverySelect
      currentDeliveryOption={currentDeliveryOption}
      deliveryOptions={deliveryOptions}
      handleSelectDeliveryOption={handleSelectDeliveryOption}
    />
  );
};
export default DeliveryContainer;
