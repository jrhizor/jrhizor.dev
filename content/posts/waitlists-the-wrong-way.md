---
title: "Building a Waitlist (The Wrong Way)"
date: 2024-05-13T02:25:45-08:00
draft: false
---

Last December, I tried to start a bootstrapped SaaS "the right way". According to the advice of several bootstrappers, one possible process to find a good niche SaaS idea is:

1. Think of a problem.
2. Verify if it's a problem from search volume.
3. Run search ads on intent-based keywords to drive waitlist signups.
4. Wait...
5. Build the product once the waitlist is large enough.

The purpose of this approach is to prevent building something people don’t need. I’ve run into this before with Stoat (a useful but non-critical devtools project with no paying users) and MealByMeal (a calorie tracker with some good SaaS characteristics but difficult/costly user acquisition).

To course correct, I blindly followed the waitlist method for [PresetBot](https://presetbot.com/), an API for applying Adobe Lightroom presets (image filters) on many images quickly and cheaply. I thought it might be useful because I wanted to apply a batch of image transformations across a set of promotional images for MealByMeal so they would share a uniform visual style.

My first step was to use the Google Ads Keyword Planner. The term “lightroom api” was searched for ~50 times a month in the US. However, there were very few search results focusing on this term. The first search result is for the Adobe website, which has a “lightroom api” that is focused on catalog management, not image transformations. Adobe actually does offer this functionality, but it’s hidden away under a feature of the Photoshop API and costs an extortionate amount. So one of the big questions was whether or not searchers wanted an image transformation API or the catalog management API. Since my search was for an image transformation API, I was obviously biased, but I recognized that this was something I needed to test.

To do this, I set up a simple landing page. I made manual before/after examples using Photoshop and set up a waitlist page using [Momentum](https://momentum.page/), a dead simple tool for spinning up waitlist sites. I regret using this tool because it was very rough around the edges to the point of failure. It couldn’t handle duplicate signups, there wasn’t a way to manage your subscription, it was nearly impossible to contact support, and eventually it was just unable to publish changes. I’ve been using a combination of [Carrd](https://carrd.co/) and [Waitlist](https://getwaitlist.com/) for later waitlist building attempts.

First, I reached out to a number of people in the Lightroom preset space. I ended up talking to the founder of a Lightroom preset sales site. His site wasn’t doing well, but he seemed excited about the idea for PresetBot. I overvalued his support more than I should have since he wasn’t the target audience and wasn’t willing to pay. **This is the first big red flag I missed.**

I started running ads for image filtering and editing terms, but mostly for the exact term “Lightroom API”. I targeted globally without many restrictions to focus on getting cheap leads.

To my surprise, the waitlist grew rapidly. I upped the ad spend and signups kept rolling in. I started to think this was a gold mine! I raised the prices on the landing page and the waitlist kept growing. I started posting MRR goals on Twitter around $50k/mo (which seemed plausible if I could keep this up and convert 10-20% of waitlist users).  
  
I emailed everyone on the waitlist to learn about their use cases, but I didn’t get any responses. At the same time, I haven’t ever responded to emails for waitlists I signed up to, so I didn’t think it was a big deal. **This was the second major red flag I missed.**

When the waitlist reached 100 people, I went to work. I tested open source Lightroom alternatives like Darktable and RawTherapee and other image editing tools to approximate the application of Lightroom presets. After a couple of weeks, I had a decent approximation and set up a site based on shadcn’s [Taxonomy](https://tx.shadcn.com/) project to sell the product.

I spent a couple more weeks trying to scale up the API/billing infrastructure. I explored tools like [Moesif](https://www.moesif.com/), [Archetype](https://www.archetype.dev/), [Blobr](https://www.blobr.io/), and [AmberFlo](https://www.amberflo.io/). Surprisingly, two of the tools were in the process of pivoting away from API billing at the time, and the other tools didn’t do quite what I wanted. Others like [Metronome](https://metronome.com/)/[Orb](https://www.withorb.com/) did more of what I actually wanted, but they cost too much initially, so I built a simple usage-based API billing system myself. Instead of working with design partners just to see if it solved their use cases, I started productionizing the service. **This was the third red flag.**

Then came launch day! I submitted PresetBot to ProductHunt without much fanfare and emailed the 250-person waitlist. Immediately, a large number of the emails bounced or autoresponded with “mailbox full” alerts (uh oh). _None_ of the waitlist signups registered. However, ads were still running, and those users were registering for the site and logging in, but not responding to emails or purchasing.

My belief in the “validation” I did evaporated. My conclusion is that the waitlist consisted mostly of bot/clickfarm users, mainly from India/Pakistan. It's confusing why anyone would pay bots to target search terms as specific as “lightroom api”. The only entity that seemed to benefit is Adobe, but it seems highly unlikely they would commit click fraud on random Adobe-branded search terms.

At the end of the day, I was out a couple hundred dollars in ad spend and a month of building time. It was also a big emotional blow because there seemed to be a lot of money locked away behind the launch, so I had very high expectations after a very fast development sprint.

But in many ways, this belief was the problem. I didn’t dig into the areas that had the most doubts, like the lack of real people talking about this problem or the lack of responses from “people” on the waitlist.

At the time of writing, there have been _zero_ PresetBot purchases, except for one attempted fraudulent charge. I learned a lesson about starting a niche SaaS “the right way” and the importance of being brutally honest with yourself and focusing on the risky areas that raise doubt.

I should have focused all of my efforts on those areas of doubt. Those areas hid the risk that needed to be minimized in order to earn confidence in the work’s direction. Building PresetBot illustrated the importance of listening to customers and the fact that without talking to your customers, you probably don’t have any.
