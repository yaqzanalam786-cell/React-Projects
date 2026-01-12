import config from "../Config/config";

import { Client, Databases, Permission, Role, Storage, Query, ID } from "appwrite";


export class Service {
    client = new Client();
    databases;
    storage;
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)   
        .setProject(config.appwriteProjectId); 
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    
    async createDocument ({content, featuredImage, userId}){
        try {
            return await this.databases.createDocument(config.appwriteDBId,  config.appwriteTableId, ID.unique(),  {
               
                content,
                featuredImage,
                userId,
                
              
            } )
        } catch (error) {
            
            console.log("Appwrite serive :: createDocument :: error", error);
        }
    }

   
    async updateDoc ($id,{content, featuredImage, userId}){
        try {
            return await this.databases.updateDocument(config.appwriteDBId,  config.appwriteTableId, $id,  {
               content,
               featuredImage,
                userId,
                
                
            } )
        } catch (error) {
            console.log("Appwrite serive :: updateDoc :: error", error);
        }
    }

  
    async deletdoc ($id){
        try {
            return await this.databases.deleteDocument(config.appwriteDBId,  config.appwriteTableId,   $id);
            return true;
        } catch (error) {
            console.log("Appwrite serive :: deletdoc :: error", error);
            return false
        }
    }

   
    async getpost ($id){
        try {
            return await this.databases.getDocument(config.appwriteDBId,  config.appwriteTableId,  $id)
        } catch (error) {
           console.log("Appwrite serive :: getpost :: error", error);
            return false
        }
    }

 
    async listdocs (queries = [Query.equal("userId", userId)]){
        try {
            return await this.databases.listDocuments(config.appwriteDBId,  config.appwriteTableId, queries)
        } catch (error) {
             console.log("Appwrite serive :: listdocs :: error", error);
            return false
        }
    }

   
    async filecreate (file){
        try {
            return await this.storage.createFile(config.appwriteBucketId,  ID.unique(),  file)
        } catch (error) {
            console.log("Appwrite serive :: filecreate :: error", error);
            return false
        }
    }

    
    async dltfile (fileId){
        try {
            return await this.storage.deleteFile(config.appwriteBucketId,  fileId)
        } catch (error) {
            console.log("Appwrite serive :: dltfile :: error", error);
            return false
        }
    }

   

fileprev(fileId) {
    if (!fileId) return null;
    try {
        
        return this.storage.getFileView(
            config.appwriteBucketId, 
            fileId
        );
    } catch (error) {
        console.log("Appwrite service :: fileprev :: error", error);
        return null;
    }
}


}
const service = new Service()
export default service