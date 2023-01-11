import { Card, CardBody } from "reactstrap";


function Header({name,title}) {
    return (
      <div  style={{background:'white'}}>
          {/* <h1>{title}</h1>
          <h1>{name}</h1> */}
          <Card className="my-2 bg-success">
            <CardBody>
            <h1 className="text-center my-2">Welcome to Course Application </h1>
            </CardBody>
          </Card>
         
      </div>
    );
  }

  export default Header;