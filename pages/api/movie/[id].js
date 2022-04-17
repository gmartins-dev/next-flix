import { apiBase, apiKey } from "../../../lib/tmdb";

export default async(req, res) => {
    

        //acessando as informações
        const result = await fetch(`${apiBase}/movie/${req.query.id}?api_key=${apiKey}`);
        const json = await result.json();


    res.status(200).json({

        info: json

    })

  }
  

