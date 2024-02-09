import { useState, useEffect } from "react";
import axios from "axios";

const Ethereum = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/ethereum`)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error("error fetching data", error);
        });
    }, [])

    return (
        <>
            <div className="ethereum">
                <div className="ethereum-naslov">
                <h3>{data.name}</h3>

                </div>
                <div className="ethereum-symbol"><p>{data.symbol}</p>
                    </div>
                    
                    <div className="ethereum-price">
                        <p>${data.market_data && data.market_data.current_price && 
                        data.market_data.current_price.usd}</p>
                    </div>
                    <div className="ethereum-change">
                        <p>+{data.market_data && data.market_data.price_change_percentage_7d}%</p>
                    </div>
                    <div className="ethereum-maxmarket">
                        <p>${data.market_data && data.market_data.market_cap && data.market_data.market_cap.usd}</p>
                    </div>
                    
                    <div className="ethereum-market">
                    <p>Market cap rank: {data.market_cap_rank}</p>
                    </div>
            </div>
            
        </>
    )

}

export default Ethereum

