import { describe, it, expect } from 'vitest';
import { reduce2 } from './Ejercicio2Optimizado.ts';

const sumArray = (x: number, r: number) => x + r;

describe ('reduce2',function(){
    it('suma de los elementos de un array', function()  {
        expect(reduce2([1,2,3], sumArray, 0)).toBe(6);
    });


});

//ejecutar un programa de estos : npx vitest run 'nombre'