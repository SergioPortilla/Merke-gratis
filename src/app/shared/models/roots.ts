export class Roots {
  selected: boolean;
  route: string;
  routeActive: string;

  constructor(selected: boolean, route: string, routeActive: string) {
    this.selected = selected;
    this.route = route;
    this.routeActive = routeActive;
  }
}
