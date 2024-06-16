package com.feefo.normalizingjobtitles.service;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class SimilarityTest {
    @Test
    public void testSimilarity() {
        // Test cases
        assertEquals(0.5, StringSimilarity.similarity("hello", "hola"), 0.1);
        assertEquals(1.0, StringSimilarity.similarity("", ""), 0.0001);
        assertEquals(1.0, StringSimilarity.similarity("abc", "abc"), 0.0001);
        assertEquals(0.75, StringSimilarity.similarity("cat", "cart"), 0.0001);
        assertEquals(0.0, StringSimilarity.similarity("hello", ""), 0.0001);
        assertEquals(0.0, StringSimilarity.similarity("", "world"), 0.0001);
    }

    @Test
    public void testEditDistance() {
        //completely different
        assertEquals(2, StringSimilarity.editDistance("voo", "ovo"));
        assertEquals(4, StringSimilarity.editDistance("hello", "world"));

        // that differ by one letter
        assertEquals(1, StringSimilarity.editDistance("apple", "aple"));

        // equals
        assertEquals(0, StringSimilarity.editDistance("abc", "abc"));

        // different sizes
        assertEquals(3, StringSimilarity.editDistance("kitten", "sitting"));

        // empty
        assertEquals(7, StringSimilarity.editDistance("", "editing"));
        assertEquals(7, StringSimilarity.editDistance("editing", ""));
        assertEquals(0, StringSimilarity.editDistance("", ""));
    }
}
