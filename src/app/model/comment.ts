export class Comment {
    id: number;
    message: string;

    constructor(id: number, message:string){
        this.id =id;
        this.message = message;
    }

    public getMessage():string {
        return this.message;
    }
}
