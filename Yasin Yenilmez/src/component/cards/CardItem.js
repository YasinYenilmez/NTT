import { CardHeader, CardFooter, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'primereact/card';
import './data.css';
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
  <script src="https://unpkg.com/primereact/core/core.min.js"></script>
  <script src="https://unpkg.com/primereact/card/card.min.js"></script>
</head>



function CardItem(props) {
  return (

    <div class="container">
      <div class="row">
        <div class="col">
          <li>
            <Card>
              <CardBody>
                <CardHeader tag="h3">
                  <p>{props.ProductDesc}</p>
                </CardHeader>
                <CardBody>
                  <CardTitle tag="h4">
                    <p>{props.FirmName}</p>
                  </CardTitle>
                  <CardText>
                    <h6>{props.Cash} Türk Lirası</h6>
                  </CardText>

                  <Button>
                    <img src={props.ImagePath} />
                  </Button>
                </CardBody>
                <CardFooter>

                  <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={props.SaleClosed}>Satın AL</Button>

                </CardFooter>
              </CardBody>
            </Card>
          </li>
        </div>



        <div class="col">
          <li>
            <Card>
              <CardBody>
                <CardHeader tag="h3">
                  <p>{props.ProductDesc}</p>
                </CardHeader>
                <CardBody>
                  <CardTitle tag="h4">
                    <p>{props.FirmName}</p>
                  </CardTitle>
                  <CardText>
                    <h6>{props.Cash} Türk Lirası</h6>
                  </CardText>

                  <Button>
                    <img src={props.ImagePath} />
                  </Button>
                </CardBody>
                <CardFooter>

                  <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={props.SaleClosed}>Satın AL</Button>

                </CardFooter>
              </CardBody>
            </Card>
          </li>

        </div>

      </div>






    </div>





  )

}

export default CardItem;
