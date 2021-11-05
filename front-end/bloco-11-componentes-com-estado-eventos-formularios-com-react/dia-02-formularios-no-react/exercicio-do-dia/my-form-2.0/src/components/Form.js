import React from 'react';

const estados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      CPF: '',
      adress: '',
      city: '',
      state: '',
      housing: '',
      resumo: '',
      cargo: '',
      descCArgo: '',
      counterAlert: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleChange({ target }) {
    let { value, type, name, checked } = target;
    value = (type === 'checkBox') ? checked : value;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'adress') value = this.replaceCharacter(value);
    
    this.setState({
      [name]: value,
    });
  }

  replaceCharacter(value) {
    return value.replace(/[^a-z0-9]/gi,'');
  }

  handleBlur({ target: { value, name } }) {
    // Se value começar com número o estado vai ser setado como vazio.
    if (value.match(/[0-9]/)) {
      this.setState({
        [name]: '',
      });
    }
    
    /* Referencias: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match */
  } 

  handleMouseEnter() {
    if (this.state.counterAlert === 0) {
      alert('Preencha com cuidado esta informação.')
      this.setState((previousValue) => ({counterAlert: previousValue.counterAlert + 1}))
    }
  }

  render() {
    const { name, email, CPF, adress, city, state, housing, resumo, cargo, descCArgo } = this.state;
    return(
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>

          <label htmlFor="name">
            Nome:
            <input type="text" name="name" id="name" maxLength="40" placeholder="Nome" required value={name} onChange={this.handleChange} />
          </label>

          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" maxLength="50" placeholder="Email" required value={email} onChange={this.handleChange} />
          </label>

          <label htmlFor="CPF">
            CPF:
            <input type="text" name="CPF" id="CPF" maxLength="11" placeholder="CPF" required value={CPF} onChange={this.handleChange} />
          </label>

          <label htmlFor="adress">
            Endereço:
            <input type="text" name="adress" id="adress" maxLength="200" placeholder="Endereço" required value={adress} onChange={this.handleChange} />
          </label>

          <label htmlFor="city">
            Cidade:
            <input type="text" name="city" id="city" maxLength="28" placeholder="Cidade" required value={city} onChange={this.handleChange} onBlur={this.handleBlur} />
          </label>

          <label htmlFor="state">
            Estado:
            <select name="state" id="state" required value={state} onChange={this.handleChange}>
              {estados.map((estado) => {
                return (
                  <option key={estado} value={estado}>{estado}</option>
                )
              })}
            </select>
          </label>

          <label htmlFor="home">
            Endereço:
            <input type="radio" name="housing" id="home" required value="home" checked={housing === 'home'} onChange={this.handleChange} />
          </label>
          <label htmlFor="apartment">
            Endereço:
            <input type="radio" name="housing" id="apartment" required value="apartment" checked={housing === 'apartment'} onChange={this.handleChange} />
          </label>
        </fieldset>

        <fieldset>
          <legend>Último Emprego</legend>
          <label htmlFor="resumo">
            Resumo do Currículo:
            <textarea name="resumo" id="resumo" cols="30" rows="10" maxLength="1000" required value={resumo} onChange={this.handleChange} />
          </label>

          <label htmlFor="cargo">
            Cargo:
            <textarea name="cargo" id="cargo" cols="30" rows="10" maxLength="40" required value={cargo} onChange={this.handleChange} onMouseEnter={this.handleMouseEnter} />
          </label>

          <label htmlFor="desc-cargo">
            Descrição do Cargo:
            <textarea name="descCArgo" id="desc-cargo" cols="30" rows="10" maxLength="500" required value={descCArgo} onChange={this.handleChange} />
          </label>
        </fieldset>
        <input type="button" value="Montar Currículo" onClick={console.log('oi')} />
      </form>
    )
  }
}

export default Form;
