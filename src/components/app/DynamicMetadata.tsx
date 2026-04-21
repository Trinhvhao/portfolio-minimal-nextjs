"use client";

import { useEffect } from 'react';

export function DynamicMetadata() {
    useEffect(() => {
        const sections = [
            { id: 'hero', selector: '[data-section="hero"]' },
            { id: 'about', selector: '[data-section="about"]' },
            { id: 'projects', selector: '[data-section="projects"]' },
            { id: 'experience', selector: '[data-section="experience"]' },
            { id: 'skills', selector: '[data-section="skills"]' },
            { id: 'contact', selector: '[data-section="contact"]' }
        ];

        const observers: IntersectionObserver[] = [];

        sections.forEach(({ id, selector }) => {
            const element = document.querySelector(selector);
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            // Only update URL hash for shareability — DO NOT modify document.title
                            // Googlebot captures title at crawl time; dynamic title changes are unreliable
                            if (id !== 'hero') {
                                window.history.replaceState(null, '', `#${id}`);
                            } else {
                                window.history.replaceState(null, '', window.location.pathname);
                            }
                        }
                    });
                },
                {
                    threshold: 0.5,
                    rootMargin: '-100px 0px -100px 0px'
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    return null;
}
