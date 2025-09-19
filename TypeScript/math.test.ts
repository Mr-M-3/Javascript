import { describe, it, expect } from 'vitest';
import { cadenasConTresOMasLetras } from './Ejercicio1.ts';

describe('cadenasConTresOMasLetras', () => {
    it('should return only strings with 3 or more letters', () => {
        expect(cadenasConTresOMasLetras('uno', 'dos', 'a', 'be', 'tres')).toEqual(['uno', 'dos', 'tres']);
    });

    it('should return an empty array if no strings have 3 or more letters', () => {
        expect(cadenasConTresOMasLetras('a', 'b', 'c')).toEqual([]);
    });

    it('should return all strings if all have 3 or more letters', () => {
        expect(cadenasConTresOMasLetras('cat', 'dog', 'rat')).toEqual(['cat', 'dog', 'rat']);
    });

    it('should handle an empty input', () => {
        expect(cadenasConTresOMasLetras()).toEqual([]);
    });

    it('should handle strings with exactly 3 letters', () => {
        expect(cadenasConTresOMasLetras('uno', 'dos', 'abc')).toEqual(['uno', 'dos', 'abc']);
    });

    it('should handle strings with spaces', () => {
        expect(cadenasConTresOMasLetras('a b', 'abc', 'de')).toEqual(['a b', 'abc']);
    });

    it('should handle strings with special characters', () => {
        expect(cadenasConTresOMasLetras('a$', 'b#c', '123')).toEqual(['b#c', '123']);
    });

    it('should handle duplicate strings', () => {
        expect(cadenasConTresOMasLetras('uno', 'uno', 'dos')).toEqual(['uno', 'uno', 'dos']);
    });
});