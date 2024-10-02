import { useEffect, useState } from 'react';

const ServerData = () => {
    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        const fetchFortnite = async () => {
            const res = await fetch('https://fortnite-api.com/v2/news');
            const { data } = await res.json();

            setServerData(data.br.motds);
        };

        const fetchTimeout = setTimeout(() => fetchFortnite(), 2000);

        return () => clearTimeout(fetchTimeout);
    }, []);

    // if (!serverData.length)
    //     return <h1 className="serverContainer">{'Loading...'}</h1>;

    return (
        <main>
            {serverData.map(({ id, title, body, image }) => {
                return (
                    <div className="serverContainer" key={id}>
                        <h1>{title}</h1>
                        <h2>{body}</h2>
                        <img src={image} alt={title} />
                    </div>
                );
            })}
        </main>
    );
};

export default ServerData;
