
import Buscador from "../components/Buscador";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useEffect } from "react";
import { useLoadingStore } from "../Loading-store.ts";

export default function Index({ }) {
    const navigate = useNavigate(); // Get navigation function
    const { setIsLoading } = useLoadingStore()

    // arroz
    useEffect(() => {
        setIsLoading(false);
    }, []);

    const onSubmit = (text) => {
        if (text.trim() !== '') {
            navigate(`/tsp/${text}`);
        }
    }
    
    return (

        <div style={{
            backgroundColor: "#f8f8f8", minHeight: "100vh", minWidth: "100vw", background:
                'radial-gradient(circle at center, white, rgba(128, 128, 128, 0.15) 100%)',
        }}>
            <NavBar props={{ marginBottom: "1em" }}></NavBar>
            <div id="Index">
                <Buscador onSubmit={onSubmit} />
            </div>
        </div>
    )
}