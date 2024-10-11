import React, { useState } from "react";
import axios from "axios";

const CostEstimatorForm = () => {
    const [traffic, setTraffic] = useState("");
    const [storage, setStorage] = useState("");
    const [compute, setCompute] = useState("");
    const [cost, setCost] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("/api/estimate", {
            traffic: parseFloat(traffic),
            storage: parseFloat(storage),
            compute: parseFloat(compute),
        });
        setCost(response.data);
    };

    return (
        <div>
            <h2>Cloud Cost Estimator</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Traffic" value={traffic} onChange={(e) => setTraffic(e.target.value)} required />
                <input type="number" placeholder="Storage" value={storage} onChange={(e) => setStorage(e.target.value)} required />
                <input type="number" placeholder="Compute" value={compute} onChange={(e) => setCompute(e.target.value)} required />
                <button type="submit">Estimate Cost</button>
            </form>
            {cost && <p>Estimated Cost: ${cost}</p>}
        </div>
    );
};

export default CostEstimatorForm;
