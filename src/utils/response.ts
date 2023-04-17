export class GetSuccesfull{
    message:string
    data: any
    constructor(
        entity:string,
        data:any
    ){
        this.message = "Get list "+entity+" sucessfully",
        this.data = data
    }
}

export class GetIdSuccessfull{
    message:string
    data:any
    constructor(entity:string,data:any){
        this.message = "Get "+entity+" succesfully"
        this.data = data
    }
}

export class PostSuccessfull{
    message:string
    data:any
    constructor(entity:string,data:any){
        this.message = "Post " + entity+" successfully"
        this.data = data
    }
}

export class UpdateSuccessfully{
    message:string
    data:any
    constructor(entity:string,data:any){
        this.message = "Update "+entity+" successfully"
        this.data = data
    }
}

export class DeleteSuccessfull{
    message:string
    data:any
    constructor(entity:string,data){
        this.message = "Delete "+entity+" successfully"
        this.data = data
    }
}
