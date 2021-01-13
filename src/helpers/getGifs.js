
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${  encodeURI( category ) }&limit=10&api_key=SvrrEmPVuUSCq93Ahk3w7Gbq3V0i0GQf`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    //mutacion del array devuelto por el servicio con solo lo necesario:
    const gifs = data.map( img  => {
        return {
            id: img.id,
            title: img.title,
            // url: img.images?.downsized_medium.url //se puede agregar el signo ? para agregar un condicional para evitar el undefined.
            url: img.images.downsized_medium.url
        }
    })


    return gifs;

    
}    