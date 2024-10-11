package com.estimator.services;

import org.springframework.stereotype.Service;
import com.estimator.models.EstimationRequest;

@Service
public class EstimatorService {

    public double calculateCost(EstimationRequest request) {
        // Basic example: Calculate cost based on traffic, storage, compute
        double awsCost = request.getTraffic() * 0.02 + request.getStorage() * 0.03 + request.getCompute() * 0.05;
        double gcpCost = request.getTraffic() * 0.018 + request.getStorage() * 0.028 + request.getCompute() * 0.048;
        double azureCost = request.getTraffic() * 0.019 + request.getStorage() * 0.027 + request.getCompute() * 0.047;

        // Return average or compare based on user preference
        return Math.min(awsCost, Math.min(gcpCost, azureCost));
    }
}
