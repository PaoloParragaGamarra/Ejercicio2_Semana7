export class Offer {
  id:any;
  title:any;
  description:any;
  points:any;
  businessId:any;
  actions:any;

  constructor(id:any, title:any, description:any, points:any, businessId:any, actions:any) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.points = points;
    this.businessId = businessId;
    this.actions = actions;
  }

}
