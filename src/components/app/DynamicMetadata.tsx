"use client";

import { useEffect } from 'react';
import { updateMetadata, defaultMetadata, getSectionMetadata } from '@/lib/metadata';

export function DynamicMetadata() {
    useEffect(() => {
        updateMetadata(defaultMetadata);

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
                            if (id !== 'hero') {
                                window.history.replaceState(null, '', `#${id}`);
                            } else {
                                window.history.replaceState(null, '', window.location.pathname);
                            }

                            const metadata = getSectionMetadata(id);
                            updateMetadata(metadata);
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
