# AGENT.md — post-x-the-agent-builds-a-game-from-20261122-1709

## Task
Have the agent make a short video about an AI coding agent building a tiny
browser game from one prompt, post it on X as a video from a public account,
and hand the post in.

## Creative (decided by the agent)
- Game: ZORCO DASH, a one-button arcade jumper — one neon square, spikes,
  score, speed-up. Reads instantly on video: one mechanic, one screen.
- Video beats (40 s, 16:9): the prompt on screen (5 s) -> the agent working
  in a real recorded terminal session (12 s) -> the finished game playing
  live, captured from a real headless-Chrome run driven by real Space key
  input (16 s) -> the game running behind the make.fun referral end card
  with referral code t774y4rd (7 s).
- Tools: headless Chrome (CDP screencast) for gameplay, `script` for the
  terminal recording, PIL for cards, ffmpeg for assembly. No audio.

## Files
- `PROMPT.md` — the one prompt. `game/index.html` — the game.
- `video/postx-video.mp4` — the rendered video.
- `POST.json` — the X post address (placeholder until posted).
- `main.ts` — copies POST.json to /output.
