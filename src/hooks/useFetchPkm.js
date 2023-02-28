import pokeApi from "../services/services.js";

const services = {
  async getPkmsApi() {
    return await pokeApi.getPkm();
  },
};

export { services };
