import CardItem from "./CardItem";
import Card2 from "./CardItem";

function CardList(props) {
  return (
    <ul>
      <li>
        {props.datas.map((data) => (
          <CardItem
            key={data.key}
            Cash={data.Cash}
            FirmName={data.FirmName}
            ImagePath={data.ImagePath}
            SaledClosed={data.SaledClosed}
            ProductDesc={data.ProductDesc}

          />

        ))};
      </li>
      <li>


        {props.dataks.map((datak) => (
          <CardItem
            key={datak.key}
            Cash={datak.Cash}
            FirmName={datak.FirmName}
            ImagePath={datak.ImagePath}
            SaledClosed={datak.SaledClosed}
            ProductDesc={datak.ProductDesc}
          />
        ))};

      </li>


    </ul>
  );
}


export default CardList;
