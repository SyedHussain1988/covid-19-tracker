import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css';
import { getCountries } from '../../api';



function CountryPicker({ handleCountriesChange }) {

  const [fethcedCountries, setfethcedCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesAPI = async () => {
      setfethcedCountries(await getCountries());
    }

    fetchCountriesAPI();

  }, [setfethcedCountries]);

  //console.log(fethcedCountries);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => { handleCountriesChange(e.target.value) }}>
          <option value="">All</option>
          {fethcedCountries.map((pointer, i) => <option key={i} value={pointer}>{pointer}</option>)}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CountryPicker;