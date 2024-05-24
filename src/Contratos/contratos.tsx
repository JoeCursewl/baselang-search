import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Contratos() {
    const { id_contrato } = useParams()

    useEffect(() => {
        console.log(id_contrato)
    }, [id_contrato])

    return (
        <section>
            <div>
                <h1>Contrato</h1>
                <h2>{id_contrato}</h2>
            </div>
        </section>
    )
}