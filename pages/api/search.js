import { apiBase, apiKey } from "../../lib/tmdb";

export default async(req, res) => {
    


        const result = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&query=${req.query.q}`);
        const json = await result.json();

        res.status(200).json({
            //salvando os resultados da busca em "list"
         list: json.results   

        });
  }
  

