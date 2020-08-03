export class Roots {
  id: number;
  selected: boolean;
  route: string;
  name: string;
  routeActive: string;

  constructor(id: number, selected: boolean, route: string, name: string, routeActive: string) {
    this.id = id;
    this.selected = selected;
    this.route = route;
    this.name = name;
    this.routeActive = routeActive;
  }
}
