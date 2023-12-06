import { Request, Response } from "express";

class HomeController {
  public static index(req: Request, res: Response):void {
    res.send("Hello world from HomeController")
  }

  public static about(req: Request, res:Response):void {
    res.send("i am about page ")
  }
}

export default HomeController;