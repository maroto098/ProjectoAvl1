export function UserList(string){
    this.json = JSON.parse(string);

    this.addUser = (name ,date) =>{
    
        this.json.users.push({
            "name":name,
            "date":date,
            "questions":[]
        });
    
    };
    
    this.addQuestion = (userId,pregunta) =>{
    
        this.json.users[userId].questions.push(pregunta);
    };
    
    this.getQuestions =(userId)=>{
        let questions = this.json.users[userId].questions;
        return questions;
    };
    this.getUsers =()=>{
        let users = this.json.users;
        return users;
    };
    
    this.getName =(userId)=>{
    let name = this.json.users[userId].name;
    return name;
    };
    this.changeDate=(userId)=>{

        this.json.users[userId].date = Date.now();

    };
    this.getDate =(userId)=>{
        let date = this.json.users[userId].date;
        return date;
    };
    
};
   