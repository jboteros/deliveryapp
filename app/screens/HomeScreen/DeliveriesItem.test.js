import React from "react";
import renderer from "react-test-renderer";
import { DeliveriesItem } from "./DeliveriesItem";

describe("DeliveriesItem", () => {
  const props = {
    item: {
      consumer: "Delores Dickens",
      latitude: "23.3477",
      longitude: "-151.0694",
      zipCode: "51143-1969",
      city: "Lake Erich",
      address: "53908 Ariel Mission",
      id: "1",
    },
    deliveredItem: {
      deliveryId: "1",
      status: "undelivered",
      latitude: "23.3477",
      longitude: "-151.0694",
      id: "4",
    },
  };

  it("renders correctly", () => {
    const tree = renderer.create(<DeliveriesItem {...props} />);

    expect(tree).toMatchSnapshot();
  });
});
