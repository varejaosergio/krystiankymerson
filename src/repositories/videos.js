import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(objetoDoVideo) {   
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo)
    })
      .then(async (respostaDoServer) => {
          if ( respostaDoServer.ok) {        
            const resposta = await respostaDoServer.json();
            
            return resposta;
          }

          throw new Error('Não foi possível cadastrar os dados :(');
        });   
}

export default {
    create,
};