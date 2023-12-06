import { Request, Response } from "express";

class ContactController {
  public static index(req: Request, res: Response){
    res.send("i am contact us page ")
  }
}


export default ContactController;