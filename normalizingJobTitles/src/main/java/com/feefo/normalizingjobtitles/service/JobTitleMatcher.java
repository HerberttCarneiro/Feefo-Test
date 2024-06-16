package com.feefo.normalizingjobtitles.service;

public class JobTitleMatcher {
    //Converts both input strings to lowercase and calculates the similarity
    public double calculateSimilarity(String s1, String s2) {
        return StringSimilarity.similarity(s1.toLowerCase(), s2.toLowerCase());
    }
}
