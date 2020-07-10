import React from 'react'

import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';

import { fetchdata } from './api';

import styles from './App.module.css';

import covid19 from './images/image.png';

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const result_data = await fetchdata();
    this.setState({ data: result_data });
    //console.log(data);
  }


  handleCountriesChange = async (country) => {
    const result_data = await fetchdata(country);
    this.setState({ data: result_data, country: country });
    //console.log(result_data);
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} alt="COVID-19" src={covid19}></img>
        <Cards data={data} />
        <CountryPicker handleCountriesChange={this.handleCountriesChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;