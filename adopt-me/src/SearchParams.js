import { useEffect, useState,useContext } from "react";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";


const ANIMALS=["bird","cat","dog","rabbit","reptile"]

const SearchParams = () => {
  // const location = "Kolkata,India";
  
    const [location,setLocation]=useState("")
    const [animal,setAnimal]=useState("")
    const [breed,setBreed]=useState("")
    const [BREEDS] =useBreedList(animal)
    const [pets,setPets]=useState([])
    const [theme,setTheme]=useContext(ThemeContext)

    useEffect(()=>{

      requestPets()

    },[]) 

    async function requestPets(){
      const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
      )
      const json = await res.json()

      setPets(json.pets)
    }

  
  return (
    <div className="search-params">
      <form
      
      onSubmit={e=>{
        e.preventDefault();
        requestPets();

      }}
      
      >
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" 
          onChange={(e)=>{ setLocation(e.target.value)

          }}
          />
        </label>
        <label htmlFor="animals">
          Animal 
          <select id="animals"
          value={animal}
          onChange={(e)=> {
            setAnimal(e.target.value)
            setBreed("")
          }}
          onBlur={(e)=>{

            setAnimal(e.target.value)
            setBreed("")

          }}
          
          >
            <option/>
            {ANIMALS.map((animals)=> {
              return (
                <option key={animals} value={animals}>
                  {animals}
                </option>
              )
            })}

          </select>

        </label>
        <label htmlFor="breeds">
          Breed
          <select id="breeds"
          value={breed}
          onChange={(e)=> {

            setBreed(e.target.value)
            
          }}
          onBlur={(e)=>{

            
            setBreed(e.target.value)

          }}
          
          >
            <option/>
            {BREEDS.map((breeds)=> {
              return (
                <option key={breeds} value={breeds}>
                  {breeds}
                </option>
              )
            })}

          </select>

        </label>
        <label htmlFor="theme">
          Theme 
          <select value ={theme} 
          onChange={e =>setTheme(e.target.value)}
          onBlur={e=>setTheme(e.target.value)}>
            <option value="peru">Peru</option>
    <option value="darkblue">Dark Blue</option>
    <option value="chartreuse">Chartreuse</option>
    <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button style={{backgroundColor:theme}}>Submit</button>
      </form>
     <Results pets={pets}/>
    </div>
  );
};


export default SearchParams;