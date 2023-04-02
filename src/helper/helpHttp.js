export const helpHttp = () => {
  const customFetch = async (endPoint, options) => {
    //definir los headers por defecto
    const defaultHeader = {
      accept: "application/json",
    };

    //crear un abortController para cancelar la peticion en un determinado tiempo
    let controller = new AbortController();
    options.signal = controller.signal;

    //asignar el metodo GET por defecto en caso de que la peticion no venga con metodo
    options.method = options.method || "GET";

    //Asignar las cabeceras en caso de recibir
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    // convertir el cuerpo de la peticion a json y en caso de no venir cuerpo, eliminar la propiedad body
    options.body = JSON.stringify(options.body);
    if (!options.body) delete options.body;

    //abortar la peticion pasado 3 segundos
    setTimeout(() => {
      controller.abort();
    }, 3000);

    //realizar la peticion
    let res = await fetch(endPoint, options);
    if (!res.ok) {
      return Promise.reject({
        err: true,
        status: res.status || "00",
        statusMessage: res.statusMessage || "Ocurrio un error",
      });
    }
    return res.json();
  };

  const get = (url, options = {}) => customFetch(url, options);

  return {
    get,
  };
};
