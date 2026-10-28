export type ResultKey = "ugc" | "commercial" | "product" | "creative";
export const quizQuestions: {text:string; options:{label:string; key:ResultKey}[]}[] = [
      {
        text: "What's your brand's biggest goal right now?",
        options: [
          { label: "Build trust with real customer voices", key: "ugc" },
          { label: "Look premium, polished and professional", key: "commercial" },
          { label: "Sell a specific product visually", key: "product" },
          { label: "Stand out and be memorable", key: "creative" }
        ]
      },
      {
        text: "Where will most of this content live?",
        options: [
          { label: "Instagram Reels / TikTok", key: "ugc" },
          { label: "YouTube / brand website", key: "commercial" },
          { label: "Paid ad campaigns", key: "product" },
          { label: "Anywhere fun and shareable", key: "creative" }
        ]
      },
      {
        text: "What best describes your industry?",
        options: [
          { label: "Tech, SaaS or a corporate brand", key: "commercial" },
          { label: "Beauty, fashion or food", key: "product" },
          { label: "Personal brand, coach or creator", key: "ugc" },
          { label: "Entertainment or something creative", key: "creative" }
        ]
      },
      {
        text: "What tone do you want your videos to have?",
        options: [
          { label: "Authentic and relatable", key: "ugc" },
          { label: "Sharp, premium and confident", key: "commercial" },
          { label: "Bold and stylish", key: "product" },
          { label: "Playful and fun", key: "creative" }
        ]
      }
    ];
export const quizResults = {
      ugc: {
        title: "UGC & Talking-Head Edits",
        desc: "Your brand thrives on authenticity. Raw, relatable, creator-style edits with a real face and voice will build trust fastest.",
        filter: "UGC Product Ad"
      },
      commercial: {
        title: "Commercial & Brand Reels",
        desc: "You need polish. Clean cuts, confident pacing and a premium look that positions your brand as the professional choice.",
        filter: "Commercial Tech Reel"
      },
      product: {
        title: "Promotional Product Ads",
        desc: "Your content should sell on sight. Bold, stylish, product-first edits built to convert scrollers into customers.",
        filter: "Fashion & Apparel Promotional Ads"
      },
      creative: {
        title: "Corporate & Industrial Marketing",
        desc: "You want to be taken seriously. Polished, professional marketing content built for corporate and industrial brands.",
        filter: "Car Edit"
      }
    };
