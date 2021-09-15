import ButtonDefault from "../../components/ButtonDefault";
import Card from "../../components/Card";

import "./CardBlock.module.scss";

const CardBlock = () => {
  return (
    <div className="CardBlock container">
      <div className="cardBlock-inner">
        <ButtonDefault btnTitle="Button" text="Section Headline"/>
      </div>

      <div className="cardBlock-bottom">
        <Card
          cardTitle="Product Title"
          cardText="Space for a small product description "
          cardPrice="3.26 USD"
          cardBtn="Buy now"
        />

        <Card
          cardTitle="Product Title"
          cardText="Space for a small product description "
          cardPrice="1.48 USD"
          cardBtn="Buy now"
        />

        <Card
          cardTitle="Product Title"
          cardText="Space for a small product description "
          cardPrice="0.28 USD"
          cardBtn="Buy now"
          cardRate="48.56"
          iconRate="- 36 %"
        />

        <Card
          cardTitle="Product Title"
          cardText="Space for a small product description "
          cardPrice="1.12 USD"
          cardBtn="Buy now"
        />
      </div>
    </div>
  );
};

export default CardBlock;
