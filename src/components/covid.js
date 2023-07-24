import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {
    
    const [data,setdata]= useState([]);
    // const setheader=
    // {
    //     headers:
    //     {
    //         Accept:"application/json"
    //     }
    // }

    const getcoviddata = async ()=>
    {
        try
        {
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const apiUrl = 'https://api.covid19india.org/data.json';
            const res = await fetch(proxyUrl + apiUrl);
           const actualdata= await res.json();
           console.log(actualdata.statewise[0]);
           setdata(actualdata.statewise[0]);
           
        }
        catch(err)
        {
            console.log(err);
        }
    }

    useEffect(() => {
           getcoviddata();
    }, [])

    return (
    <>
        <div className='outer'>
        <div className='live'>Live</div>
        </div>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        
        <section>
            <div className='indiv'>
                Our Country
                <h2 className='inn'> India</h2>

            </div>
            
            <div className='indiv'>
                Total Recovered
                <h2 className='inn'> {data.recovered}</h2>
            </div>
            <div className='indiv'>
            Total confirmed
            <h2 className='inn'> {data.confirmed}</h2>

            </div>
            <div className='indiv'>
                Total Deaths
                <h2 className='inn'> {data.deaths}</h2>
            </div>
            <div className='indiv'>
                Total Active
                <h2 className='inn'> {data.active}</h2>
            </div>
            <div className='indiv'>
                Last Updated
                <h2 className='inn'> {data.lastupdatedtime}</h2>
            </div>

        </section>






    </>
  )
}

export default Covid