package com.estimator.models;

public class EstimationRequest {
    private double traffic;
    private double storage;
    private double compute;

    // Getters and Setters

    public double getTraffic() {
        return traffic;
    }

    public void setTraffic(double traffic) {
        this.traffic = traffic;
    }

    public double getStorage() {
        return storage;
    }

    public void setStorage(double storage) {
        this.storage = storage;
    }

    public double getCompute() {
        return compute;
    }

    public void setCompute(double compute) {
        this.compute = compute;
    }
}
