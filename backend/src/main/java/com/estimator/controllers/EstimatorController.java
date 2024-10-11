package com.estimator.controllers;

import org.springframework.web.bind.annotation.*;
import com.estimator.services.EstimatorService;
import com.estimator.models.EstimationRequest;

@RestController
@RequestMapping("/api/estimate")
public class EstimatorController {

    private final EstimatorService estimatorService;

    public EstimatorController(EstimatorService estimatorService) {
        this.estimatorService = estimatorService;
    }

    @PostMapping
    public double getEstimate(@RequestBody EstimationRequest request) {
        return estimatorService.calculateCost(request);
    }
}
