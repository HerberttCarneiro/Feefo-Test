package com.feefo.normalizingjobtitles.service;

import java.util.List;

public class JobTitleNormaliser {
    private List<String> normalizedJobTitles;
    private JobTitleMatcher matcher;

    public JobTitleNormaliser(List<String> normalizedJobTitles) {
        this.normalizedJobTitles = normalizedJobTitles;
        this.matcher = new JobTitleMatcher();
    }

    //finding the best match from a predefined list of normalized job titles
    public String normalise(String inputJobTitle) {
        String bestMatch = null;
        double highestScore = 0.0;

        for (String normalizedTitle : normalizedJobTitles) {
            double score = matcher.calculateSimilarity(inputJobTitle, normalizedTitle);
            String result = String.format("%s similar to %s = %s", inputJobTitle, normalizedTitle, score);
            System.out.println(result);
            if (score > highestScore) {
                highestScore = score;
                bestMatch = normalizedTitle;
            }
        }

        return bestMatch;
    }
}
