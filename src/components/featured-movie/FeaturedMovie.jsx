import React from "react";
import './FeaturedMovie.module.css'


export default function FeaturedMovie ({item}) {

    //variavel para manipular a data e mostrar somente o Ano de lançamento
    let firstDate = new Date(item.first_air_date);

    //variavel para manipular os generos dos filmes
    let genres =[];
    for(let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    //para a descripção não ultrapassar um limite de texto determinado
    let description = item.overview;
    if(description.length >200) {
        description = description.substring(0, 200) + ' (...)';
    }

    return (

        <section className="featured"
        
            style={{

                backgroundSize : 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

            }}>

            <div className="featured--vertical">

               <div className="featured--horizontal">
                   <div className="featured--name">
                       {item.original_name}
                   </div>
                   <div className="featured--info">
                        <div className="featured--rating">
                            Rating: {item.vote_average}
                        </div>
                        <div className="featured--year">
                            Released: {firstDate.getFullYear()}
                        </div>
                        <div className="featured--seasons">
                            Seasons: {item.number_of_seasons}
                        </div>
                        <div className="genres">
                            <strong>Genres: </strong> {genres.join(', ')}
                        </div>
                        <div className="featured--description">
                            {description}
                        </div>
                        <div className="featured--buttons">
                            <div className="featured--watchbutton">
                                <a href={`/watch/${item.id}`}>▶ Watch </a>
                            </div>
                            <div className="featured--mylistbutton">
                                <a href={`/list/add/${item.id}`}>+ My List</a>
                            </div>
                        </div>
                   </div>
               </div>

            </div>

        </section>
    )
}