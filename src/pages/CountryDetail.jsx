

import { useEffect, useState } from 'react'
import Header from '../components/Header'


function CountryDetail() {
    const [countries, setCountries] = useState([])


    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data)).catch(err => console.log(err))

    }, [])

    return (
        <>
            <div className='row'>
                {
                    countries.map((country, i) => {
                        return (
                            <div key={i} className='col-md-3 mb-3'>
                                <div className="card" style={{height:'100%'}}>
                                    <img src={country.flag} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{country.name}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </>
    )
}

export default CountryDetail