package com.feefo.normalizingjobtitles.service;


import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class JobTitleMatcherTest {
    @Test
    public void testCalculateSimilarity() {
        JobTitleMatcher matcher = new JobTitleMatcher();

        // Test cases
        System.out.println(matcher.calculateSimilarity("hello", "world"));
        assertEquals(1.0, matcher.calculateSimilarity("", ""), 0.0001);
        assertEquals(0.2, matcher.calculateSimilarity("hello", "world"), 0.1);
        assertEquals(0.5, matcher.calculateSimilarity("hello", "hola"), 0.1);
        assertEquals(0.8, matcher.calculateSimilarity("apple", "aple"), 0.0001);
    }
}
