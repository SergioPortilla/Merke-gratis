export class Route {
  static readonly BASE_PATH = 'merke-gratis';

  static readonly PATHS = {
    INIT: `${Route.BASE_PATH}`,
    AUTHENTICATION: {
      AUTH: `authentication`,
      LOGIN: `login`,
      REGISTRY: `registry`,
      ABOUT: `about`
    },
    HOME_ADMIN: {
      PRINCIPAL: `admin`
    },
    HOME_PERSON: {
      PRINCIPAL: `person`
    }
  };
}
