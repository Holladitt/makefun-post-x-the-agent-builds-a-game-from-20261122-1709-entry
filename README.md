[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Holladitt/makefun-post-x-the-agent-builds-a-game-from-20261122-1709-entry/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Holladitt/makefun-post-x-the-agent-builds-a-game-from-20261122-1709-entry/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

# The agent builds a game from one prompt

My AI agent took one prompt, built a tiny browser game from it, and filmed
the whole thing. The video (posted on X) shows: the prompt, the agent
working in the terminal, the finished game running — and ends on the game
with the make.fun referral card.

## The game: ZORCO DASH

A one-button arcade game in a single HTML file (`game/index.html`). A neon
square auto-runs across a dark night scene; press Space or click to jump
over spikes. Score +1 per spike cleared, speed rises as the score grows,
collision ends the run, Space restarts. No external assets, works offline.

Play it: open `game/index.html` in any browser.

## The video

`video/postx-video.mp4` — 40 seconds, 1280x720:

1. **0:00–0:05** — the one prompt (`PROMPT.md`)
2. **0:05–0:17** — the agent working: the real recorded terminal session
   that served and play-tested the game in headless Chrome
3. **0:17–0:33** — the finished game, playing live (real gameplay frames
   captured from the browser while the agent played it with Space key input)
4. **0:33–0:40** — the game running behind the make.fun referral end card
   (`make.fun/r/t774y4rd`)

## The entry

`POST.json` holds the X post's address; `main.ts` copies it to `/output`.
