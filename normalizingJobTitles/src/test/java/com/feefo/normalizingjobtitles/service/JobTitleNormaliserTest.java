package com.feefo.normalizingjobtitles.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class JobTitleNormaliserTest {
    private JobTitleNormaliser normaliser;

    //Set up the list of titles and instantiate the class
    @BeforeEach
    public void setUp() {
        List<String> normalizedJobTitles = Arrays.asList("Architect", "Software engineer", "Quantity surveyor", "Accountant");
        normaliser = new JobTitleNormaliser(normalizedJobTitles);
    }

    //Test some cases
    @Test
    public void testNormalise() {
        assertEquals("Software engineer", normaliser.normalise("Software engineer"));
        assertEquals("Software engineer", normaliser.normalise("C# engineer"));
        assertEquals("Accountant", normaliser.normalise("Accountant"));
        assertEquals("Accountant", normaliser.normalise("Chief Accountant"));
    }
}
