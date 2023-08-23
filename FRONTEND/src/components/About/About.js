import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <Card className="text-center">
      <Card.Header>About Us</Card.Header>
      <Card.Body>
        <Card.Title>Mohit Agarwal</Card.Title>
        <Card.Img
          variant="top"
          style={{ height: "300px", width: "300px" }}
          src="https://drive.google.com/uc?id=1EXNMSTRNINuBVwS5r07nx77Q5C45ipLP"
        />
        <Card.Text className="mt-4">
          Est consectetur laboris dolor laborum qui eiusmod reprehenderit. Esse
          ad minim exercitation cupidatat reprehenderit culpa id proident
          labore. Pariatur Lorem reprehenderit nostrud excepteur nostrud enim
          laboris eiusmod labore fugiat exercitation. Incididunt aliqua elit ut
          excepteur enim consequat anim nisi ut laborum minim officia voluptate
          minim. Amet ea adipisicing reprehenderit dolore. Laborum labore minim
          non velit aliquip commodo anim anim est id non. Culpa fugiat nostrud
          excepteur ullamco labore est deserunt consectetur sunt. Est veniam do
          non cupidatat pariatur. Ea irure officia ex quis velit eu voluptate
          anim tempor labore proident quis commodo incididunt. Occaecat ea minim
          veniam tempor do incididunt elit consequat non. Non consectetur
          deserunt dolor nulla consectetur est proident anim sint. Laboris
          laboris fugiat Lorem occaecat voluptate officia magna eu cillum quis
          est commodo minim. Ea nostrud in ullamco anim quis. Veniam amet
          deserunt labore anim. Aliqua deserunt cillum duis excepteur enim
          officia ea ex aliqua excepteur est. Sunt commodo velit labore
          excepteur aliqua cupidatat incididunt eiusmod eiusmod ex consequat
          tempor sit. Est enim exercitation nulla occaecat nisi laborum laboris
          ut dolor in esse culpa incididunt. Sunt id minim labore sit. Eiusmod
          non aute id cupidatat proident proident. Nulla culpa exercitation
          irure veniam eiusmod eu do est amet cillum occaecat in ut. Est
          cupidatat nostrud dolore consequat velit culpa cillum occaecat velit
          minim reprehenderit nulla. Qui velit culpa qui anim. Voluptate in
          fugiat ad incididunt in non laborum cupidatat ad. Commodo deserunt
          minim sunt voluptate esse in deserunt nostrud proident labore in non.
          Cupidatat laborum sunt tempor nostrud aliquip tempor et adipisicing.
          Excepteur in amet tempor dolore adipisicing laboris voluptate deserunt
          excepteur ullamco. Ea cupidatat laborum quis id ea anim sunt et mollit
          aliquip. Occaecat in irure qui sint et. Deserunt amet pariatur
          proident aliqua excepteur eiusmod et ipsum. In qui ut ea laborum
          mollit deserunt amet amet consectetur consectetur ut. Ad non in minim
          minim nostrud laboris. Esse ut consequat in adipisicing eu mollit
          ullamco dolore fugiat commodo consequat voluptate nisi est. Deserunt
          occaecat duis anim nulla cupidatat consequat laboris in anim. Labore
          culpa enim minim proident nisi anim. Excepteur quis excepteur
          voluptate aliquip laborum nulla enim consequat id officia dolore sit
          fugiat. Veniam velit ullamco do cupidatat fugiat elit mollit et quis
          cupidatat adipisicing est consectetur. Ex ipsum quis culpa sint sit.
          Ut mollit excepteur elit dolor occaecat. Et tempor occaecat culpa
          consequat dolore quis do commodo consectetur id voluptate. Labore
          officia elit laboris incididunt velit laboris eu occaecat.
        </Card.Text>
        <Button variant="primary">
          <Link
            to="/store"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Store
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}
export default About;
