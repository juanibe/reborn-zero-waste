import React, { Component } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import content from "../text.json";
import Modalmanufacturer from "../components/Modalmanufacturer";
import Modaldesigner from "../components/Modaldesigner";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Cards
                title={content.manufacturer.title}
                text={content.manufacturer.text}
                image={content.manufacturer.image}
                signUpLink={<Modalmanufacturer getUser={this.props.getUser} />}
              />
            </div>
            <div className="col-6">
              <Cards
                title={content.designer.title}
                text={content.designer.text}
                image={content.designer.image}
                signUpLink={<Modaldesigner getUser={this.props.getUser} />}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <section>
          <div className="container" />
        </section>
      </div>
    );
  }
}
export default Home;

// {<script src="https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js"></script>}
//             <div id="landbot-1553762396749" style="width: 100%; height: 500px"></div>
//             { <script>
//   var myLandbotFrame = new LandbotFrameWidget({
//     container: '#landbot-1553762396749',
//     index: 'https://landbot.io/u/H-154558-EBCCDC5FNXBUAS5C/index.html',
//   });
// </script>}
