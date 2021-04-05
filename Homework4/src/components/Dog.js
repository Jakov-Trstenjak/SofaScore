import React from "react";
import DisplayDog from "./DisplayDog";


class Dog extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            dogs : [],
            dog : "Malinois",
            imageUrl : "https:\/\/images.dog.ceo\/breeds\/malinois\/n02105162_4719.jpg",
            allBreeds : {
                "affenpinscher": [],
                "african": [],
                "airedale": [],
                "akita": [],
                "appenzeller": [],
                "basenji": [],
                "beagle": [],
                "bluetick": [],
                "borzoi": [],
                "bouvier": [],
                "boxer": [],
                "brabancon": [],
                "briard": [],
                "cairn": [],
                "chihuahua": [],
                "chow": [],
                "clumber": [],
                "cockapoo": [],
                "border collie": [],
                "coonhound": [],
                "cotondetulear": [],
                "dachshund": [],
                "dalmatian": [],
                " great dane":[],
                "dhole": [],
                "dingo": [],
                "doberman": [],
                "entlebucher": [],
                "eskimo": [],
                "germanshepherd": [],
                "groenendael": [],
                "havanese": [],
                "husky": [],
                "keeshond": [],
                "kelpie": [],
                "komondor": [],
                "kuvasz": [],
                "labradoodle": [],
                "labrador": [],
                "leonberg": [],
                "lhasa": [],
                "malamute": [],
                "malinois": [],
                "maltese": [],
                "mexicanhairless": [],
                "mix": [],
                "newfoundland": [],
                "otterhound": [],
                "papillon": [],
                "pekinese": [],
                "pembroke": [],
                "pitbull": [],
                "german pointer": [],
                "pomeranian": [],
                "pug": [],
                "puggle": [],
                "pyrenees": [],
                "redbone": [],
                "golden retriever": [],
                "rottweiler": [],
                "saluki": [],
                "samoyed": [],
                "schipperke": [],
                "shiba": [],
                "shihtzu": [],
                "stbernard": [],
                "vizsla": [],
                "weimaraner": [],
                "whippet": []
            }
        }
    }

    
    constainsBreed(val) {
        return this.state.allBreeds.some(item => val === item);
    }

    searchInput  = event =>{
        let input =  event.target.value;

        if(this.constainsBreed(input)){
            
          this.setState({dog : input});     
          this.setState(
            { dogs: [...this.state.dogs, input] }
          )


          let request = fetch("https://dog.ceo/api/breed/"+input+"/images/random");

          if(request.status == "success"){
              this.setState({imageUrl : request.message});
          }
        }
    }

    render() {
          return (
            <div>
              <DisplayDog
                image={ this.imageUrl }
                title={ this.dog } 
                />
            </div>
          );
      }
    
}

export default Dog;