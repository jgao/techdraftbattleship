READ ME:

Due to many technical inconviences during the challenge (started with javascript, ran into CORS problems, then did Node, ran into SSL issues. Finally got some sample code that can hit the endpoints 15min before the end of the challenge.), I did not write down all of my thoughts in code, I would like to write it right now in text.

1) Picking initial ship strategy. It is important to have an efficient strategy to find the first clue at where a ship is. I want to start in the middle, the span outwards, first left and right, then up and down, X units at a time, where X is the largest ship still in the pool. This will ensure we find a ship, while not guessing every unit, causing slowness. This will be repeated (X will be updated) everytime we sink a ship, and must search for a new ship.

2) Once hit, check upwards and sideways, once find a second hit, we know the direction. Hit in that direction until either the ship is sunk, or we get a miss. If we sink the ship, repeat entire procedure, if miss, hit in the other direction.

3) For minor optimizations, always guess the direction towards the middle, as heuristically it is more likely for the ship to be longer towards the middle (this is true if thinking about units beside the edge of the board)

4) Cache all responses to hit request issued to the server. So if the algorithm calls upon hitting a block we already hit, we don't issue a new HTTP request, simply return the one from last time.