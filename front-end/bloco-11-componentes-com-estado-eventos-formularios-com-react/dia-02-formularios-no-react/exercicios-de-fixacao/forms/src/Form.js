import React from "react";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
    }

    this.handleOnChangeNome = this.handleOnChangeNome.bind(this);
  }

  handleOnChangeNome(event) {
    this.setState({nome: event.target.value});
  }

  render() {
    return(
      <form className="form">
        <label>
          Nome:
          <input type="text" name="nome" value={this.state.nome} onChange={this.handleOnChangeNome} />
        </label>
        <label>
          Idade:
          <input type="number" name="idade" />
        </label>
        <label>
          Estado:
          <select>
            <option value="Bahia">Bahia</option>
            <option value="Piaui">Piaui</option>
            <option value="São Paulo">São Paulo</option>
          </select>
          <label>
            <textarea name="estado" />
          </label>
        </label>
      </form>
    )
  }
}

export default Form;
