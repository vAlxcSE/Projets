import { useNavigate } from 'react-router-dom'
import search from '../public/search.png';

"use client"

const SearchBar = () => {
    const router = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");

        if (name) {
            router.push(`/list?name=${name}`);
        }
    };
    
    // const searchBar = () => {
    //     const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    //         e.preventDefault();
    //         const forData = new FormData (e.currentTarget);
    //         const name= formData.get("name");
    //         if (name) {
    //             router.push(`/list?name=${name}`);
    //         }
    // };
    //};

    return ( 
    <form className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1 " onSubmit ={handleSearch}>
        <input 
            type="text" 
            name="name" 
            placeholder="Rechercher" 
            className="flex-1 bg-transparent outline-none"/>
        <button className="cursor-pointer"> 
            <img src ={search} alt="" width={16} height ={16}/>
        </button>
    
    </form>
    )
}

export default SearchBar