import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Valuta = () => {

    const [cryptoInfo, setCryptoInfo] = useState(null);
    const [info, setInfo] = useState(null);

    const { id } = useParams();

    useEffect (() => {
        const fetchData = async () => {
            try {
                if(!id) {
                    console.error("No id provided");
                    return;
                }
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
                const data = await response.json();
                setCryptoInfo(data);
            }
            catch (error) {
                console.error("Failed fetching data", error);
            }
        }
        fetchData();
    }, [])

    return (
        <>
        
        {cryptoInfo ? (
            
            <div>
                <span>symbol: {cryptoInfo.symbol}</span>
                <span>id: {cryptoInfo.id}</span>
                <span>name: {cryptoInfo.name}</span>
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </>
    )
}

export default Valuta