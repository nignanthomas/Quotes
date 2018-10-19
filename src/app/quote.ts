export class Quote {

  public showDetails:boolean;
  public submitDate:Date;

  constructor (
    public id:number,
    public textQuote:string,
    public author:string,
    public upVote:number,
    public downVote:number,
    public username:string) {

      this.showDetails = false;
      this.submitDate = new Date();
  }

}
