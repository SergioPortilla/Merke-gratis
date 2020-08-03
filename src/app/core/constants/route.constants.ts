export class Route {
  static readonly BASE_PATH = 'merke-gratis';

  static readonly PATHS = {
    INIT: `${Route.BASE_PATH}`,
    AUTHENTICATION: {
      LOGIN: `${Route.BASE_PATH}/login`,
      REGISTRY: `${Route.BASE_PATH}/registry`,
      ABOUT: `${Route.BASE_PATH}/about`
    },
    HOME: {
      PRINCIPAL: `${Route.BASE_PATH}/home`
    }
  };
}
