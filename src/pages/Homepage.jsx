import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import '../assets/homepage.scss'
import Valuta from "../components/Valuta";
import axios from "axios";
import Ethereum from "../components/Ethereum";
import Dogecoin from "../components/Dogecoin";

const Homepage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin`)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error("error fetching data", error);
        });
    }, [])

    const btc = {
        market_data: ""
    }

    return (
        <Fragment>
            <Header />
            <div className="content">
                <h1 className="naslov-crypto">The World's best crypto</h1>
                <h1 className="naslov-crypto-2"> information platform</h1>
                <span className="podnaslov-crypto">Information about Bitcoin, Ethereum and 30+ more cryptocurrencies</span>           
            </div>
            <div className="content-2">
                <div className="bitcoin">
                    <div className="bitcoin-naslov">
                    <h3>{data.name}</h3>
                    </div>
                    <div className="bitcoin-symbol"><p>{data.symbol}</p>
                    </div>
                    
                    <div className="bitcoin-price">
                        <p>${data.market_data && data.market_data.current_price && 
                        data.market_data.current_price.usd}</p>
                    </div>
                    <div className="bitcoin-change">
                        <p>+{data.market_data && data.market_data.price_change_percentage_7d}%</p>
                    </div>
                    <div className="bitcoin-maxmarket">
                        <p>${data.market_data && data.market_data.market_cap && data.market_data.market_cap.usd}</p>
                    </div>
                    
                    <div className="bitcoin-market">
                    <p>Market cap rank: {data.market_cap_rank}</p>
                    </div>
                    
                </div>
                <div className="ethereum">
                    <Ethereum />
                </div>
                <div className="dogecoin">
                    <Dogecoin />
                </div>

                <div className="slika"><img src="/public/vite.svg" alt="" id="aa"/></div>
            </div>
        </Fragment>
    )
}

export default Homepage