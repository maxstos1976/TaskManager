import React from "react";

// Componentes funcionais, estao caindo em desuso. Mas é bom saber que existem. Os motivos sao que:
// Nao podemos usar Hooks dentro de componentes funcionais.
// E é mais verboso, e dificil de escrever.
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Construi uma classe",
    };
  }
  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default Test;
