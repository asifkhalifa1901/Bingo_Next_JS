module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 48,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[project]/src/data/bingo-templates.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TEMPLATES",
    ()=>TEMPLATES,
    "TEMPLATE_ACCENT_BY_ID",
    ()=>TEMPLATE_ACCENT_BY_ID
]);
const TEMPLATE_ACCENT_BY_ID = {
    "party-food": "border-emerald-500/70 shadow-emerald-500/25",
    "team-meeting": "border-sky-500/70 shadow-sky-500/25",
    "classroom-vocab": "border-violet-500/70 shadow-violet-500/25",
    "movie-night": "border-amber-500/70 shadow-amber-500/20",
    "holiday-party": "border-rose-500/70 shadow-rose-500/25",
    "baby-shower": "border-lime-500/70 shadow-lime-500/25",
    "wedding-shower": "border-pink-500/70 shadow-pink-500/25",
    "sports-night": "border-orange-500/70 shadow-orange-500/25",
    "coding-buzzwords": "border-cyan-500/70 shadow-cyan-500/25",
    "travel-bucket": "border-teal-500/70 shadow-teal-500/25",
    "kids-party": "border-fuchsia-500/70 shadow-fuchsia-500/25",
    "music-festival": "border-purple-500/70 shadow-purple-500/25",
    "book-club": "border-indigo-500/70 shadow-indigo-500/25",
    workout: "border-lime-500/70 shadow-lime-500/25",
    conference: "border-blue-500/70 shadow-blue-500/25",
    icebreaker: "border-emerald-500/70 shadow-emerald-500/25",
    "classroom-math": "border-amber-500/70 shadow-amber-500/25",
    "language-learning": "border-sky-500/70 shadow-sky-500/25",
    "office-retirement": "border-rose-500/70 shadow-rose-500/25",
    "family-reunion": "border-teal-500/70 shadow-teal-500/25"
};
const TEMPLATES = [
    {
        id: "party-food",
        name: "Party Food Bingo",
        description: "Snacks and treats for game nights and parties.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Pizza",
            "Sushi",
            "Burgers",
            "Tacos",
            "Pasta",
            "Salad",
            "Fries",
            "Ice Cream",
            "Donuts",
            "Coffee",
            "Tea",
            "Smoothie",
            "Sandwich",
            "Soup",
            "Steak",
            "Curry",
            "Dumplings",
            "Ramen",
            "BBQ",
            "Chocolate",
            "Cookies",
            "Cake",
            "Juice",
            "Waffles",
            "Pancakes"
        ]
    },
    {
        id: "team-meeting",
        name: "Team Meeting Bingo",
        description: "Common phrases and moments from work calls.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Can you hear me?",
            "You're on mute",
            "Let's take this offline",
            "Quick question",
            "Circle back",
            "Deep dive",
            "Bandwidth",
            "Action items",
            "Follow up",
            "Roadmap",
            "Synergy",
            "Ping me",
            "Blocker",
            "Low-hanging fruit",
            "Win-win",
            "Touch base",
            "KPI",
            "Just to piggyback",
            "Hard stop",
            "Parking lot",
            "Next steps",
            "Alignment",
            "Deadline",
            "Any questions?",
            "Share my screen"
        ]
    },
    {
        id: "classroom-vocab",
        name: "Classroom Vocabulary",
        description: "A template for language or spelling practice.",
        size: 5,
        useFreeCenter: false,
        items: [
            "Adventure",
            "Brilliant",
            "Curious",
            "Discover",
            "Energy",
            "Future",
            "Growth",
            "Honor",
            "Imagine",
            "Journey",
            "Knowledge",
            "Learn",
            "Motivate",
            "Nature",
            "Observe",
            "Practice",
            "Question",
            "Research",
            "Science",
            "Talent",
            "Universe",
            "Value",
            "Wonder",
            "Explore",
            "Youth"
        ]
    },
    {
        id: "movie-night",
        name: "Movie Night",
        description: "Classic moments and clichés from movie marathons.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Plot twist",
            "Car chase",
            "Slow motion scene",
            "Jump scare",
            "Romantic kiss",
            "Hero one-liner",
            "Villain monologue",
            "Flashback",
            "Training montage",
            "Explosion",
            "Credits scene tease",
            "Unexpected cameo",
            "Phone rings at wrong time",
            "Spilled popcorn",
            "Someone falls asleep",
            "Pause to explain plot",
            "Quote along with line",
            "Check IMDb",
            "Someone says 'seen this before'",
            "Subtitles on",
            "Snack break",
            "Buffering",
            "Change the movie",
            "Too loud complaint",
            "Rewind a scene"
        ]
    },
    {
        id: "holiday-party",
        name: "Holiday Party",
        description: "Seasonal party moments for end-of-year fun.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Ugly sweater",
            "Secret Santa swap",
            "Holiday selfie",
            "Hot chocolate",
            "Holiday playlist",
            "Someone sings off-key",
            "Photo in front of tree",
            "Gift wrapping fail",
            "Burnt cookies",
            "Snow or fake snow",
            "Mismatched ornaments",
            "Kids running around",
            "Holiday movie playing",
            "Mistletoe spotted",
            "Board game starts",
            "Someone arrives late",
            "Forgot a gift",
            "Talk about New Year plans",
            "Holiday candles",
            "Snowflake decoration",
            "Party hat",
            "Spilled drink",
            "Group photo",
            "Festive socks",
            "Too many leftovers"
        ]
    },
    {
        id: "baby-shower",
        name: "Baby Shower",
        description: "Cute prompts for baby showers or sprinkle events.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Guess the due date",
            "Onesie gift",
            "Stuffed animal",
            "Baby bottle",
            "Diaper cake",
            "Blue or pink decoration",
            "Baby name suggestions",
            "Nursery talk",
            "Stroller gift",
            "Baby book",
            "Pacifier",
            "Baby socks",
            "Ultrasound photo",
            "Baby bump photo",
            "Family advice",
            "Funny parenting story",
            "Baby blanket",
            "Tiny shoes",
            "Baby shower game",
            "Cake cutting",
            "Confetti",
            "Balloon arch",
            "Thank you cards",
            "Gift opening",
            "Group hug"
        ]
    },
    {
        id: "wedding-shower",
        name: "Wedding Shower",
        description: "Moments and gifts from wedding showers and parties.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Toasts and speeches",
            "Ring selfie",
            "Bridal bouquet",
            "Matching outfits",
            "Wedding hashtag",
            "Registry gift",
            "Kitchen gadget",
            "Champagne glasses",
            "Bride talks about planning",
            "First date story",
            "Engagement story",
            "Wedding venue mention",
            "Cake tasting",
            "Decor inspo talk",
            "Dance playlist talk",
            "Photo of the couple",
            "Custom cookies",
            "Centerpiece photo",
            "Dress shopping mention",
            "Group selfie",
            "Advice card",
            "Thank you speech",
            "Happy tears",
            "Gift pile photo",
            "Inside joke"
        ]
    },
    {
        id: "sports-night",
        name: "Sports Night",
        description: "Game-day phrases and moments for sports fans.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Referee controversy",
            "Instant replay",
            "Overtime talk",
            "Halftime show",
            "Team jersey",
            "Face paint",
            "Touchdown / Goal",
            "Big save",
            "Bad call",
            "Timeout",
            "Coach yelling",
            "Crowd chanting",
            "Snack refill",
            "Commercial break",
            "Replay in slow motion",
            "Score prediction",
            "Trash talk",
            "Mascot on screen",
            "Close-up fan shot",
            "Injury timeout",
            "Post-game analysis",
            "Scoreboard graphic",
            "High five",
            "Nail-biter ending",
            "Changing the channel"
        ]
    },
    {
        id: "coding-buzzwords",
        name: "Coding Buzzwords",
        description: "Tech and startup buzzword bingo for dev teams.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Microservices",
            "Serverless",
            "Monolith",
            "Refactor",
            "Technical debt",
            "Cloud-native",
            "DevOps",
            "CI/CD",
            "Kubernetes",
            "AI-powered",
            "Machine learning",
            "Scalable",
            "Single source of truth",
            "Best practices",
            "Code review",
            "Pair programming",
            "Legacy code",
            "MVP",
            "Sprint planning",
            "Roadmap",
            "Breaking change",
            "Hotfix",
            "Regression",
            "Stand-up meeting",
            "Post-mortem"
        ]
    },
    {
        id: "travel-bucket",
        name: "Travel Bucket List",
        description: "Destinations and experiences for travel-themed bingo.",
        size: 5,
        useFreeCenter: false,
        items: [
            "Visit Paris",
            "See the Northern Lights",
            "Safari in Africa",
            "Road trip",
            "Island getaway",
            "Climb a mountain",
            "Visit a national park",
            "Try street food abroad",
            "Stay in a hostel",
            "Travel by train",
            "See a waterfall",
            "Visit a museum",
            "Hot air balloon ride",
            "Swim in the ocean",
            "Visit a desert",
            "Take a cruise",
            "Travel solo",
            "Visit a famous landmark",
            "Try a new language",
            "Sunrise hike",
            "City skyline view",
            "Local market",
            "Historic ruins",
            "Snow vacation",
            "Souvenir shopping"
        ]
    },
    {
        id: "kids-party",
        name: "Kids Birthday Party",
        description: "Fun moments and activities at children’s parties.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Birthday cake",
            "Candles blown out",
            "Party hats",
            "Balloon animals",
            "Face painting",
            "Piñata",
            "Magic trick",
            "Musical chairs",
            "Treasure hunt",
            "Goody bags",
            "Party games",
            "Photobooth props",
            "Happy Birthday song",
            "Gift opening",
            "Confetti",
            "Kids dancing",
            "Spilled juice",
            "Bubbles",
            "Balloon popping",
            "Sibling photobomb",
            "Cartoon character",
            "Theme decorations",
            "Parents chatting",
            "Group photo",
            "Tired kids"
        ]
    },
    {
        id: "music-festival",
        name: "Music Festival",
        description: "Festival sights and sounds for concert lovers.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Flower crown",
            "Band merch",
            "Food truck",
            "People on shoulders",
            "Singing along",
            "Phone flashlight crowd",
            "Missed the first song",
            "Rain poncho",
            "Lost sunglasses",
            "Setlist guess",
            "Surprise guest",
            "Encore chant",
            "Late-night set",
            "Long bathroom line",
            "Charging phone",
            "Festival wristband",
            "Loud bass",
            "Selfie with stage",
            "Crowd surfing",
            "DJ drop",
            "Merch sold out",
            "Finding friends",
            "Sore feet",
            "Sunscreen needed",
            "Dusty shoes"
        ]
    },
    {
        id: "book-club",
        name: "Book Club",
        description: "Discussion moments and clichés from book clubs.",
        size: 5,
        useFreeCenter: false,
        items: [
            "Didn’t finish the book",
            "Loved the ending",
            "Hated the ending",
            "Favorite character",
            "Plot twist talk",
            "Movie adaptation mention",
            "Author background",
            "Reading next month",
            "Quote is read aloud",
            "Book compared to another",
            "Someone cries",
            "Snacks and tea",
            "Different interpretation",
            "Talk about cover design",
            "Bookmark collection",
            "Audiobook mention",
            "Library vs buying",
            "Genre debate",
            "Slow middle section",
            "Couldn’t put it down",
            "TBR pile joke",
            "Highlighting passages",
            "Favorite line",
            "Character we dislike",
            "Book rating out of 5"
        ]
    },
    {
        id: "workout",
        name: "Workout Session",
        description: "Gym and workout habits for fitness bingo.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Forgot water bottle",
            "Stretching routine",
            "Warm-up jog",
            "Personal best",
            "Sore muscles",
            "Gym selfie",
            "Spotting a friend",
            "Group class",
            "New workout shoes",
            "High-intensity set",
            "Rest day talk",
            "Protein shake",
            "Counting reps out loud",
            "New playlist",
            "Trainer advice",
            "Foam rolling",
            "Sweaty towel",
            "Push-up challenge",
            "Plank hold",
            "Forgot headphones",
            "Trying new machine",
            "Late arrival",
            "Workout finished",
            "Goal setting",
            "Cool-down stretch"
        ]
    },
    {
        id: "conference",
        name: "Conference Day",
        description: "Talks, swag, and hallway chats at conferences.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Lanyard and badge",
            "Coffee station",
            "Swag bag",
            "Sticker trade",
            "Keynote speech",
            "Live demo",
            "Technical difficulties",
            "Q&A session",
            "Networking break",
            "Sponsor booth",
            "Photo wall",
            "Tweeting a quote",
            "Workshop signup",
            "Panel discussion",
            "Business card exchange",
            "Rushing between rooms",
            "Standing-room only",
            "Charging laptop",
            "After-party mention",
            "Conference app notification",
            "Talk ran long",
            "Room change",
            "Free T-shirt",
            "New connection on LinkedIn",
            "Swag photo"
        ]
    },
    {
        id: "icebreaker",
        name: "Icebreaker Bingo",
        description: "Conversation starters for new groups and teams.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Has traveled abroad",
            "Speaks more than 2 languages",
            "Has a pet",
            "Loves cooking",
            "Plays an instrument",
            "Has run a marathon",
            "Favorite TV show mentioned",
            "Reads fiction",
            "Prefers coffee",
            "Prefers tea",
            "Loves board games",
            "Enjoys hiking",
            "Has a hidden talent",
            "Has met a celebrity",
            "Early riser",
            "Night owl",
            "Favorite vacation spot",
            "Shares a hobby with you",
            "Works remotely",
            "Commutes by bike",
            "Has a fun fact",
            "Loves spicy food",
            "Has siblings",
            "Collects something",
            "Has lived in another city"
        ]
    },
    {
        id: "classroom-math",
        name: "Classroom Math",
        description: "Math vocabulary and concepts for classroom review.",
        size: 5,
        useFreeCenter: false,
        items: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Fraction",
            "Decimal",
            "Percent",
            "Equation",
            "Variable",
            "Graph",
            "Angle",
            "Triangle",
            "Square",
            "Rectangle",
            "Circle",
            "Perimeter",
            "Area",
            "Volume",
            "Prime number",
            "Even number",
            "Odd number",
            "Factor",
            "Multiple",
            "Rounding",
            "Estimate"
        ]
    },
    {
        id: "language-learning",
        name: "Language Learning",
        description: "Useful phrases for language learners.",
        size: 5,
        useFreeCenter: false,
        items: [
            "Hello",
            "Thank you",
            "Please",
            "Excuse me",
            "Good morning",
            "Good night",
            "How are you?",
            "Nice to meet you",
            "Where is the station?",
            "How much is this?",
            "I don’t understand",
            "Can you repeat?",
            "Slower, please",
            "Yes",
            "No",
            "Maybe",
            "What time is it?",
            "Bathroom, please",
            "Help",
            "I’m lost",
            "I’m learning this language",
            "Where are you from?",
            "See you later",
            "Good luck",
            "Cheers"
        ]
    },
    {
        id: "office-retirement",
        name: "Office Retirement",
        description: "Moments from an office farewell or retirement party.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Speech from manager",
            "Photo slideshow",
            "Cake cutting",
            "Card signed by everyone",
            "Gift presentation",
            "Old stories shared",
            "Inside joke",
            "Team photo",
            "Mention of first day",
            "Talk about future plans",
            "Retirement toast",
            "Laugh and tears",
            "Group hug",
            "Coworker late to party",
            "Surprise guest",
            "Favorite project mentioned",
            "Printed photos",
            "Decorated desk",
            "Farewell email",
            "Thank you speech",
            "Office snacks",
            "Music playing",
            "Throwback moment",
            "Handshake",
            "Last commute joke"
        ]
    },
    {
        id: "family-reunion",
        name: "Family Reunion",
        description: "Family stories, food, and fun traditions.",
        size: 5,
        useFreeCenter: true,
        items: [
            "Group photo attempt",
            "Family recipe shared",
            "Kids playing tag",
            "Old photo album",
            "New baby in family",
            "Someone tells a joke",
            "Talk about ancestors",
            "Barbecue grill",
            "Potluck dishes",
            "Matching T‑shirts",
            "Family game",
            "Sibling teasing",
            "Story about grandparents",
            "Travel stories",
            "Family tree talk",
            "Pet joins the party",
            "Weather comment",
            "Late arrival",
            "Family song",
            "Dance moment",
            "Sharing contact info",
            "Goodbye hugs",
            "Leftover containers",
            "Plan next reunion",
            "Group selfie"
        ]
    }
];
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bingo$2d$templates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bingo-templates.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const TEMPLATE_CARDS = [
    {
        id: "party-food",
        name: "Party Food Bingo",
        description: "Snacks and treats for game nights and parties.",
        badge: "Most popular"
    },
    {
        id: "team-meeting",
        name: "Team Meeting Bingo",
        description: "Fun icebreaker for your next stand-up or all‑hands.",
        badge: "Remote work"
    },
    {
        id: "classroom-vocab",
        name: "Classroom Vocabulary",
        description: "Practice new words with students in an engaging way.",
        badge: "Teachers"
    },
    {
        id: "movie-night",
        name: "Movie Night",
        description: "Classic moments and clichés from movie marathons.",
        badge: "Friends & family"
    },
    {
        id: "holiday-party",
        name: "Holiday Party",
        description: "Seasonal party moments for end-of-year fun.",
        badge: "Seasonal"
    },
    {
        id: "baby-shower",
        name: "Baby Shower",
        description: "Cute prompts for celebrating new arrivals.",
        badge: "Family"
    },
    {
        id: "wedding-shower",
        name: "Wedding Shower",
        description: "Moments and gifts from wedding showers.",
        badge: "Weddings"
    },
    {
        id: "sports-night",
        name: "Sports Night",
        description: "Game-day phrases and moments for sports fans.",
        badge: "Sports"
    },
    {
        id: "coding-buzzwords",
        name: "Coding Buzzwords",
        description: "Tech and startup buzzword bingo for dev teams.",
        badge: "Developers"
    },
    {
        id: "travel-bucket",
        name: "Travel Bucket List",
        description: "Destinations and experiences for travel-themed bingo.",
        badge: "Travel"
    },
    {
        id: "kids-party",
        name: "Kids Birthday Party",
        description: "Fun moments and activities at children’s parties.",
        badge: "Kids"
    },
    {
        id: "music-festival",
        name: "Music Festival",
        description: "Festival sights and sounds for concert lovers.",
        badge: "Music"
    },
    {
        id: "book-club",
        name: "Book Club",
        description: "Discussion prompts and clichés from book clubs.",
        badge: "Readers"
    },
    {
        id: "workout",
        name: "Workout Session",
        description: "Gym and workout habits for fitness bingo.",
        badge: "Fitness"
    },
    {
        id: "conference",
        name: "Conference Day",
        description: "Talks, swag, and hallway chats at conferences.",
        badge: "Events"
    },
    {
        id: "icebreaker",
        name: "Icebreaker Bingo",
        description: "Conversation starters for new groups and teams.",
        badge: "Icebreaker"
    },
    {
        id: "classroom-math",
        name: "Classroom Math",
        description: "Math vocabulary and concepts for students.",
        badge: "Math"
    },
    {
        id: "language-learning",
        name: "Language Learning",
        description: "Useful phrases for practicing new languages.",
        badge: "Languages"
    },
    {
        id: "office-retirement",
        name: "Office Retirement",
        description: "Moments from a farewell or retirement party.",
        badge: "Office"
    },
    {
        id: "family-reunion",
        name: "Family Reunion",
        description: "Stories, food, and fun from big family meetups.",
        badge: "Family"
    }
];
function LandingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:px-6 lg:px-8 lg:pt-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-1.5 w-1.5 rounded-full bg-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                "Bingo Card Generator"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl",
                                    children: [
                                        "Start with a",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent",
                                            children: "ready‑made bingo template"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        "or create your own."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-2xl text-sm text-slate-400 sm:text-base",
                                    children: "Pick a template that matches your event, then customize the squares in seconds. Perfect for parties, classrooms, and team meetings."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/generator",
                                        children: "Create a blank card"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "No signup required · Print or save as PDF."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-semibold uppercase tracking-wide text-slate-300",
                                    children: "Featured templates"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "badge",
                                    children: "Click a template to begin"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
                            children: TEMPLATE_CARDS.map((tpl)=>{
                                const accent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bingo$2d$templates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TEMPLATE_ACCENT_BY_ID"][tpl.id];
                                const templateData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bingo$2d$templates$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TEMPLATES"].find((t)=>t.id === tpl.id);
                                const previewItems = templateData ? templateData.items.slice(0, 9) : Array.from({
                                    length: 9
                                }, ()=>"");
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/generator?template=${tpl.id}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("group flex h-full flex-col justify-between border bg-slate-900/95 text-slate-50 shadow-lg transition hover:-translate-y-1 hover:bg-slate-900", accent),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "space-y-3 pb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                className: "text-base font-semibold",
                                                                children: tpl.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rounded-full bg-slate-900/90 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary",
                                                                children: tpl.badge
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                        className: "text-sm text-slate-200",
                                                        children: tpl.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "space-y-3 pt-0 text-[11px] text-slate-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-3 gap-[3px] rounded-lg bg-slate-950/80 p-[3px]",
                                                        children: previewItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex h-7 items-center justify-center rounded-md border border-slate-700/70 bg-slate-900/80 text-[10px] font-semibold text-slate-100", i === 4 && "bg-primary text-primary-foreground shadow-sm shadow-primary/40"),
                                                                children: i === 4 ? "FREE" : item
                                                            }, i, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-[11px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "h-1.5 w-1.5 rounded-full bg-primary/80 group-hover:bg-primary"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 223,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "5 × 5 layout · Editable"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-primary group-hover:text-primary/80",
                                                                children: "Use template →"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 19
                                    }, this)
                                }, tpl.id, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__754ce29f._.js.map