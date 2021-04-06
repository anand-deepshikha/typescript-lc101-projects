import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket
{
    name:string;
    totalCapacityKg:number;
    cargoItems:Cargo[]=[];
    astronauts:Astronaut[]=[];
    constructor(name:string,totalCapacityKg:number){
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;

    }
    sumMass(items:Payload[]):number{
        
        let sum:number=0;
        /*if(typeof items==='undefined')
            return 0;
            else{
                items.forEach(element => {
            
                    sum += element.massKg;
                 });
                return sum;
            }*/
            let i:number=0;
            for(i=0;i<items.length;i++)
            {
                sum+=items[i].massKg;
            }
         return sum;
    }
    currentMassKg():number{
        let sum1:number=this.sumMass(this.astronauts);
        sum1+=this.sumMass(this.cargoItems);
        return sum1;
    }
    canAdd(item:Payload):boolean
    {
        if(this.currentMassKg()+item.massKg<=this.totalCapacityKg)
         return true;
        else
         return false;
    }
    addCargo(cargo:Cargo):boolean{
        if(this.canAdd(cargo))
        {
            /*if(typeof this.cargoItems==='undefined')
            {
                this.cargoItems.unshift(cargo);
                return true;
            }
            else
            {*/
                this.cargoItems.push(cargo);
                return true;
            //}
            
        }
        else
         return false;
    }
    addAstronaut(astronaut:Astronaut):boolean{
        if(this.canAdd(astronaut)){
            /*if(typeof this.astronauts==='undefined')
            {
                this.astronauts[0]=astronaut;
                return true;
            }
            else
            {*/
                this.astronauts.push(astronaut);
            return true;
            //}
            
        }
        else
         return false;
    }
}