export class Quote {

  public showDetails:boolean;
  constructor (
    public id:number,
    public textQuote:string,
    public author:string,
    public upVote:number,
    public downVote:number,
    public username:string) {

      this.showDetails = false;
  }

}
