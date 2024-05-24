import { Link, useParams } from "react-router-dom"
import './profile.css'
import NavBar from "../components/NavBar.tsx"
import { infoProfile } from "../services/infoProfile.ts"
import { useLoadingStore } from "../Loading-store.ts"
import { useEffect } from "react"
import { useState } from "react"
import LoaderInfo from "../components/loader-info.tsx"
export default function Profile() {
    const { text } = useParams()
    const { setLoading, API_URL, authToken } = useLoadingStore()
    const [loadingThing, setLoadingThing] = useState(false);
    const [profile, setProfile] = useState({});

    const getProfile = async () => {
        const { result, error } = await infoProfile(`${API_URL}data/all/read/bycode/${text}`, setLoadingThing, authToken, setProfile)

        if (error) {
            console.log(error)
        }

        console.log(profile?.id)
    }
    
    useEffect(() => {
        getProfile()
        console.log(profile?.administData?.contratosDataDTOS)
    }, [])



    return (
        <div className="General">

            <div className="ProfileContainer">
                <div id="container2">
                    <NavBar props={{ marginBottom: "1em", borderRadius: "0", backgroundColor: "transparent", border: "none", borderBottom: "1px solid #e3e3e3" }} />
                    <div className="interiorContainer">
                        <div className="Dashboard">

                            <div className="ListButtons first">
                                Resumen
                            </div>
                            <div className="ListButtons">
                                Clases
                            </div>
                            <div className="ListButtons">
                                Años
                            </div>
                        </div>

                        <div className="Content">

                            <div className="dash-container">
                                <div className="info-profile">
                                    <div className="info-codigo">
                                        <h1>{profile?.codigo}</h1>
                                    </div>
                                    <div className="img-profile">
                                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                    </div>
                                    <div className="personal-profile">
                                        <aside>{profile?.nombre}</aside>
                                        <p>{profile?.correoElectronicoPersonal}</p>
                                    </div>
                                </div>

                                <div className="information">
                                    <h1>Información</h1>
                                </div>

                                {loadingThing !== true ? <div className="info-person">
                                    <div className="info-container">
                                        <aside>Código</aside>
                                        <p>{profile?.codigo}</p>
                                        <aside>Nacionaliad</aside>
                                        <p>{profile?.nacionalidad}</p>
                                    </div>

                                    <div className="info-container">
                                        <aside>Correo Empresarial</aside>
                                        <p>{profile?.correoEmpresarial}</p>
                                        <aside>Género</aside>
                                        <p>{profile?.genero}</p>
                                    </div>

                                    <div className="info-container">
                                        <aside>Fecha de Ingreso</aside>
                                        <p>{profile?.fechaIngreso}</p>
                                        <aside>Edad</aside>
                                        <p>{profile?.edad}</p>
                                    </div>
                                </div> :
                                <div className="loader-div">
                                    <LoaderInfo />
                                </div>
                                }
                            </div>

                            <div className="dash-contratos">
                                <h1>Contratos</h1>
                                <div className="info-contratos">
                                    {profile?.administData?.contratosDataDTOS?.map((item) => {
                                        return (
                                            <Link to={`/contrato/${item?.id}`}>
                                                <div className="info-contrato-unique">
                                                    <p>{item?.area}</p>
                                                    <p>{item?.cargo}</p>
                                                    <p>{item?.horas} horas</p>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="dash-warnings">
                                <h1>Warnings</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div>
    )

}