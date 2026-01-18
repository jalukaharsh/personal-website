---
title: "Vibe-coding (this website)"
description: "A sneak peek at exciting new features coming soon to this blog, including dark mode, search functionality, and more."
pubDate: 2026-01-18T07:15:00Z
tags: ["announcements", "roadmap", "features"]
draft: false
---

Vibe-coding is awesome! I vibe-coded around 60% of this website; it took me 2 months of sporadic work to complete it, and I can safely say that without AI it would've taken me at least 6 months. I think it's great for helping you get started, writing the boilerplate code, and getting you familiarized with the language syntax, if you're writing in a new language. 

In general, vibe-coding follows the same 'garbage-in, garbage-out' principle that most technical systems follow. This is not a problem, unless you expect the AI to give quality responses to garbage inputs. I like to treat it as an inexperienced but highly capable human being. If you don't give humans the proper context, they will also produce garbage output. 

That being said, there are real problems too. Unlike traditional systems, with AI, you sometimes have to deal with 'quality-in, garbage-out' too. The skill there is to be able to recognise when that happens and intervene. That is why I am skeptical of fully autonomous AI agents for coding. We might get there someday, but I don't think we're there yet. 

Slop code is another real problem. At present, AI is pretty good at generating code, but not so much at removing it once it becomes obsolete. If you don't review the code that's being generated, you'll end up with lots of sloppy dead code in your repository. The product still works, but you open yourself up to so many more lines to debug in the future when something inevitably breaks. 

This was probably the first project I've worked on where I used AI to write more code than I did myself. Some tips, also inspired by our team's AI tenets at work:
- It's still your code, own it. As long as your account is the one committing the code, you are answering for it. If you don't know what it does, don't push it.  
- Commit early and by yourself. I've tried experimenting with letting the agent commit as it works. The problem is that it's not very good at doing that, especially for open-ended tasks, and you end up with commits with hundreds of lines that are very hard to review. 
- Bite-sized tasks are better. The bigger the scope, the more the slop.

---

For those curious, I used Kiro to build this website. It uses Anthropic's models under the hood. I still haven't tried Antigravity or Cursor because I didn't feel the need to. I am curious though, and will try them when I have time. 

I did try coding with local models. I found that the coding responses for models with less than 10B parameters was almost purely garbage. I got semi-good outputs from gemma-3-12b, and the device I'm on (MacBook Pro 2024 M4 16GB) doesn't run anything stronger than that. I did buy a computer with AMD's Ryzen AI Max+ 395 ("Strix Halo") chip recently, which can run models up to 120b parameters, but I haven't tried coding with it yet. I will soon!