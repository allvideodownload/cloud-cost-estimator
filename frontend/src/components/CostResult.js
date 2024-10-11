import React from 'react';
import PropTypes from 'prop-types';
import './CostResult.css'; // Import CSS for styling (optional)

const CostResult = ({ results, optimizationSuggestions }) => {
    return (
        <div className="cost-result-container">
            <h2>Cost Estimation Results</h2>

            {results && results.length > 0 ? (
                <div className="results">
                    <h3>Estimated Costs</h3>
                    <table className="results-table">
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Estimated Cost ($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.service}</td>
                                    <td>${item.cost.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h3>Total Estimated Cost: ${results.reduce((total, item) => total + item.cost, 0).toFixed(2)}</h3>

                    {optimizationSuggestions && optimizationSuggestions.length > 0 && (
                        <div className="optimization-suggestions">
                            <h3>Optimization Suggestions</h3>
                            <ul>
                                {optimizationSuggestions.map((suggestion, index) => (
                                    <li key={index}>{suggestion}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <p>No cost data available. Please input the required fields to get an estimate.</p>
            )}
        </div>
    );
};

CostResult.propTypes = {
    results: PropTypes.arrayOf(
        PropTypes.shape({
            service: PropTypes.string.isRequired,
            cost: PropTypes.number.isRequired,
        })
    ).isRequired,
    optimizationSuggestions: PropTypes.arrayOf(PropTypes.string),
};

export default CostResult;
