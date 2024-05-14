"use client";

import React from "react";

const FAQS = [
  {
    title: "Sunday  |  Closed",
    desc: "You can register for the AI Conference 2023 by visiting our registration page. Follow the simple steps to complete your registration and secure your spot at the conference.",
  },
  {
    title: "Monday  |  9:00 - 18:00",
    desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
  },
  {
    title: "Tuesday  |  9:00 - 18:00",
    desc: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
  },
  {
    title: "Wednesday  |  9:00 - 18:00",
    desc: "There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment. I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything.",
  },
  {
    title: "Thursday  |  9:00 - 18:00",
    desc: "I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything. If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
  },
  {
    title: "Friday  |  9:00 - 18:00",
    desc: "There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment. I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything.",
  },
  {
    title: "Saturday  |  9:00 - 18:00",
    desc: "There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment. I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <></>
  );
}

export default Faq;
