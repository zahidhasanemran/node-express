import { Request, Response } from "express";
import { MongoClient, Db, Collection } from "mongodb";
import { Item } from "../libs/types"

class HomeController {

  private static collectionName = "items";
  private static collection: Collection<Item>
  private static db: Db;

  private static async connectToDb (): Promise<void>{
    const client = await MongoClient.connect('mongodb+srv://nexusemran:123456780@firsttry.jezp7ok.mongodb.net/?retryWrites=true&w=majority',{});
    HomeController.db = client.db("nodeexpress");
    HomeController.collection = HomeController.db.collection(HomeController.collectionName)
  }

  public static async getItems(req: Request, res: Response):Promise<void> {
    try {
      if(!HomeController.db){
        await HomeController.connectToDb();
      }

      //@ts-ignore
      const allItem = await HomeController.collection.find({}).toArray();
      res.json(allItem)

      
    } catch (error) {
      console.error("Error fetching items:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  public static async addItem(req: Request, res: Response):Promise<void> {

    try {
      if (!HomeController.db) {
        await HomeController.connectToDb();

      }
      const newItem: Item = req?.body?.item;
      await HomeController.db.collection(HomeController.collectionName).insertOne(newItem)
    } catch (error) {
      console.error("Error adding item:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
   
    res.status(201).json({ message: 'Item added successfully' });
  }

  public static async updateItem(req: Request, res: Response):Promise<void> {

    try {
      
      if(!HomeController.db){
        await HomeController.connectToDb();
      }
      
      const index: number = Number(req?.params?.index);
      const updatedItem: Item = req?.body?.item;
      
      await HomeController.db.collection(HomeController.collectionName).updateOne(
        { id: index }, // Assuming _id is the unique identifier
        { $set: updatedItem }
      );
      res.json({ message: 'Item updated', item: updatedItem });

    } catch (error) {
      console.error("Error updating item:", error);
      res.status(500).json({ message: "Internal Server Error" });
      
    }
  }

  // public static async deletedItem(req: Request, res: Response):Promise<void> {

  //   try {
  //     if(!HomeController.db){
  //       await HomeController.connectToDb();
  //     }
  //     const index: number = Number(req?.params?.index);
  //     const deletedItem = await HomeController.db.collection(HomeController.collectionName).findOneAndDelete({ index });

  //     if (deletedItem.value) {
  //       res.json({ message: 'Item deleted', item: deletedItem.value });
  //     } else {
  //       res.status(404).json({ message: 'Item not found' });
  //     }
      
  //   } catch (error) {
  //     console.error("Error deleting item:", error);
  //     res.status(500).json({ message: "Internal Server Error" });
  //   }

   
  // }

  public static index(req: Request, res: Response):void {
    res.send("Hello world from HomeController")
  }

  public static about(req: Request, res:Response):void {
    res.send("i am about page ")
  }






}

export default HomeController;