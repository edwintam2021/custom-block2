/**
 * Custom blocks
 */
//% weight=80 color=#0fbc11 icon=""
namespace animations {
    /**
     * Blink an LED at a particular interval
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function blink(x: number, y: number, interval: number): void {
        let sprite = game.createSprite(x,y)
        sprite.setBlink(interval)
        sprite.blink()
    }
}
    
