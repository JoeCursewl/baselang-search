
import buscarSvg from '../assets/searchmagnifierinterfacesymbol1_79893.svg'
import borrarSvg from '../assets/cancel_close_delete_exit_logout_remove_x_icon_123217.svg'
import './Buscador.css'
import { useState } from "react";
export default function Buscador({ onSubmit }) {
    const [formContent, setFormContent] = useState("")
    const haveSearch = formContent != ""
    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(formContent) }}>

                <div id="Content">
                    <span> <img src={buscarSvg} color='white' alt="Buscar" style={{ width: "1em", cursor: "pointer" }} /></span>
                    <input onChange={(e) => { setFormContent(e.target.value) }} value={formContent} type="text" name="tsp" id="tsp" />
                    {haveSearch ? <img src={borrarSvg} alt="Borrar" style={{ width: "1em", cursor: "pointer" }} onClick={() => { setFormContent("") }} /> : <div style={{ width: "1em" }}></div>}
                </div>
            </form>
        </>
    )
}