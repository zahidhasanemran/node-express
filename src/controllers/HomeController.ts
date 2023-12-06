import { Request, Response } from "express";
import { Item } from "../libs/types"

class HomeController {

  private static items: Item[] = [
    {id: 1, name: 'Zahid Hasan Emran'},
    {id: 2, name: 'Khadiza binte Emran'},
  ];

  public static getItems(req: Request, res: Response):void {
    res.json(HomeController.items);
  }

  public static addItem(req: Request, res: Response):void {
    const newItem: Item = req?.body?.item;
    HomeController.items.push(newItem);
    console.log(newItem )
    res.status(201).json({message: 'Items added successfully', item: newItem})
  }

  public static updateItem(req: Request, res: Response):void {
    const index: number = Number(req?.params?.index);
    const updatedItem: Item = req?.body?.item;
    
    HomeController.items[index] = updatedItem;
    res.json({message: 'Item updated', item: updatedItem})
  }

  public static deletedItem(req: Request, res: Response):void {
    const index: number = Number(req?.params?.index);
    const deletedItem: Item | undefined = HomeController.items.splice(index, 1)[0];

    if(deletedItem){
      res.json({message: 'Item deleted', item: deletedItem});
    }else{
      res.status(404).json({message: 'Item not founded'});
    }
  }

  public static index(req: Request, res: Response):void {
    res.send("Hello world from HomeController")
  }

  public static about(req: Request, res:Response):void {
    res.send("i am about page ")
  }






}

export default HomeController;